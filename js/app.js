function asyncLoad(a, b) {
	! function(c, d) {
		{
			var e = c.createElement(d);
			c.getElementsByTagName(d)[0]
		}
		e.src = a, document.body.appendChild(e), e.onload = function() {
			b && b()
		}
	}(document, "script")
}

function prefixed(a) {
	return testPropsAll(a, "pfx")
}

function testProps(a, b) {
	for (var c in a)
		if (void 0 !== dillingerStyle[a[c]]) return "pfx" === b ? a[c] : !0;
	return !1
}

function testPropsAll(a, b) {
	var c = a.charAt(0).toUpperCase() + a.substr(1),
		d = (a + " " + domPrefixes.join(c + " ") + c).split(" ");
	return testProps(d, b)
}

function normalizeTransitionEnd() {
	var a = {
		WebkitTransition: "webkitTransitionEnd",
		MozTransition: "transitionend",
		OTransition: "oTransitionEnd",
		msTransition: "msTransitionEnd",
		transition: "transitionend"
	};
	return a[prefixed("transition")]
}

function create_element_html(a, b, c) {
	return "<" + a + " " + $.map(c || {}, function(a, b) {
		return void 0 !== a && null !== a ? b + "=" + a : void 0
	}).join(" ") + ">" + b + "</" + a + ">"
}

function process(a) {
	var b = a.split(":").map("trim"),
		c = Vine._fns[b.shift()];
	return {
		fn: c,
		args: b
	}
}

function watcher_normalize(a) {
	return a.replace(/\W/g, "_")
}

function NoteFile(a) {
	var b = "Untitled",
		c = this;
	c.md = "", c.title = b, c.images = [], c.synced_cache = {}, a = a || {}, this.fid = a.fid || (new Date).getTime(), this.shrinked = a.shrinked, this._attachments = a._attachments;
	var d = ["fid", "title", "tagNames", "guid", "md", "status", "notebook", "images"],
		e = d.concat(["content"]),
		f = {
			synced: "synced",
			created: "created",
			syncing: "syncing",
			modified: "modified"
		};
	d.push("synced_cache"), $.each(d, function(b, d) {
		c[d] = a[d] || c[d]
	}), this.need_sync = function() {
		return this.status != f.synced && this.status != f.syncing
	}, this.save = function() {
		if (!Session.user) return Vine.trigger("NOT_AUTHED");
		if (ImageManager.check_missing_images()) return Vine.trigger("MISSING_IMAGES");
		var a = this.status;
		this.set_file_status(f.syncing), Evernote.save(this.prepare()).success(function(b, d, e) {
			var g = JSON.parse(e.responseText);
			if (g.guid) c.guid = g.guid, c.notebook || (c.notebook = _.values(Session.notebooks).filter(function(a) {
				return a.guid == g.notebookGuid
			})[0]), c.set_file_status(f.synced), c.update_cache(g.resource_dict);
			else {
				var h = g.message ? Notifier.messages.saveFailedDetail + g.message : Notifier.messages.saveFailed;
				g.action && (h += g.action), Notifier.showMessage(h, 5e4), c.set_file_status(a)
			}
		}).fail(function(b) {
			if (console.log(b), c.set_file_status(a), 401 == b.status) Vine.trigger("NOT_AUTHED");
			else try {
				var d = JSON.parse(b.responseText);
				Vine.trigger("SYNC_FILE_ERROR", [d.code, d.message, d.detail])
			} catch (e) {
				Vine.trigger("SYNC_FILE_ERROR", [b.status, "Server error"])
			}
		})
	}, this.set_file_status = function(a, b) {
		var c = this.status;
		this.status = a, Vine.trigger("FILE_STATUS_CHANGED", [a, b, c])
	}, this.prepare = function() {
		this.md = editor.getSession().getValue(), this.tagNames = TagsPlugin.get_tags(), this.notebook = TagsPlugin.get_notebook(), $preview.find("pre").removeAttr("data-initialized").removeAttr("data-gclp-id");
		var a = $preview.clone();
		return a.find(".to-remove").remove(), a.find("img[longdesc]").each(function(a, b) {
			var d = $(b),
				e = c.synced_cache[d.attr("longDesc")];
			e && (delete d.removeAttr("src"), d.attr("hash", e.hash), d.attr("guid", e.guid))
		}), a = a.html(), this.content = Evernote.sanitize(a), this.to_json()
	}, this.update_cache = function(a) {
		console.debug("res", a), this.synced_cache = a
	}, this.update_info = function(a) {
		this.status == f.synced && this.md !== a && this.set_file_status(f.modified), this.md = a;
		var c = this.title;
		this.title = $preview.find(".note-title").first().text().trim() || b, c != this.title && Vine.trigger("CHANGE_TITLE", this)
	}, this.to_json = function() {
		return $.reduce(e, function(a, b) {
			return a[b] = c[b], a
		}, {})
	}, this.to_db_json = function() {
		return $.reduce(d, function(a, b) {
			return a[b] = c[b], a
		}, {})
	}, this.get_info = function() {
		return {
			fid: this.fid,
			title: this.title,
			guid: this.guid,
			notebook: this.notebook && this.notebook.name,
			status: this.status
		}
	}, this.is_empty = function() {
		return !(this.guid || this.md && this.md.trim())
	};
	var g = (this.md || "").length;
	this.local_delta = function() {
		var a = this.md.length - g;
		return g = this.md.length, a
	}, this.active = function() {
		this.set_file_status(this.status || f.created)
	}, this.load_images = function() {
		return (this.images || []).map(function(a) {
			return Session.load_image(a)
		})
	}, this.merge_remote = function() {}
}

function initNav() {
	$(".wmd-button-row li").addClass("btn btn-success").css("left", 0);
	var a = $(".wmd-button-group1");
	// $("#wmd-bold-button").append($('<i class="icon-bold">')).appendTo(a), $("#wmd-italic-button").remove(), a = $(".wmd-button-group3"), $("#wmd-ulist-button").remove(), $("#wmd-heading-button").append($('<i class="icon-text-height">')).appendTo(a), $("#wmd-hr-button").append($('<i class="icon-ellipsis">')).appendTo(a), a = $(".wmd-button-group4"), $("#wmd-undo-button").remove(), $("#wmd-redo-button").remove(), a = $(".wmd-button-group2"), $("#wmd-link-button").append($('<i class="icon-globe">')).appendTo(a), $("#wmd-quote-button").append($('<i class="icon-indent-right">')).appendTo(a), $("#wmd-code-button").append($('<i class="icon-code">')).appendTo(a), $("#wmd-image-button").append($('<i class="icon-picture">')).appendTo($(".image-button-group"))
	$("#wmd-bold-button").append($('<i class="icon-bold">')).appendTo(a), $("#wmd-italic-button").remove(), a = $(".wmd-button-group3"), $("#wmd-ulist-button").remove(), $("#wmd-heading-button").append($('<i class="icon-text-height">')).appendTo(a), $("#wmd-hr-button").append($('<i class="icon-ellipsis">')).appendTo(a), a = $(".wmd-button-group4"), $("#wmd-undo-button").remove(), $("#wmd-redo-button").remove(), a = $(".wmd-button-group2"), $("#wmd-link-button").append($('<i class="icon-globe">')).appendTo(a), $("#wmd-quote-button").append($('<i class="icon-indent-right">')).appendTo(a), $("#wmd-code-button").append($('<i class="icon-code">')).appendTo($(".image-button-group"))
}

function migrate_profile() {
	var a = LocalDB.get("profile");
	if (a) {
		if (console.warn("Migrate legacy profile..."), _.values(a.filelist).map(function(a) {
			a.fid = a.guid, a.status = "synced", Session.files[a.fid] = a
		}), a.currentMd) {
			var b = {
				fid: (new Date).getTime(),
				md: a.currentMd,
				images: _.keys(a.images),
				status: "created",
				title: "Unsaved"
			};
			b = new NoteFile(b), _.keys(a.images).map(function(b) {
				var c = (a.images[b], utils.seperate_base64(a.images[b])),
					d = {
						content_type: c.type,
						data: c.data
					};
				a.images[b] = d
			}), b._raw_attachments = a.images, Session.files[b.fid] = b, Session.save_file(b)
		}
		Session.dump("files"), FileDB.put(a, "legacy_profile_" + (new Date).getTime(), void 0, function(a) {
			a || LocalDB.del("profile")
		})
	}
}

function is_file_path(a) {
	return /\s|\.|\//.test((a || "").trim())
}

function get_file_affix(a) {
	return (a.match(/.*\.(.*)/) || {})[1]
}

function getUserProfile() {
	var a;
	try {
		a = JSON.parse(localStorage.profile), a = $.extend(!0, profile, a)
	} catch (b) {
		a = profile
	}
	profile = a
}

function updateUserProfile(a) {
	localStorage.clear(), localStorage.profile = JSON.stringify($.extend(!0, profile, a))
}

function resetProfile() {
	localStorage.clear(), profile.autosave.enabled = !1, delete localStorage.profile, window.location.reload()
}

function get_readme() {
	var a = $("#readme");
	return new NoteFile({
		fid: "readme_copy",
		md: a.text()
	})
}

function get_hidden_note() {
	var a = $("#hidden_content");
	if (a.length) {
		var b = $.reduce(a.children(), function(a, b) {
			a[b.tagName.toLowerCase()] = b.text()
		}, {});
		return b.md = unescape(a.find("en-note > center").text()), b.tagNames = b.tagNames.split(","), new NoteFile(b)
	}
}

function get_last_file() {
	return Session.load_file(Session.last_file_id)
}

