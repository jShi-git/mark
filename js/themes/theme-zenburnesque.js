/* ***** BEGIN LICENSE BLOCK *****
 * Distributed under the BSD license:
 *
 * Copyright (c) 2010, Ajax.org B.V.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *     * Redistributions of source code must retain the above copyright
 *       notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above copyright
 *       notice, this list of conditions and the following disclaimer in the
 *       documentation and/or other materials provided with the distribution.
 *     * Neither the name of Ajax.org B.V. nor the
 *       names of its contributors may be used to endorse or promote products
 *       derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL AJAX.ORG B.V. BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * ***** END LICENSE BLOCK ***** */

ace.define('ace/theme/zenburnesque', ['require', 'exports', 'module' , 'ace/lib/dom'], function(require, exports, module) {

exports.isDark = true;
exports.cssClass = "ace-zenburnesque";
exports.cssText = "/* THIS THEME WAS AUTOGENERATED BY Theme.tmpl.css (UUID: 8D4988B9-ADD8-436F-B388-BC1360F8504B) */\
.ace-zenburnesque .ace_gutter {\
background: #e8e8e8;\
color: #333;\
}\
.ace-zenburnesque .ace_print-margin {\
width: 1px;\
background: #e8e8e8;\
}\
.ace-zenburnesque {\
background-color: #404040;\
color: #DEDEDE;\
}\
.ace-zenburnesque .ace_cursor {\
color: #FFFF66;\
}\
.ace-zenburnesque .ace_marker-layer .ace_selection {\
background: #A0A0C0;\
}\
.ace-zenburnesque.ace_multiselect .ace_selection.ace_start {\
box-shadow: 0 0 3px 0px #404040;\
border-radius: 2px;\
}\
.ace-zenburnesque .ace_marker-layer .ace_step {\
background: rgb(198, 219, 174);\
}\
.ace-zenburnesque .ace_marker-layer .ace_bracket {\
margin: -1px 0 0 -1px;\
border: 1px solid #A8A8A8;\
}\
.ace-zenburnesque .ace_marker-layer .ace_active-line {\
background: rgba(160, 128, 64, 0.15);\
}\
.ace-zenburnesque .ace_gutter-active-line {\
background-color: rgba(160, 128, 64, 0.15);\
}\
.ace-zenburnesque .ace_marker-layer .ace_selected-word {\
border: 1px solid #A0A0C0;\
}\
.ace-zenburnesque .ace_fold {\
background-color: #FFCC66;\
border-color: #DEDEDE;\
}\
.ace-zenburnesque .ace_keyword{color:#FFFFA0;}.ace-zenburnesque .ace_keyword.ace_operator{color:#FFFFA0;}.ace-zenburnesque .ace_constant.ace_numeric{color:#22C0FF;}.ace-zenburnesque .ace_support.ace_type{color:#6080FF;}.ace-zenburnesque .ace_storage.ace_type{color:#6080FF;}.ace-zenburnesque .ace_string{color:#FF2020;}.ace-zenburnesque .ace_comment{font-style:italic;\
color:#709070;}.ace-zenburnesque .ace_variable{color:#FFCC66;}.ace-zenburnesque .ace_entity.ace_name.ace_function{color:#FFCC66;}";

var dom = require("../lib/dom");
dom.importCssString(exports.cssText, exports.cssClass);
});