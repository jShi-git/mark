window.LocalDB = {
	init: function(callback){
		var self = this;
		self._db = "";
		// chrome.storage.local.get(undefined, function(result){
		// 	self._db = result;
		// 	Vine.trigger("FAKE_COOKIE", self._db['cookie'] || {})
		// 	callback();
		// })
	},
	set : function(key, value){
		var params = {}
		params[key] = value;
		// localStorage.set("params", params);
		// chrome.storage.local.set(params, function(){})
		this._db[key] = value
		return value
	},
	get: function(key){
		return this._db[key];
	},
	del: function(key){
		delete this._db[key];
		// chrome.storage.local.remove(key, function(){})
	},
	force_fetch: function(key, callback){
		callback(this._db[key]);
		// chrome.storage.local.get(key, function(result){
		// 	callback(result[key]);
		// })
	},
	fetch_locks: function(){
		// chrome.storage.local.get(undefined, function(result){
		// 	Object.keys(result).map(function(i){
		// 		if (/session_lock/.test(i) && i.indexOf(Session.tab_last_file) < 0){
		// 			console.log('session_lock', i, result[i])
		// 			this._db[i] = result[i];
		// 		}
		// 	})
		// })
	}
}