function get_open_file() {
	var a = (/id=(\w*)/.exec(window.location.href) || [])[1];
	return a && Session.load_file(a)
}

function hasLocalStorage() {
	var a;
	try {
		localStorage.getItem && (a = localStorage)
	} catch (b) {}
	return a
}

function changeTheme(a) {
	var b = $(a.target);
	if (b.attr("data-value") !== Session.theme) {
		$theme.find("li > a.selected").removeClass("selected"), b.addClass("selected");
		var c = b.attr("data-value");
		$(a.target).blur(), fetchTheme(c, function() {})
	}
}

function fetchTheme(a, b) {
	var c = a.split("/").pop(),
		d = (editor.getTheme() || "").split("/").pop();
	asyncLoad(CDN + "/js/themes/theme-" + c + ".js", function() {
		editor.setTheme(a), b && b(), Vine.trigger("UPDATE_THEME", [a, c, d])
	})
}

function updateBg(a) {
	document.body.style.backgroundColor = bgColors[a]
}

function preinit() {
	initMain(), initAce(), initAceEditor(), initNav(), bindPreview(), bindNav(), bindKeyboard()
}

function init() {
	$.support.transitionEnd = normalizeTransitionEnd(), Session.load(), initUi(), Parser.init(), migrate_profile(), editorInit(), fade_loading(), get_notify()
}

function initMain() {
	var a = -1 !== navigator.platform.toUpperCase().indexOf("MAC");
	$.browser.webkit && !a && $(document.body).addClass("slim-scroll"), $(document.body).addClass("app"), a && $("[platform-related]").each(function(a, b) {
		b = $(b);
		var c = b.html();
		b.html(c.replace(/Ctrl/gi, "Cmd").replace(/Alt/gi, "Opt"))
	})
}

function initAceEditor() {
	editor.getSession().setUseWrapMode(!0), editor.setHighlightActiveLine(!0), editor.getSession().setMode("ace/mode/markdown"), editor.setBehavioursEnabled(!0), editor.renderer.setPrintMarginColumn(!1), editor.session.setUseWrapMode(!0), editor.session.setNewLineMode("unix"), editor.renderer.setShowGutter(!1), editor.renderer.setPadding(15), editor.setFontSize("13px"), editor.renderer.setScrollMargin(20, 40), editor.session.setScrollTop(0), editor.resize(!0), previewMd()
}

function initAce() {
	editor = ace.edit("editor"), window._editor = new Markdown.Editor({}), _editor.run(editor), core = {}, _editor.hooks.set("insertLinkDialog", function(a) {
		return core.insertLinkCallback = a, utils.resetModalInputs(), $(".modal-insert-link").modal(), !0
	}), _editor.hooks.set("insertImageDialog", function(a) {
		return core.insertLinkCallback = a, core.catchModal ? !0 : (utils.resetModalInputs(), $(".modal-insert-image").modal(), !0)
	}), _editor.hooks.set("onPreviewRefresh", function() {
		return previewMd(), !0
	}), $(".action-insert-link").click(function(a) {
		var b = utils.getInputTextValue($("#input-insert-link"), a);
		void 0 !== b && (core.insertLinkCallback(b), core.insertLinkCallback = void 0)
	}), $(".action-insert-image").click(function(a) {
		var b = utils.getInputTextValue($("#input-insert-image"), a);
		b && Vine.trigger("ACTION_INSERT_IMAGE", b.trim())
	}), $(".modal-insert-link, .modal-insert-image").on("hidden.bs.modal", function() {
		void 0 !== core.insertLinkCallback && (core.insertLinkCallback(null), core.insertLinkCallback = void 0)
	}), editor.on("focus", function() {
		Session.resume()
	}), editor.on("blur", function() {
		Session.pause()
	}), $(document).ready(function() {
		! function(a) {
			function b(b) {
				var c = a.lines[b];
				0 !== c.length && /heading.*multi/.test(c[0].type) && a.lines[b - 1].map(function(a) {
					a.type = c[0].type + ".prev"
				})
			}

			function c() {
				if (a.running) {
					for (var d = new Date, e = a.currentLine, f = -1, g = a.doc; a.lines[e];) e++;
					var h = e,
						i = g.getLength(),
						j = 0;
					for (a.running = !1; i > e;) {
						a.$tokenizeRow(e), f = e;
						do b(e), e++; while (a.lines[e]);
						if (j++, j % 5 === 0 && new Date - d > 20) return a.running = setTimeout(c, 20), void(a.currentLine = e)
					}
					a.currentLine = e, f >= h && a.fireUpdateEvent(h, f)
				}
			}
			a.$worker = function() {
				a.lines.splice(0, a.lines.length), a.states.splice(0, a.states.length), a.currentLine = 0, c()
			}
		}(editor.session.bgTokenizer)
	})
}

function initUi() {
	var a = Session.theme;
	fetchTheme(a, function() {
		$theme.find('li > a[data-value="' + a + '"]').addClass("selected")
	});
	var b = $(".ace_content")[0];
	b.ondragover = function() {
		return this.className = "hover", !1
	}, b.ondragend = function() {
		return this.className = "", !1
	}, b.ondrop = function(a) {
		a.preventDefault(), this.className = "";
		var b = a.dataTransfer.files;
		console.debug("drop file", b), $.map(b, function(a) {
			a.type.indexOf("image") >= 0 && ImageManager.insert(a)
		})
	}, document.onpaste = function(a) {
		var b = a.clipboardData.items || a.clipboardData.files;
		console.debug("paste", JSON.stringify(b)), $.map(b, function(a) {
			if (a.type.indexOf("image") >= 0) {
				var b = a.getAsFile();
				ImageManager.insert(b)
			}
		})
	};
	var c = parseInt((/msie (\d+)/.exec(navigator.userAgent.toLowerCase()) || [])[1]);
	c && $("#modal-generic").removeClass("fade"), $(".save-file").click(function() {
		saveFile()
	})
}

function fetchNotebooks() {
	$("#notebooks-hint").typeahead()
}

function bindPreview() {
	$("#editor").bind("keyup", _.throttle(previewMd, 300))
}

function bindNav() {
	$theme.find("li > a").bind("click", function(a) {
		return changeTheme(a), !1
	})
}

function bindKeyboard() {
	key("command+s, ctrl+s", function(a) {
		saveFile(!0), a.preventDefault()
	}), key("command+alt+n, ctrl+alt+n, command+n, ctrl+n", function(a) {
		Vine.trigger("CREATE_FILE"), a.preventDefault()
	}), key("command+enter, ctrl+enter", function(a) {
		Vine.trigger("TOGGLE_RESIZE"), a.preventDefault()
	}), key("command+r, ctrl+r", function(a) {
		a.preventDefault()
	});
	var a = {
			name: "save",
			bindKey: {
				mac: "Command-S",
				win: "Ctrl-S"
			},
			exec: function() {
				return saveFile(!0), !0
			}
		},
		b = {
			name: "resize",
			bindKey: {
				mac: "Command-ENTER",
				win: "Ctrl-ENTER"
			},
			exec: function() {
				Vine.trigger("TOGGLE_RESIZE")
			}
		},
		c = {
			name: "new",
			bindKey: {
				mac: "Command-Alt-N|Command-N",
				win: "Ctrl-Alt-N|Ctrl-N"
			},
			exec: function() {
				Vine.trigger("CREATE_FILE")
			}
		};
	key("command+/, ctrl+/", function(a) {
		do_help(), a.preventDefault()
	}), key("command+o, ctrl+o", function(a) {
		$(".open-folder-btn").click(), a.preventDefault()
	}), key("command+m, ctrl+m", function(a) {
		$(".profile-btn:visible").click(), a.preventDefault()
	});
	var d = {
			name: "Open",
			bindKey: {
				mac: "Command-O",
				win: "Ctrl-O"
			},
			exec: function() {
				$(".open-folder-btn").click()
			}
		},
		e = {
			name: "Help",
			bindKey: {
				mac: "Command-/",
				win: "Ctrl-/"
			},
			exec: function() {
				do_help()
			}
		},
		f = {
			name: "Prevernt Refresh",
			bindKey: {
				mac: "Command-R",
				win: "Ctrl-R"
			},
			exec: function() {}
		},
		g = {
			name: "Menu",
			bindKey: {
				mac: "Command-M",
				win: "Ctrl-M"
			},
			exec: function() {
				$(".profile-btn:visible").click()
			}
		};
	editor.$markdownCommands.addCommand(a), editor.$markdownCommands.addCommand(c), editor.$markdownCommands.addCommand(b), editor.$markdownCommands.addCommand(d), editor.$markdownCommands.addCommand(e), editor.$markdownCommands.addCommand(g);
	var h = editor.$markdownCommands.commandKeyBinding;
	_.extend(h[3], h[1]), editor.commands.addCommand(a), editor.commands.addCommand(c), editor.commands.addCommand(b), editor.commands.addCommand(d), editor.commands.addCommand(e), editor.commands.addCommand(f), editor.commands.addCommand(g)
}

function autoSave() {
	setInterval(function() {
		save()
	}, 2e3)
}

function save() {
	Session.save_current_file()
}

function saveFile() {
	Vine.trigger("SYNC_FILE")
}

function do_help() {
	Vine.trigger("SHOW_HELP")
}

function getScrollHeight(a) {
	return void 0 !== a[0].scrollHeight ? a[0].scrollHeight : void 0 !== a.find("html")[0].scrollHeight && 0 !== a.find("html")[0].scrollHeight ? a.find("html")[0].scrollHeight : a.find("body")[0].scrollHeight
}

