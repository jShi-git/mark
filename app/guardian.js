_window_open = function(){
	window.open.apply(window, arguments);
}
window.Guardian = window.Guardian || {
	type: "app",
	open_web: _window_open,
	_current: window,
	open_file: function(url){
		// TODO i18n
		chrome.app.window.create(chrome.i18n.getMessage("index"), { frame: "none", width: 800, height: 600}, function(createdWindow){
			createdWindow.contentWindow._FILE = url;
		})
	},
	open_auth: function(url){
		var self = this;
		chrome.app.window.create('webproxy.html', {"width":800, "height": 600}, function(createdWindow){
		createdWindow.contentWindow.URL = url;
		createdWindow.contentWindow.addEventListener("message" , function(e){
			console.log("final get", e);
			createdWindow.close();
			self._cookie = e.data.cookie;
			Vine.trigger("FAKE_COOKIE", self._cookie);
			window.postMessage("oauthed", '*')
			LocalDB.set('cookie', self._cookie);
		})
	});	
	},
	onunload: function(callback){
		// this._current.onClosed.addListener(callback);
		//window.onbeforeunload = callback;
	},
	minimize: function(){
		this._current.minimize()
	},
	maximize: function(){
		if (this._current.isMaximized()){
			this._current.restore();
		} else {
			this._current.maximize();
		}
	},
	close: function(){
		Session.current_file && !Session.current_file.readonly &&  SessionLock.stop()
		this._current.close()
	},
	fullscreen: function(){

		!this._current.isFullscreen() ? this._current.fullscreen() : this._current.restore();
	},
	save_file: function(title, blob){

		var config = {type: 'saveFile', suggestedName:  title };
		chrome.fileSystem.chooseEntry(config, function(writableEntry) {
			if (!writableEntry) return;
			toastr.wait(MSG('Waiting'));
			writableEntry.createWriter(function(fileWriter) {

				fileWriter.onwriteend = function(e) {
					/*
					status.innerText = 'Export to '+
					fileDisplayPath+' completed';
					// You need to explicitly set the file size to truncate
					// any content that could be there before
					this.onwriteend = null;
					this.truncate(e.total);
					*/
				    toastr.success(MSG('Done'));
				};

				fileWriter.onerror = function(e) {
				    toastr.error(MSG('Error'));
				};

				fileWriter.write(blob);

			});
		})
	},
	_math_defer: {},
	render_math: function(data, callback){
		//this._math_defer[data.hash] = this._math_defer[data.hash] || [];
		if (!this._math_defer[data.hash]){
			this._math_defer[data.hash] = []
			setTimeout(function(){
				$('#sandbox')[0].contentWindow.postMessage(data, '*');	
			})
		}
		this._math_defer[data.hash].push(callback);
	}
}
window.addEventListener('message', function(e){
	if (e.data.type == 'render_math'){
		//var callback = Guardian._math_defer[e.data.hash]
		(Guardian._math_defer[e.data.hash] || []).map(function(callback){
			callback(e.data.content);	
		})
		delete Guardian._math_defer[e.data.hash];
		//callback && callback(e.data.content);
	}
})

var loadImage = function(uri, callback) {
  var xhr = new XMLHttpRequest();
  xhr.responseType = 'blob';
  xhr.onload = function() {
    callback(window.URL.createObjectURL(xhr.response), uri);
  }
  xhr.open('GET', uri, true);
  xhr.send();
}
// http://davidwalsh.name/detect-node-insertion
document.addEventListener("webkitAnimationStart", function(event){
	console.log('animation', event);
	if (event.animationName=='img_load'){
		var img = event.target;
		 loadImage(img.src, function(blob_uri, requested_uri) {
			 img.src = blob_uri;
		 })	 
	}
}, false); // Chrome + Safari


