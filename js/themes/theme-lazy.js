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

ace.define('ace/theme/lazy', ['require', 'exports', 'module' , 'ace/lib/dom'], function(require, exports, module) {

exports.isDark = false;
exports.cssClass = "ace-lazy";
exports.cssText = "/* THIS THEME WAS AUTOGENERATED BY Theme.tmpl.css (UUID: A1E55FCB-3CD2-4811-9E73-D9B87419443A) */\
.ace-lazy .ace_gutter {\
background: #e8e8e8;\
color: #333;\
}\
.ace-lazy .ace_print-margin {\
width: 1px;\
background: #e8e8e8;\
}\
.ace-lazy {\
background-color: #FFFFFF;\
color: #000000;\
}\
.ace-lazy .ace_cursor {\
color: #7C7C7C;\
}\
.ace-lazy .ace_marker-layer .ace_selection {\
background: #E3FC8D;\
}\
.ace-lazy.ace_multiselect .ace_selection.ace_start {\
box-shadow: 0 0 3px 0px #FFFFFF;\
border-radius: 2px;\
}\
.ace-lazy .ace_marker-layer .ace_step {\
background: rgb(198, 219, 174);\
}\
.ace-lazy .ace_marker-layer .ace_bracket {\
margin: -1px 0 0 -1px;\
border: 1px solid #B6B6B6;\
}\
.ace-lazy .ace_marker-layer .ace_active-line {\
background: rgba(239, 252, 166, 0.56);\
}\
.ace-lazy .ace_gutter-active-line {\
background-color: rgba(239, 252, 166, 0.56);\
}\
.ace-lazy .ace_marker-layer .ace_selected-word {\
border: 1px solid #E3FC8D;\
}\
.ace-lazy .ace_fold {\
background-color: #FF7800;\
border-color: #000000;\
}\
.ace-lazy .ace_keyword{color:#FF7800;}.ace-lazy .ace_constant{color:#3B5BB5;}.ace-lazy .ace_support{color:#3B5BB5;}.ace-lazy .ace_storage{color:#FF7800;}.ace-lazy .ace_invalid.ace_illegal{color:#F8F8F8;\
background-color:#9D1E15;}.ace-lazy .ace_invalid.ace_deprecated{font-style:italic;\
color:#990000;}.ace-lazy .ace_string{color:#409B1C;}.ace-lazy .ace_comment{color:#8C868F;}.ace-lazy .ace_meta.ace_tag{color:#3A4A64;}";

var dom = require("../lib/dom");
dom.importCssString(exports.cssText, exports.cssClass);
});