function syncPreview() {
	var a = window.ace.edit("editor"),
		b = $("#preview"),
		c = a.getSession().getLength() - a.getLastVisibleRow() + a.getFirstVisibleRow(),
		d = getScrollHeight(b),
		e = a.getFirstVisibleRow() / c;
	setTimeout(function() {
		b.scrollTop(e * (d - b.height()))
	})
}

function previewMd() {
	var a = editor.getSession().getValue(),
		b = TagsPlugin.process(Parser.process(a));
	if (void 0 !== a) {
		$preview.html("").html(b), ImageManager.process($preview), $preview.find("code").map(function(a, b) {
			var c = b.textContent || b.innerText,
				d = c.match(/^\s*\$(.*?)\$\s*$/);
			d && $(b).addClass("mathjax inline").text(d[1]).wrap('<span class="inline-mathjax"></span>')
		}), $preview.find("pre, .inline-mathjax").map(function(a, b) {
			MathProcessor.process_html(b)
		}), $preview.find("pre").map(function(a, b) {
			// $(b).addClass(Session.config.code_highlight)
			$(b).addClass("hljs-light")

		}), window.MathJax && MathJax.Hub.Queue(function() {
			MathCache.clean()
		}), MathCache.clean();
		var c = $preview.find(":header").first().addClass("note-title");
		utils.try_chain(Session, "config", "publish", "title") || c.addClass("to-remove"), Session.current_file && Session.current_file.update_info(a)
	}
}

function refresh_button_border() {
	var a = $(".open-folder-btn").css("color");
	return $(".open-folder-btn").css({
		"border-color": a
	}), $(".profile-btn").css($("#app_wrap").hasClass("no-preview") ? {
		"border-color": a
	} : {
		"border-color": ""
	}), $(".profile-btn").css("border-color") == a
}

function fade_loading() {
	var a = $("#loading");
	a.bind($.support.transitionEnd, function() {
		$("#main").removeClass("bye"), a.remove()
	}).addClass("fade")
}

function editorInit() {
	ENV.chrome_app && Session.zoom && Vine.trigger("ZOOM", [Session.zoom, !0]);
	var a = editor.session.getDocument();
	a.on("append_last", function(a) {
		var b = a.data.range.end.row;
		editor.session.setScrollTop(40 * b)
	}), TagsPlugin.init(), window.ace.edit("editor").session.on("changeScrollTop", syncPreview), $.getScript(CDN + "/lib/MathJax/MathJax.js?config=TeX-AMS-MML_HTMLorMML", function() {
		MathJax.Hub.Config({
			tex2jax: {
				inlineMath: [
					["$#", "#$"]
				],
				displayMath: [
					["$$$$", "$$$$"]
				]
			},
			"HTML-CSS": {
				showMathMenu: !1
			}
		}), MathJax.Hub.Queue(function() {
			previewMd()
		})
	})
}

function get_notify() {
	$.get(BACKEND + "/god/notify").done(function(a) {
		switch (a.type) {
			case "vine":
				var b = a.data.split(":").map("trim"),
					c = $.Event(b.shift());
				c.originalEvent = e, Vine.trigger(c, b);
				break;
			case "notify":
				Vine.trigger("SHOW_NOTIFY", a.data)
		}
	})
}
var jqElt = $,
	dillinger = "dillinger",
	dillingerElem = document.createElement(dillinger),
	dillingerStyle = dillingerElem.style,
	domPrefixes = "Webkit Moz O ms Khtml".split(" ");
! function(a) {
	a.reduce = function(b, c, d) {
		return Array.prototype.reduce ? Array.prototype.reduce.call(b, c, d) : (a.each(b, function(a, e) {
			d = c.call(null, d, e, a, b)
		}), d)
	}, Array.prototype.select = function(a) {
		for (var b = this.length, c = [], d = 0; b > d; d++) a(this[d], d) && c.push(this[d]);
		return c
	}, __map = Array.prototype.map, Array.prototype.map = function(a) {
		if (_.isString(a)) {
			var b = a;
			a = function(a) {
				var c = a[b];
				return _.isFunction(c) ? c.call(a) : c
			}
		}
		return __map.call(this, a)
	}
}(jQuery), utils = {}, utils.resetModalInputs = function() {
	$(".modal input[type=text]:not([disabled]), .modal input[type=password], .modal textarea").val(""), $(".modal input[type=checkbox]").prop("checked", !1).change()
}, utils.getInputValue = function(a) {
	return a = jqElt(a), a.val()
}, utils.setInputValue = function(a, b) {
	a = jqElt(a), a.val(b)
}, utils.getInputTextValue = function(a, b, c) {
	a = jqElt(a);
	var d = a.val();
	return void 0 === d ? void 0 : (d = utils.trim(d), 0 === d.length || void 0 !== c && !d.match(c) ? void 0 : d)
}, utils.getInputIntValue = function(a, b, c, d) {
	a = jqElt(a);
	var e = utils.getInputTextValue(a, b);
	return void 0 === e ? void 0 : (e = parseInt(e, 10), isNaN(e) || void 0 !== c && c > e || void 0 !== d && e > d ? void inputError(a, b) : e)
}, utils.getInputRegExpValue = function(a, b) {
	a = jqElt(a);
	var c = utils.getInputTextValue(a, b);
	if (void 0 === c) return void 0;
	try {
		new RegExp(c)
	} catch (d) {
		return void inputError(a, b)
	}
	return c
}, utils.getInputJsValue = function(element, event) {
	element = jqElt(element);
	var value = utils.getInputTextValue(element, event);
	if (void 0 === value) return void 0;
	try {
		eval("var test=" + value)
	} catch (e) {
		return void inputError(element, event)
	}
	return value
}, utils.getInputChecked = function(a) {
	return a = jqElt(a), a.prop("checked")
}, utils.setInputChecked = function(a, b) {
	a = jqElt(a), a.prop("checked", b).change()
}, utils.getInputRadio = function(a) {
	return $("input:radio[name=" + a + "]:checked").prop("value")
}, utils.setInputRadio = function(a, b) {
	$("input:radio[name=" + a + "][value=" + b + "]").prop("checked", !0).change()
}, utils.resetModalInputs = function() {
	$(".modal input[type=text]:not([disabled]), .modal input[type=password], .modal textarea").val(""), $(".modal input[type=checkbox]").prop("checked", !1).change()
}, utils.trim = function(a) {
	return $.trim(a)
}, utils.createBackdrop = function(a, b) {
	var c = $("<div>", {
		"class": "modal-backdrop in",
		"data-toggle": a,
		"data-target": b
	});
	return document.body.appendChild(c[0]), c
}, utils.seperate_base64 = function(a) {
	var b;
	return a = a.replace(/^data:(.*);base64\,/, function(a, c) {
		return b = c, ""
	}), {
		type: b,
		data: a
	}
}, utils.array_to_base64 = function(a) {
	for (var b = "", c = new Uint8Array(a), d = c.byteLength, e = 0; d > e; e++) b += String.fromCharCode(c[e]);
	return window.btoa(b)
}, utils.saveAs = function(a, b) {
	if (void 0 === saveAs || /constructor/i.test(window.HTMLElement))
		if (_.isString(a)) {
			var c = "data:application/octet-stream;base64," + utils.encodeBase64(a);
			window.open(c, "file")
		} else {
			var d = new FileReader;
			d.onload = function(a) {
				utils.redirectConfirm("You are opening a PDF document.", function() {
					var b = "data:application/pdf;" + a.target.result.substring(a.target.result.indexOf("base64"));
					window.open(b, "file")
				})
			}, d.readAsDataURL(a)
		} else _.isString(a) && (a = new Blob([a], {
		type: "text/plain;charset=utf-8"
	})), saveAs(a, b)
}, utils.try_chain = function() {
	for (var a = Array.prototype.slice.call(arguments), b = a.shift() || {}; b = b[a.shift()], b && a.length > 0;);
	return b
}, utils.until = function(a, b, c) {
	var c = 0;
	b = b || 10;
	var d = setInterval(function() {
		c++, (a() || c >= b) && clearInterval(d)
	}, c || 200)
}, utils.add_style = function(a, b, c) {
	if (c) {
		var d = document.createElement("style");
		d.appendChild(document.createTextNode(a)), document.body.appendChild(d);
		var e = Array.prototype.slice.call(d.sheet.cssRules).map(function(a) {
			var b = a.selectorText.replace(/\bbody\b/g, "").split(", ").map(function(a) {
				return c + " " + a
			}).join(", ");
			return a.cssText.replace(a.selectorText, b)
		}).join("");
		return document.body.removeChild(d), utils.add_style(e, b)
	}
	var f = document.getElementById(b);
	$(f).remove(), f = document.createElement("style"), f.type = "text/css", f.id = b, f.appendChild(document.createTextNode(a)), document.body.appendChild(f)
};
var Vine = $({});
Vine._watchers = [], Vine._fns = [], Vine._values = {}, Vine._fns.filter = function(a, b, c) {
	if (b) {
		c = c.split(",").map("trim");
		var d = new Fuse(a, {
			keys: c,
			threshold: .2
		});
		return d.search(b)
	}
	return a
}, Vine._fns.file_filter = function(a, b) {
	function c(a) {
		return a && (a.match(/[0-9a-f-]{36}/) || [])[0]
	}
	var d = c(b);
	if (d) return [{
		title: MSG("Open") + " " + d,
		fguid: d
	}];
	try {
		return Vine._fns.filter.apply(this, arguments)
	} catch (e) {
		return []
	}
}, Vine.is_equal = function(a, b) {
	return _.isEqual(a, b)
}, Vine.set_value = function(a, b) {
	Vine._values[a] = _.cloneDeep(b)
}, Vine.watch = function(a, b) {
	if (!Vine._watchers[a]) {
		var c = a.split("|").map("trim"),
			d = Vine._watchers[a] = {
				_args: [c.shift()],
				_callbacks: []
			};
		d._init_var = d._args[0], d._chains = c.map(function(a) {
			var b = process(a),
				c = b.fn,
				e = b.args;
			return d._args = d._args.concat(e),
				function(a) {
					return c.apply(null, [a].concat(e.map(function(a) {
						return a in Vine._values ? Vine._values[a] : a
					})))
				}
		}), d._recalc = function() {
			return $.reduce(d._chains, function(a, b) {
				return b(a)
			}, Vine._values[d._init_var])
		}
	}
	d = Vine._watchers[a], d._callbacks.push(b), d._invalidate = function() {
		var b = d._recalc();
		Vine.trigger_value(a, b)
	}, d._args.length >= 2 && d._args.map(function(a) {
		Vine.watch(a, function() {
			d._invalidate()
		})
	}), Vine.bind(watcher_normalize(a), function(a, b, c) {
		d._callbacks.map(function(a) {
			a(b, c)
		})
	})
}, Vine.trigger_value = function(a, b) {
	var c = Vine._values[a];
	Vine._watchers[a] && (Vine.is_equal(b, c) || (Vine.set_value(a, b), Vine.trigger(watcher_normalize(a), [b, c])))
}, Vine.bind("HELLO", function() {
	console.debug("hello!!")
}).bind("SYNC_FILE", function() {
	Session.SAVE_TIMES += 1, previewMd(), Session.current_file.save()
}).bind("UPDATE_THEME", function(a, b, c) {
	var d = ("ace_" + c).split("_").join("-");
	$(".sync-ace-theme").map(function(a, b) {
		b.className = Array.prototype.slice.call(b.classList).filter(function(a) {
			return !/^ace/.test(a)
		}).concat([d]).join(" ")
	}), utils.until(function() {
		return refresh_button_border()
	}), Session.set("theme", b)
}).bind("START_READONLY", function() {
	console.debug("readonly!"), editor.setReadOnly(!0), $("#app_wrap").addClass("readonly"), toastr.warning(MSG("READONLY_MODE"), "", {
		timeOut: 1e7
	})
}).bind("STOP_READONLY", function() {
	editor.setReadOnly(!1), $("#app_wrap").removeClass("readonly")
}).bind("OPEN_FILE", function(a, b, c, d) {
	return b != Session.tab_last_file ? c ? (Guardian.open_file("/#/?id=" + b), a.originalEvent.preventDefault(), a.originalEvent.stopPropagation(), !1) : (toastr.wait(MSG("Loading file")), void FileManager.open_file(b, d).then(function() {
		toastr.dismiss()
	})) : void 0
}).bind("OPEN_GUID_FILE", function(a, b) {
	return Guardian.open_file("/#/?guid=" + b), a.originalEvent.preventDefault(), a.originalEvent.stopPropagation(), !1
}).bind("EVERNOTE_VIEW", function(a, b) {
	var c = Evernote.get_note_url(b);
	c && Guardian.open_web(c), a.originalEvent.preventDefault(), a.originalEvent.stopPropagation()
}).bind("CHANGE_TITLE", function(a, b) {
	var c = [Session.window_title];
	b.title && c.unshift(b.title), document.title = c.join(" - ")
}).bind("CHANGE_FILE", function(a, b) {
	Session.origin_file || (window.location.hash = ""), Session.origin_file = !1, Vine.trigger("CHANGE_TITLE", b), FileManager.setCurrentFile(b), Session.AUTO_SAVE && clearInterval(Session.AUTO_SAVE), Session.SAVE_TIMES = 0, Session.AUTO_SAVE = setInterval(function() {
		Session.current_file.need_sync() && (0 === Session.SAVE_TIMES ? Vine.trigger("MODAL", "auto-sync") : Vine.trigger("SYNC_FILE"))
	}, 6e5)
}).bind("FILE_STATUS_CHANGED", function(a, b, c, d) {
	c || (("created" != b || "syncing" == d) && Session.current_file && Session.save_current_file(!0), "syncing" == b ? toastr.wait(MSG("Syncing")) : toastr.dismiss())
}).bind("SYNC_FILE_ERROR", function(a, b, c, d) {
	console.debug(arguments), b = b || "", c = c || "", d = d || "";
	var e = $(".modal-save-error");
	e.find(".error-code").text(b), e.find(".error-message").html(MSG(c) + "\n" + d), e.modal(), /AUTH/.test(c) && Vine.trigger("LOG_OUT")
}).bind("CREATE_FILE", function() {
	console.debug("create file!!"), FileManager.createFile()
}).bind("DELETE_CURRENT_FILE", function() {
	FileManager.deleteFile()
}).bind("CONFIRM_DELETE_FILE", function(a, b) {
	a.originalEvent.preventDefault(), a.originalEvent.stopPropagation(), b = b || Session.last_file_id, $(".modal-remove-file-confirm").modal("show").data("tempid", b);
	var c = Session.files[b] || {};
	$("#remove-filename").text(c.title)
}).bind("DELETE_FILE", function(a, b) {
	FileManager.deleteFile(b), b == Session.last_file_id && Vine.trigger("CREATE_FILE")
}).bind("CHECK_AND_REMOVE_FILE_CACHE", function(a, b) {
	var c = Session.files[b] || {};
	"synced" == c.status && (FileDB.shrink("file_" + b), console.debug("remove file cache", b))
}).bind("ACTION_INSERT_IMAGE", function(a, b) {
	toastr.wait(MSG("Downloading image")), /^http:/.test(b) || (b = b.replace("//", ""), b = "http://" + b), ImageManager.convert_to_base64(b)
}).bind("INSERT_IMAGE", function(a, b, c) {
	toastr.dismiss(), Session.current_file.images.push(b), Session.save_current_file(!0), Session.save_image(b, c)
}).bind("ERROR_INSERT_IMAGE", function(a, b) {
	// Evernote.log("image missing: " + b), toastr.error(b, MSG("Fail to insert image"))
}).bind("NOT_AUTHED", function() {
	toastr.error(MSG("NOT_AUTHED"))
}).bind("CLEAN_IMAGES", function(a, b) {
	console.debug("clean images", b), _.pull.apply(null, [Session.current_file.images].concat(b)), Session.save_current_file(!0)
}).bind("AUTHED", function() {
	Vine.trigger("FETCH_USER"), Vine.trigger("FETCH_NOTEBOOKS")
}).bind("LINK_SUCCESS", function() {
	Vine.trigger("AUTHED"), ENV.chrome_app && Vine.trigger("FETCH_LATEST_NOTES", !0), toastr.success(MSG("Successfully link with Evernote"))
}).bind("FETCH_NOTEBOOKS", function() {
	function a(a) {
		var b = {};
		if ($.map(a, function(a) {
			b[a.name] = a
		}), a && a.length) {
			var c = $.map(a, function(a) {
				return a.name
			});
			if (Session.last_notebook) {
				var d = Session.last_notebook.name,
					e = c.indexOf(d);
				e > 0 && (c.splice(e, 1), c.unshift(d))
			}
			return $("#notebooks-hint").data("typeahead").source = c, b
		}
	}
	$.get(BACKEND + "/evernote/notebooks").done(function(b) {
		Session.set("notebooks", a(b)), previewMd()
	}), Session.last_notebook && a([Session.last_notebook])
}).bind("FETCH_USER", function() {
	$.get(BACKEND + "/evernote/user").success(function(a) {
		a && Session.set("user", a), Vine.trigger("IS_USER_AUTHED", [!0])
	}).fail(function() {
		Session.user || (Session.set("user", null), Vine.trigger("IS_USER_AUTHED", [!1]))
	})
}).bind("FETCH_LATEST_NOTES", function(a, b) {
	b || toastr.wait(MSG("Syncing")), Evernote.get_latest().done(function(a) {
		var c = _.values(Session.files).map("guid"),
			d = a.map("guid"),
			e = a.reduce(function(a, b) {
				return a[b.guid] = b, a
			}, {});
		b || toastr.dismiss(), _.difference(d, c).map(function(a) {
			var b = e[a];
			b.fid = b.created || b.guid, b.status = "synced", Session.files[b.fid] = b
		}), Session.dump("files")
	})
}).bind("FETCH_NOTE", function(a, b, c) {
	function d(a, b) {
		toastr.wait(MSG("Fetching from Evernote")), Evernote.load(a).then(function(a) {
			if (toastr.dismiss(), b) {
				if (b.shrinked) return delete b.shrinked, FileManager.createFile($.extend(b, a, {
					status: "synced"
				}));
				a.md != b.md ? Vine.trigger("MODAL", "file-conflict") : Vine.trigger("OPEN_FILE", b.fid, !1, a)
			} else FileManager.createFile($.extend({}, a, {
				status: "synced"
			}));
			previewMd()
		}).fail(function(a) {
			if (a) {
				if (403 == a.status) try {
					var b = JSON.parse(a.responseText);
					Vine.trigger("SYNC_FILE_ERROR", [b.code, b.message, b.detail])
				} catch (c) {
					toastr.error(MSG("UNAUTHORIZED_NOTE"))
				}
				401 == a.status && toastr.error(MSG("UNAUTHORIZED_NOTE")), a.status >= 500 && toastr.error(MSG("Server error"))
			} else toastr.error(MSG("ERROR_OPEN_FILE"))
		})
	}
	return c ? d(b, c) : void FileDB.query({
		map: function(a, c) {
			a.guid == b && c(a.fid, a)
		}
	}, {
		reduce: !1
	}, function(a, c) {
		if (a || !c.total_rows) return d(b);
		var e = c.rows[0].value;
		"modified" == e.status ? (toastr.error(MSG("FILE_CONFLICT")), Vine.trigger("MODAL", "file-conflict"), Vine.trigger("OPEN_FILE", e.fid)) : d(b, e)
	})
}).bind("LOG_OUT", function() {
	$.get(BACKEND + "/auth/logout").done(function() {}), Session.set("user", null), Session.set("notebooks", null), LocalDB.del("cookie"), Vine.trigger("IS_USER_AUTHED", [!1])
}).bind("MAYBE_CONFLICT", function() {
	toastr.error(MSG("READONLY_MODE"))
}).bind("TOGGLE_RESIZE", function(a, b) {
	var c;
	c = void 0 === b ? !$("#app_wrap").hasClass("no-preview") : "full" == b, $("#app_wrap").toggleClass("no-preview", c), c ? $(".editor-navbar-buttons").append($(".preview-buttons")) : $(".extension-preview-buttons").append($(".preview-buttons")), refresh_button_border(), Vine.trigger("WINDOW_RESIZE")
}).bind("WINDOW_RESIZE", function() {
	// if (Session.config.line_number) editor.renderer.setPadding(8), editor.renderer.setShowGutter(!0);
	if (false) editor.renderer.setPadding(8), editor.renderer.setShowGutter(!0);
	else {
		editor.renderer.setShowGutter(!1);
		var a = $(window).width();
		editor.renderer.setPadding($("#app_wrap").hasClass("no-preview") && a > 860 ? ($(window).width() - 860) / 2 : 15)
	}
	utils.until(function() {
		editor.resize(!0)
	}, 3, 600)
}).bind("MODAL", function(a, b, c) {
	$(".modal-" + b).modal(c ? "toggle" : "show")
}).bind("SHOW_HELP", function() {
	Vine.trigger("MODAL", ["help", !0])
}).bind("REDIRECT_AUTH", function(a, b) {
	var c = a.originalEvent;
	"evernote" == b && (c.ctrlKey || c.metaKey) && (b = "yinxiang"), Guardian.open_auth(BACKEND + "/auth/redirect?service=" + b)
}).bind("FAKE_COOKIE", function(a, b) {
	_.extend({}, b, {
		app_version: chrome.runtime.getManifest().version
	});
	$.ajaxSetup({
		headers: {
			"X-PCookie": JSON.stringify(b)
		}
	})
}).bind("WINDOW_MIN", function() {
	Guardian.minimize()
}).bind("WINDOW_MAX", function() {
	Guardian.maximize()
}).bind("WINDOW_CLOSE", function() {
	Guardian.close()
}).bind("WINDOW_FULLSCREEN", function() {
	Guardian.fullscreen()
}).bind("CONFIG_KEY_BINDINGS", function(a, b) {
	var c = editor.$markdownCommands,
		d = c.commandKeyBinding;
	/emacs/.test(b) ? delete d[1] : d[1] = _.pick(d[3], function(a, b) {
		return "q" != b
	});
	var e = b ? ace.require(b).handler : editor.keyBinding.$defaultHandler;
	editor.setKeyboardHandler(e), editor.keyBinding.addKeyboardHandler(c), b && editor.keyBinding.addKeyboardHandler(e)
}).bind("CONFIG_LAYOUT", function(a, b) {
	Vine.trigger("TOGGLE_RESIZE", [b.preview ? "small" : "full"]), $(".toolbar-group").toggle(b.toolbar)
}).bind("CONFIG_LINE_NUMBER", function() {
	Vine.trigger("WINDOW_RESIZE")
}).bind("CONFIG_CODE_HIGHLIGHT", function() {
	previewMd()
}).bind("CONFIG_PREVIEW_FONT", function(a, b) {
	Session.default_preview_font = Session.default_preview_font || $("#preview").css("font-family"), b = (b || "").split("，").join(","), b.length && (b += ", "), b += Session.default_preview_font, utils.add_style("body { font-family: " + b + "}", "custom_render_font", ".note-content")
}).bind("CONFIG_EDITOR_FONT", function(a, b) {
	Session.default_editor_font = Session.default_editor_font || $("#editor").css("font-family"), b = (b || "").split("，").join(","), b.length && (b += ", "), b += Session.default_editor_font, $("#temp_editor_style").remove(), utils.add_style("#editor { font-family : " + b + " !important; }", "temp_editor_style")
}).bind("CONFIG_CUSTOM_CSS", function(a, b) {
	utils.add_style(b, "custom_render_css", ".note-content")
}).bind("INIT_SETTINGS", function() {
	$("#settings").binddata(Session.config, {
		onlyGetOrSet: "set"
	})
}).bind("SUBMIT_CONFIG", function() {
	$("#settings").binddata(Session.config, {
		onlyGetOrSet: "get"
	}), Session.dump("config"), Session.reset_config()
}).bind("EXPORT_PDF", function() {
	window.print()
}).bind("EXPORT_HTML_FILE", function() {
	var a = Session.current_file,
		b = new Blob([$("#preview").html()], {
			type: "text/plain;charset=utf-8"
		});
	Guardian.save_file(a.title + ".html", b)
}).bind("EXPORT_MD_FILE", function() {
	previewMd();
	var a = Session.current_file;
	if (Session.current_file.images.length) {
		var b = new JSZip;
		console.log(a, a.title), b.file(a.title + ".md", a.md), $("#preview").find("img[longdesc^='./']").each(function(a, c) {
			var d = $.attr(c, "longdesc").replace(/^\.\//, "");
			b.file(d, utils.seperate_base64(c.src).data, {
				base64: !0
			})
		});
		var c = b.generate({
			type: "blob"
		});
		Guardian.save_file(a.title + ".zip", c)
	} else {
		var d = new Blob([a.md], {
			type: "text/plain;charset=utf-8"
		});
		Guardian.save_file(a.title + ".md", d)
	}
}).bind("SHOW_NOTIFY", function(a, b) {
	if ($(".modal-notify").modal().find(".modal-content").html(b.content), ENV.chrome_app) {
		var c = LocalDB.get("cookie");
		b.version && (c.lastest_notify = b.version), b.v && (c.notify_v = b.v), LocalDB.set("cookie", c)
	}
}).bind("ZOOM", function(a, b, c) {
	b = parseFloat(b), editor.setFontSize(13 * b + "px"), $("#preview").css({
		zoom: b
	}), editor.resize(!0), !c && Session.set("zoom", b)
}).bind("PREVIEW_DOCUMENT", function(a, b) {
	$("#app_wrap").toggleClass("full-preview"), b = parseInt(b), b ? (ENV.chrome_app || (location.hash = "preview"), $(document).on("keydown.preview", function(a) {
		(8 == a.keyCode || 27 == a.keyCode) && (Vine.trigger("PREVIEW_DOCUMENT", 0), a.stopPropagation(), a.preventDefault())
	})) : (ENV.chrome_app || (location.hash = ""), $(document).off("keydown.preview"))
}).bind("MISSING_IMAGES", function() {
	// Evernote.log("[SYNC_ERROR]missing images"), Vine.trigger("MODAL", "missing-images")
}), $("[vine-switch-on]").each(function(a, b) {
	var c = $(b),
		d = c.attr("vine-switch-on"),
		e = c.find("[switch-default]");
	c.find("[switch-when]").hide(), e.show(), Vine.bind(d, function(a, b) {
		console.debug("vine_switch", a, b), c.find("[switch-when]").hide(), $target = c.find("[switch-when=" + b + "]"), $target.length ? (e.hide(), $target.show()) : (e.show(), $target.hide())
	})
}), $(document).on("click", "[vine-click]", function(a) {
	var b = $(this),
		c = b.attr("vine-click").split(":").map("trim"),
		d = $.Event(c.shift());
	return d.originalEvent = a, Vine.trigger(d, c)
}), $("[vine-repeat]").each(function() {
	var a = $(this),
		b = a.attr("vine-repeat");
	collectionString = b, parent = a.parent(), elements = [];
	var c = $("<!-- " + b + " -->"),
		d = Hogan.compile(a[0].outerHTML);
	a.replaceWith(c), Vine.watch(collectionString, function(a) {
		if (console.debug("repeat change", a), elements.length > 0) {
			for (i = 0; i < elements.length; i++) elements[i].remove();
			elements = []
		}
		for (i = a.length - 1; i >= 0; i--) {
			var b = $(d.render(a[i]));
			elements.push(b), c.after(b)
		}
	})
}), $("[vine-model]").each(function() {
	var a = $(this),
		b = a.attr("vine-model");
	Vine.set_value(b, null), a.bind("input paste", function() {
		Vine.trigger_value(b, a.val())
	})
}), $("[vine-bind]").each(function() {
	var a = $(this),
		b = a.attr("vine-bind"),
		c = a.html();
	Vine.set_value(b, null), Vine.watch(b, function(b) {
		c ? a.html(Hogan.compile(c).render(b)) : a.text(b)
	})
});
var FileManager = {};
FileManager.setCurrentFile = function(a) {
	var b = Session.tab_last_file;
	b && b != a.fid && Vine.trigger("CHECK_AND_REMOVE_FILE_CACHE", b), SessionLock.is_conflict(a.fid, function(b) {
		b ? (a.readonly = !0, Vine.trigger("START_READONLY")) : Vine.trigger("STOP_READONLY"), Session.current_file = a, MathCache.reset(), a.readonly || (Session.set("last_file_id", a.fid), TagsPlugin.reset(), a.active()), Session.tab_last_file = a.fid, editor.getSession().setValue(a.md), ImageManager.restore_images(), previewMd()
	})
}, FileManager.createFile = function(a) {
	if (!a && Session.current_file && Session.current_file.is_empty()) Session.current_file.md = "", this.setCurrentFile(Session.current_file);
	else {
		var b = new NoteFile(a);
		a && a._images && (b._raw_attachments = a._images.reduce(function(a, c) {
			var d = ImageManager.to_attachment_from_html(c);
			return b.images.push(d[0]), a[d[0]] = d[1], a
		}, {}), delete a._images), Vine.trigger("CHANGE_FILE", b)
	}
}, FileManager.open_file = function(a, b) {
	return Session.load_file(a).then(function(a) {
		return a.shrinked ? Vine.trigger("FETCH_NOTE", a.guid) : (a.merge_remote(b), void Vine.trigger("CHANGE_FILE", a))
	}).fail(function() {
		var b = Session.files[a] || {};
		return b.guid ? (b.shrinked = !0, Vine.trigger("FETCH_NOTE", [b.guid, b])) : void toastr.error(MSG("ERROR_OPEN_FILE"))
	})
}, FileManager.deleteFile = function(a) {
	var b = Session.files[a];
	b && Session.delete_file(b)
}, Vine.watch("files", function(a) {
	function b(a) {
		var b = 0;
		return b += parseInt(a.fid) || 0, "synced" != a.status && (b += 1e13), b
	}
	var c = _.toArray(a).reverse().map(function(a) {
		return a["is_" + a.status] = !0, "created" != a.status && (a.notebook ? a.saved_notebook = a.notebook : a.default_notebook = !0), a.is_current = a.fid == (Session.tab_last_file || Session.last_file_id) ? !0 : !1, a
	}).sort(function(a, c) {
		return b(c) - b(a)
	});
	Vine.trigger_value("filelist", c), $(".document-list [title]").tooltip()
}), _window_open = function() {
	window.open.apply(window, arguments)
}, window.Guardian = window.Guardian || {
	type: "web",
	open_web: _window_open,
	open_file: _window_open,
	open_auth: _window_open,
	onunload: function(a) {
		window.onbeforeunload = a
	},
	save_file: function(a, b) {
		saveAs(b, a)
	},
	render_math: function() {
		MathProcessor.render_math.apply(void 0, arguments)
	}
}, $(document).ready(function() {
	var a, b;
	a = $(".menu-panel").collapse({
		toggle: !1
	});
	var c, d = !1,
		e = !1;
	a.on("show.bs.collapse", function(b) {
		b.target === a[0] ? (e = !0, c = utils.createBackdrop("collapse", ".menu-panel"), a.addClass("move-to-front"), setTimeout(function() {
			a.trigger($.support.transition.end)
		}, 50)) : a.find(".in").collapse("hide")
	}).on("hide.bs.collapse", function(b) {
		b.target === a[0] && (e = !1, c && c.remove(), a.removeClass("move-to-front"))
	}).on("hidden.bs.collapse", function(b) {
		b.target === a[0] && a.find(".in").collapse("hide")
	}), b = $(".document-panel").collapse({
		toggle: !1
	});
	var f;
	b.on("show.bs.collapse", function(a) {
		var c = {
			40: function(a) {
				return a.next().focus(), !1
			},
			38: function(a) {
				var c = a.prev();
				return c.length || (c = b.find("input")), c.focus(), !1
			},
			13: function(a, b) {
				return b && b.altKey ? a.find(".icon-link-ext").click() : a.find("a").click(), !1
			},
			79: function(a, b) {
				return b && (b.ctrlKey || b.metaKey) ? !0 : (a.find(".icon-link-ext").click(), !1)
			},
			86: function(a) {
				return a.find(".icon-eye").click(), !1
			},
			68: function(a) {
				return a.find(".icon-trash").click(), !1
			}
		};
		if (a.target === b[0]) {
			d = !0, f = utils.createBackdrop("collapse", ".document-panel"), b.addClass("move-to-front"), setTimeout(function() {
				b.trigger($.support.transition.end)
			}, 50); {
				b.find("div.document-list")
			}
			b.find("input").focus(), b.on("keydown.document", "input", function(a) {
				return 40 == a.keyCode ? (b.find("li").first().focus(), !1) : void 0
			}), b.on("focus.document, click", "li", function() {
				$this = $(this), $this.addClass("active").siblings().removeClass()
			}).on("keydown.li", "li", function(a) {
				$this = $(this);
				var b = c[a.keyCode];
				return b ? b($this, a) : void 0
			}), $(document).on("keydown.li", function(a) {
				if (!b.find("input:focus").length) {
					var d = b.find("li.active").first(),
						e = c[a.keyCode];
					return e && (console.debug("change focus", a.keyCode), d.focus(), e(d)), !1
				}
			})
		} else b.find(".in").collapse("hide")
	}).on("hide.bs.collapse", function(a) {
		a.target === b[0] && (d = !1, f && f.remove(), b.removeClass("move-to-front"), b.off("keydown.document").off("focus.document").off("keydown.li"), $(document).off("keydown.li"), editor.focus())
	}).on("hidden.bs.collapse", function(a) {
		a.target === b[0] && b.find(".in").collapse("hide")
	}), $(".collapse").on("show.bs.collapse", function() {
		var a = $(this);
		$(this).on("keydown.collapse", function(b) {
			return 27 == b.which || 79 == b.which && (b.ctrlKey || b.metaKey) ? (a.collapse("hide"), a.off("keydown.collapse"), !1) : void 0
		})
	});
	var g = !1;
	$(".modal").on("show.bs.modal", function() {
		g && (a.collapse("hide"), b.collapse("hide")), g = !0
	}).on("shown.bs.modal", function() {
		var a = $(this);
		setTimeout(function() {
			a.find("input").focus(), a.find(".btn:first").focus(), a.find("button:first").focus(), a.find("input:enabled:visible:first").focus()
		}, 50)
	}).on("hidden.bs.modal", function() {
		g = !1, editor.focus()
	}).keyup(function(a) {
		13 != a.which || $(a.target).is("textarea") || $(this).find(".modal-footer a:last").click(), 27 == a.which && $(this).modal("hide")
	}), $(".action-remove-file").click(function() {
		var a = $(".modal-remove-file-confirm").data("tempid");
		void 0 !== a && (Vine.trigger("DELETE_FILE", a), delete $(".modal-remove-file-confirm").data().tempid)
	}), $("#uploader").on("change", function(a) {
		$(".modal-insert-image").modal("hide");
		var b = a.currentTarget.files;
		$.map(b, function(a) {
			ImageManager.insert(a)
		})
	}), $(".action-apply-settings").on("click", function() {
		Vine.trigger("SUBMIT_CONFIG")
	}), $(".modal-settings").on("show.bs.modal", function() {
		Vine.trigger("INIT_SETTINGS")
	}), $(".sync-list").tooltip({
		placement: "bottom",
		html: !1
	}), $(".editor-navbar-buttons [title]").tooltip({
		placement: "bottom",
		html: !1
	}), $(".extension-preview-buttons [title]").tooltip({
		placement: "bottom",
		html: !1
	}), $(".vip-status").tooltip({
		placement: "bottom",
		html: !1
	}), $(".save-file").tooltip({
		placement: "bottom",
		title: function() {
			return $(".save-file").find("i:visible").attr("tooltip-title")
		}
	})
}), ImageManager = function() {
	function a() {
		var a = $preview.find("img[longdesc]"),
			b = $.map(a, function(a) {
				return $(a).attr("longdesc")
			}),
			c = _.difference(Session.current_file.images, b);
		c.length && Session.save_current_file(!0)
	}

	function b(a, b) {
		Vine.trigger("INSERT_IMAGE", [a, b])
	}

	function c(c, d, e) {
		a(), e || editor.insert("![Alt text](" + c + ")\n"), b(c, d), previewMd()
	}

	function d(a) {
		return a.replace(/(%|\(|\))/g, "")
	}
	var e = $("#images_area"),
		f = {
			clean: a,
			reset: function() {
				e.contents().remove()
			},
			insert: function(a) {
				var b = new FileReader;
				b.onload = function(b) {
					var c = b.target.result,
						e = d("./" + (a.name || (new Date).getTime().toString() + "." + (a.type.split("/")[1] || "png")));
					f.insert_image(e, a.type, c)
				}, console.debug(a), b.readAsDataURL(a)
			},
			to_attachment_from_html: function(a) {
				var b = $(a);
				return e.append(b), console.debug("insert image", b.attr("longdesc"), b.attr("src")), [b.attr("longdesc"), {
					content_type: b.attr("type"),
					data: utils.seperate_base64(b.attr("src")).data
				}]
			},
			insert_image: function(a, b, d, f) {
				var g = new Image;
				g.src = d, $.attr(g, "longdesc", a), $.attr(g, "type", b), e.find('[longdesc="' + a + '"]').remove(), e.append(g), c(a, d, f)
			},
			process: function(a) {
				{
					var b = this;
					$.map(a.find("img[ng-src]"), function(a) {
						var c = decodeURIComponent($(a).attr("ng-src")) || "",
							d = e.find('img[longdesc="' + c + '"]');
						return d.length ? $(a).replaceWith(d.first().attr("title", $.attr(a, "title")).attr("alt", $.attr(a, "alt")).clone()) : /^http/.test(c) ? b.convert_to_base64(c, !0) : Vine.trigger("ERROR_INSERT_IMAGE", c), c
					})
				}
			},
			check_missing_images: function() {
				return $preview.find("img[ng-src]").length
			},
			restore_images: function() {
				var a = Session.load_current_images();
				$.each(a, function(a, b) {
					var c = new Image;
					c.src = b, $(c).attr("type", b.match(/^data:(.*?);base64/)[1]), $(c).attr("longdesc", a), e.append(c)
				})
			},
			download_from_proxy: function(a, b) {
				$.ajax({
					type: "get",
					url: BACKEND + "/imageproxy?url=" + encodeURIComponent(a),
					success: function(c, d, e) {
						var g = JSON.parse(e.responseText);
						console.debug("imageproxy", g), f.insert_image(a, g.type, g.data, b)
					},
					error: function() {
						Vine.trigger("ERROR_INSERT_IMAGE", a)
					}
				})
			},
			convert_to_base64: function(a, b) {
				var c = document.createElement("CANVAS"),
					d = c.getContext("2d"),
					e = new Image,
					g = /\.png/.test(a) ? "image/png" : "image/jpeg";
				e.crossOrigin = "Anonymous", e.onerror = function() {
					console.debug("load from proxy.."), f.download_from_proxy(a, b)
				}, e.onload = function() {
					console.debug("load from local.."), c.height = e.height, c.width = e.width, d.drawImage(e, 0, 0);
					try {
						var h = c.toDataURL(g);
						f.insert_image(a, g, h, b), c = null
					} catch (i) {
						f.download_from_proxy(a, b)
					}
				}, e.src = a
			}
		};
	return f
}();
var MathCache = function() {
		var a = {},
			b = [];
		return {
			get: function(c) {
				return b.push(c), a[c]
			},
			set: function(c, d) {
				a[c] = d, b.push(c)
			},
			clean: function() {
				Object.keys(a).filter(function(a) {
					return b.indexOf(a) < 0
				}).map(function(b) {
					console.debug("cache clean", b), delete a[b]
				}), b = []
			},
			reset: function() {
				a = [], b = []
			}
		}
	}(),
	MathProcessor = {};
MathProcessor.process_html = function(a) {
	var b = $(a.childNodes[0]);
	if ((window.MathJax || ENV.chrome_app) && b.is(".mathjax")) {
		var c = b.html(),
			d = md5(c),
			e = MathCache.get(d),
			f = b.is(".inline") ? " style='display:inline-block;margin:0'" : "",
			g = f ? "span" : "div";
		e ? (console.debug("cache hit", d), $(a).replaceWith("<" + g + " class='mathjax'" + f + ">" + e + "</" + g + ">")) : (console.debug("cache nohit", d, c), ENV.chrome_app && $(a).css({
			visibility: "hidden"
		}), Guardian.render_math({
			tag: g,
			inline: f,
			content: c,
			hash: d
		}, function(b) {
			if (ENV.chrome_app && $(a).css({
				visibility: "visible"
			}), b) {
				var c = $(b)[0];
				MathCache.set(d, c.innerHTML), $(a).replaceWith(c)
			}
		}))
	}
}, MathProcessor.render_math = function(a, b) {
	var c = a.tag,
		d = a.inline,
		e = a.content,
		f = $("<" + c + " class='mathjax' " + d + ">$#" + e + "#$</" + c + ">")[0];
	MathJax.Hub.Queue(["Typeset", MathJax.Hub, f]), MathJax.Hub.Queue(function() {
		var a = $(f).children()[1];
		a && 0 != $(a).text().length && !$(a).is(".MathJax_Error") && ($(f).find("script").remove(), $(f).find("[id]").map(function(a, b) {
			$(b).removeAttr("id").removeAttr("class").removeAttr("role").removeAttr("aria-readonly")
		}), $(f).find("nobr").replaceWith(function() {
			return $("<" + c + " style='white-space: nowrap;'></" + c + ">").append($(this).html().replace(/font-family: (.*?);/g, function(a, b) {
				return "font-family:" + b + ", serif;"
			}))
		}), b(f.outerHTML))
	})
};
var Notifier = function() {
		var a = $("#notify");
		return {
			messages: {
				profileUpdated: "Profile updated",
				profileCleared: "Profile cleared",
				docSavedLocal: "已在本地缓存",
				docSavedServer: "已保存到印象笔记",
				docSaving: "正在保存...",
				saveFailed: "抱歉，保存失败。请联系hustgock@gmail.com",
				saveFailedDetail: "抱歉，保存失败。原因: ",
				docSavedDropbox: "Document saved on dropbox",
				dropboxImportNeeded: "Please import a file from dropbox first."
			},
			showMessage: function(b, c) {
				a.text("").stop(!1, !0).html(b).slideDown(250, function() {
					a.delay(c || 1e3).slideUp(250)
				})
			}
		}
	}(),
	renderer = new marked.Renderer,
	callout_type = {
		":": "callout-info",
		"::": "callout-success",
		"!": "callout-warning",
		"!!": "callout-danger"
	},
	strong_type = {
		":": "label-info",
		"::": "label-success",
		"!": "label-warning",
		"!!": "label-danger"
	},
	strong_regex = /^\{(:|::|!!|!)\}/;
renderer.strong = function(a) {
	var b;
	return a = a.replace(strong_regex, function(a, c) {
		return b = strong_type[c], ""
	}), create_element_html("strong", a, {
		"class": b
	})
};
var strong_block_regex = /^<p>{(!!|:|::|!)}\s*(<\/p>)?/;
renderer.blockquote = function(a) {
	var b, c = a.replace(strong_block_regex, function(a, c, d) {
		return b = callout_type[c], d ? "" : "<p>"
	});
	return create_element_html("blockquote", "\n" + c, {
		"class": b
	})
};
var old_code_render = renderer.code;
renderer.code = function(a, b, c) {
	return is_file_path(b) ? old_code_render.call(this, a, get_file_affix(b) || b, c).replace(/^<pre>/, "<pre><div class='file-path'>" + b + "</div>") : old_code_render.call(this, a, b, c)
};
var Parser = {
		init: function() {
			var a = hljs.listLanguagesAndAlias();
			return marked.setOptions({
				gfm: !0,
				tables: !0,
				breaks: !0,
				pedantic: !1,
				sanitize: !0,
				smartLists: !0,
				smartypants: !1,
				langPrefix: "",
				highlight: function(b, c) {
					if ("mathjax" == c) return b;
					if (a.indexOf(c) >= 0) return hljs.highlight(c, b, !1).value;
					var d = hljs.highlightAuto(b);
					return {
						code: d.value,
						lang: d.language
					}
				}
			})
		},
		process: function(a) {
			return marked(a, {
				renderer: renderer
			})
		}
	},
	Evernote = function() {
		var a = "area br col command hr img keygen source wbr".split(" ").join("|"),
			b = new RegExp("<(" + a + ")([^>]*?)(/>|>)", "gi"),
			c = {
				sanitize: function(a) {
					return a.replace(b, "<$1 $2 />")
				},
				load: function(a) {
					return $.ajax({
						type: "get",
						data: {
							guid: a
						},
						url: BACKEND + "/evernote/view"
					})
				},
				get_latest: function() {
					return $.ajax({
						type: "get",
						url: BACKEND + "/evernote/latest"
					})
				},
				get_note_url: function(a) {
					try {
						return Session.user.evernote_info.edam_webApiUrlPrefix + "view/notebook/" + a
					} catch (b) {
						return ""
					}
				},
				log: function(a) {
					return $.ajax({
						type: "post",
						data: {
							data: a
						},
						url: BACKEND + "/god/log"
					})
				},
				save: function(a) {
					var b = (Session.config.custom_css || "").replace(/\bbody\b/g, "en-note") + $("#custom_render_font").text(),
						c = _.extend({}, a, {
							style: b
						});
					return $.ajax({
						type: "post",
						data: c,
						url: BACKEND + "/evernote/save"
					})
				}
			};
		return c
	}(),
	Session = {
		keys: ["config", "last_file_id", "files", "theme", "user", "zoom"],
		config_keys: ["key_bindings", "layout"],
		pre_init: function() {
			this.theme = "ace/theme/earthsong", this.files = {}, this.window_title = document.title, this.config = {
				key_bindings: "",
				layout: {
					editor: !0,
					preview: !0,
					toolbar: !0
				},
				publish: {
					title: !0,
					tags: !1
				},
				code_highlight: "hljs-dark",
				auto_sync: !0
			}
		},
		load: function() {
			var a = this;
			return a.pre_init(), a.set("config", _.extend({}, a.config, LocalDB.get("config"))), $.each(this.keys.slice(1), function(b, c) {
				a.set(c, LocalDB.get(c) || a[c], !0)
			}), a.init()
		},
		load_key: function(a) {
			this.set(a, LocalDB.get(a) || this[a], !0)
		},
		dump: function(a, b) {
			if (b) return LocalDB.set(a, b), void Vine.trigger_value(a, b);
			var c = this,
				d = $.isArray(a) ? a : a ? [a] : this.keys();
			$.each(d, function(a, b) {
				LocalDB.set(b, c[b]), Vine.trigger_value(b, c[b])
			})
		},
		del: function(a) {
			LocalDB.del(a)
		},
		init: function() {
			this.init_config();
			var a = this;
			Session.origin_file = !0, Vine.trigger("IS_USER_AUTHED", Boolean(a.user)), a.user && Vine.trigger("AUTHED");
			var b = function(a) {
					a.then(function(a) {
						c(a)
					}).fail(function() {
						c(get_readme())
					})
				},
				c = function(b) {
					b.shrinked ? Vine.trigger("FETCH_NOTE", [b.guid, b]) : (a.current_file = b, Vine.trigger("CHANGE_FILE", a.current_file))
				},
				d = window._FILE || window.location.href,
				e = (/\bguid=([^&]*)/.exec(d) || [])[1];
			if (e) return void Vine.trigger("FETCH_NOTE", e);
			var f = (/\bid=([^&]*)/.exec(d) || [])[1];
			return f ? b(Session.load_file(f)) : Session.last_file_id ? b(Session.load_file(Session.last_file_id)) : void c(get_readme())
		},
		set: function(a, b, c) {
			this[a] = b, c ? Vine.trigger_value(a, b) : this.dump(a)
		},
		save_file: function(a) {
			a = a || this.current_file;
			var b = "file_" + a.fid;
			return FileDB.update(b, a.to_db_json(), a._raw_attachments).then(function() {
				a._raw_attachments && delete a._raw_attachments
			})
		},
		load_file: function(a) {
			var b = "file_" + a,
				c = $.Deferred();
			return console.warn("load_file", b), FileDB.get(b, {
				attachments: !0
			}, function(a, b) {
				b ? (FileDB.record_rev_cache(b), console.debug("attachs", b), c.resolve(new NoteFile(b))) : (console.warn(a, a.message), c.reject(a))
			}), c.promise()
		},
		save_current_file: function(a) {
			var b = this.current_file;
			if (b && !b.readonly && (a || b.local_delta())) {
				var c = b.fid,
					d = this;
				(a || this.files[c] || !b.is_empty()) && (this.last_file_id != c && (console.debug("change last file id"), this.set("last_file_id", c)), b && this.save_file(b).then(function() {
					d.files[c] = b.get_info(), d.dump("files")
				}))
			}
		},
		dump_files: function() {
			this.dump("files", _.map(this.files, function(a) {
				return a.get_info()
			}))
		},
		delete_file: function(a) {
			a = a || this.current_file, this.pause();
			var b = a.fid;
			FileDB.del("file_" + b), delete this.files[b], b == Session.last_file_id && (this.current_file = null), this.dump("files")
		},
		pause: function() {
			console.debug("session pause"), clearInterval(this._save_timer), this._save_timer = null, this.save_current_file()
		},
		resume: function() {
			console.debug("session resume");
			var a = this;
			this._save_timer && clearInterval(this._save_timer), this.load_key("last_file_id"), this.load_key("files"), this._save_timer = setInterval(function() {
				a.save_current_file()
			}, 3e3)
		},
		save_image: function(a, b) {
			var c = "file_" + this.current_file.fid;
			FileDB.put_image(c, a, b)
		},
		load_image: function(a) {
			try {
				var b = this.current_file._attachments[a];
				return "data:" + b.content_type + ";base64," + b.data
			} catch (c) {
				return console.warn("not found img", a), null
			}
		},
		load_current_images: function() {
			var a = this,
				b = (this.current_file.images || []).reduce(function(b, c) {
					var d = a.load_image(c);
					return d && (b[c] = d), b
				}, {});
			return delete this.current_file._attachments, b
		},
		init_config: function() {
			var a = this;
			a.reset_config(), Vine.trigger("INIT_SETTINGS")
		},
		reset_config: function(a) {
			var b = this,
				a = a || Object.keys(Session.config);
			a.map(function(a) {
				Vine.trigger("CONFIG_" + a.toUpperCase(), b.config[a])
			})
		}
	},
	get_key = function(a) {
		return "session_lock_" + a
	},
	SessionLock = {
		start: function() {
			this._timer && this.stop();
			var a = get_key(Session.tab_last_file);
			Session.dump(a, new Date - 0), this._timer = setInterval(function() {
				Session.dump(a, new Date - 0)
			}, 1e4)
		},
		stop: function() {
			clearInterval(this._timer), this.timer = null, Session.del(get_key(Session.tab_last_file))
		},
		is_conflict: function(a, b) {
			var c = get_key(a),
				d = this;
			LocalDB.force_fetch(c, function(a) {
				if (a) {
					var e = d.is_expired(a);
					if (!e) return b(!0);
					Session.del(c)
				}
				b(!1)
			})
		},
		is_expired: function(a) {
			var b = new Date;
			return b - a > 1e4
		}
	};
$(window).focus(function() {
	Session.current_file && !Session.current_file.readonly && SessionLock.stop()
}), $(window).blur(function() {
	Session.current_file && !Session.current_file.readonly && SessionLock.start()
}), Guardian.onunload(function() {
	Session.current_file && !Session.current_file.readonly && SessionLock.stop()
}), window.LocalDB = window.LocalDB || {
	init: function(a) {
		console.log("local db init"), a()
	},
	set: function(a, b) {
		return localStorage.setItem(a, JSON.stringify(b))
	},
	get: function(a) {
		return JSON.parse(localStorage.getItem(a))
	},
	del: function(a) {
		localStorage.removeItem(a)
	},
	force_fetch: function(a, b) {
		b(this.get(a))
	}
};
var FileDB = new PouchDB("dbname", {
		auto_compaction: !0
	}),
	write_lock = new Mutex;
FileDB._cache = {}, FileDB.record_rev_cache = function(a) {
	FileDB._cache["last_rev_" + a._id] = a._rev
}, FileDB.update = function(a, b, c, d) {
	var e = this,
		f = $.Deferred();
	return write_lock.timedLock(3e4, function() {
		e.get(a, function(g, h) {
			{
				var i = (h || {})._rev;
				FileDB._cache["last_rev_" + a]
			}!c && h && h._attachments && (b._attachments = _.pick(h._attachments, b.images)), c && (b._attachments = c), d && (b = _.pick(h, ["fid", "guid", "status", "title", "notebook", "tagNames"]), b.shrinked = !0, console.debug("shrink")), console.debug("update", i), e.put(b, a, i, function(b, c) {
				write_lock.unlock(), b ? (console.warn("save file error", b), f.reject(b)) : (FileDB._cache["last_rev_" + a] = c.rev, f.resolve())
			})
		})
	}), f.promise()
}, FileDB.del = function(a) {
	var b = this;
	this.get(a, function(c, d) {
		return c ? console.warn("delete file error", a) : void b.remove(d)
	})
}, FileDB.put_image = function(a, b, c) {
	var d = this,
		e = utils.seperate_base64(c),
		f = e.type,
		g = e.data;
	write_lock.timedLock(3e4, function() {
		d.get(a, function(c, e) {
			console.debug("put_image", (e || {})._rev), d.putAttachment(a, b, (e || {})._rev, g, f, function(a) {
				write_lock.unlock(), a && console.warn("put image error", a), console.debug("put_image!", b, f)
			})
		})
	})
}, FileDB.shrink = function(a) {
	return FileDB.update(a, {}, {}, !0)
}, TagsPlugin = function() {
	var a, b, c = /<notebook>@(\((.*)\))?(\[(.*?)\])?\s*<\/notebook>/i,
		d = [];
	return {
		init: function() {
			$(document).ready(function() {
				$("#notebooks-hint").typeahead(), b = $("#notebooks-hint").data("typeahead"), b.oninput = function() {}, b.onselect = function(b) {
					editor.insert(b), a = Session.notebooks[b], $("#notebooks-hint").blur().hide(), editor.focus(), previewMd()
				}, b.oncancel = function() {
					$("#notebooks-hint").blur().hide().val(""), editor.undo()
				}
			})
		},
		reset: function() {
			d = [], a = null
		},
		process: function(e) {
			return e.replace(c, function(c, e, f, g, h) {
				var i = ['<p class="note-tags '];
				if (utils.try_chain(Session, "config", "publish", "tags") || i.push("to-remove"), i.push('">'), i.push('<i class="icon-bookmark"></i>'), h = h || "", d = $.map(h.split(/[\|,]/), function(a) {
					return a.trim()
				}), Session.notebooks && e && !f) {
					var j = editor.getCursorPosition();
					if ($("#notebooks-hint").show().focus().css("top", 20 * j.row + 30 + "px"), !b) return;
					b.show_all()
				}
				return f && Session.notebooks && Session.notebooks[f] && (a = Session.notebooks[f], i.push('<code class="notebook">', a.name, "</code>&nbsp;")), $.map(d, function(a) {
					i.push("<code>", a, "</code> ")
				}), i.push("</p>"), i.join("")
			})
		},
		get_tags: function() {
			return d
		},
		get_notebook: function() {
			return a
		}
	}
}();
var bgColors = {
		chrome: "#bbbbbb",
		clouds: "#7AC9E3",
		clouds_midnight: "#5F9EA0",
		cobalt: "#4d586b",
		crimson_editor: "#ffffff",
		dawn: "#DADCAD",
		eclipse: "#6C7B8A",
		idle_fingers: "#DEB887",
		kr_theme: "#434343",
		merbivore: "#3E353E",
		merbivore_soft: "#565156",
		mono_industrial: "#C0C0C0",
		monokai: "#F5DEB3",
		pastel_on_dark: "#676565",
		"solarized-dark": "#0E4B5A",
		solarized_light: "#dfcb96",
		textmate: "#fff",
		tomorrow: "#0e9211",
		tomorrow_night: "#333536",
		tomorrow_night_blue: "#3a4150",
		tomorrow_night_bright: "#3A3A3A",
		tomorrow_night_eighties: "#474646",
		twilight: "#534746",
		vibrant_ink: "#363636"
	},
	session = {
		config: {
			theme: "ace/theme/azure"
		}
	},
	editor, $theme = $("#theme-list"),
	$preview = $("#preview");
preinit(), LocalDB.init(init), window.onload = function() {}, window.addEventListener("message", function(a) {
	switch (!0) {
		case "oauthed" == a.data:
			Vine.trigger("LINK_SUCCESS"), console.log("message", a)
	}
}), $(window).resize(function() {
	Vine.trigger("WINDOW_RESIZE")
}), setTimeout(fade_loading, 1e4), window.onerror = function() {
	// window.Evernote && Evernote.log(arguments)
};