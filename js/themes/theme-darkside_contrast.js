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

ace.define('ace/theme/darkside_contrast', ['require', 'exports', 'module' , 'ace/lib/dom'], function(require, exports, module) {

exports.isDark = true;
exports.cssClass = "ace-darkside-contrast";
exports.cssText = "/* THIS THEME WAS AUTOGENERATED BY Theme.tmpl.css (UUID: a492e8fe-48f8-89c1-afc3-616dde678052) */\
.ace-darkside-contrast .ace_gutter {\
background: #e8e8e8;\
color: #333;\
}\
.ace-darkside-contrast .ace_print-margin {\
width: 1px;\
background: #e8e8e8;\
}\
.ace-darkside-contrast {\
background-color: #000000;\
color: #BABABA;\
}\
.ace-darkside-contrast .ace_cursor {\
color: #f8f8f0;\
}\
.ace-darkside-contrast .ace_marker-layer .ace_selection {\
background: #FF4E50;\
}\
.ace-darkside-contrast.ace_multiselect .ace_selection.ace_start {\
box-shadow: 0 0 3px 0px #000000;\
border-radius: 2px;\
}\
.ace-darkside-contrast .ace_marker-layer .ace_step {\
background: rgb(198, 219, 174);\
}\
.ace-darkside-contrast .ace_marker-layer .ace_bracket {\
margin: -1px 0 0 -1px;\
border: 1px solid #3b3a32;\
}\
.ace-darkside-contrast .ace_marker-layer .ace_active-line {\
background: #151515;\
}\
.ace-darkside-contrast .ace_gutter-active-line {\
background-color: #151515;\
}\
.ace-darkside-contrast .ace_marker-layer .ace_selected-word {\
border: 1px solid #FF4E50;\
}\
.ace-darkside-contrast .ace_fold {\
background-color: #68C244;\
border-color: #BABABA;\
}\
.ace-darkside-contrast .ace_keyword{color:#F08D24;}.ace-darkside-contrast .ace_keyword.ace_other.ace_unit{color:#1CC3E8;}.ace-darkside-contrast .ace_constant.ace_language{color:#E8341C;}.ace-darkside-contrast .ace_constant.ace_numeric{color:#8E69C9;}.ace-darkside-contrast .ace_constant.ace_character{color:#E8341C;}.ace-darkside-contrast .ace_constant.ace_other{color:#E8341C;}.ace-darkside-contrast .ace_support.ace_function{color:#8E69C9;}.ace-darkside-contrast .ace_support.ace_constant{color:#E8341C;}.ace-darkside-contrast .ace_support.ace_constant.ace_property-value{color:#F2D42C;}.ace-darkside-contrast .ace_support.ace_class{font-style:italic;\
color:#E8341C;}.ace-darkside-contrast .ace_support.ace_type{font-style:italic;\
color:#E8341C;}.ace-darkside-contrast .ace_storage{color:#E8341C;}.ace-darkside-contrast .ace_storage.ace_type{color:#1CC3E8;}.ace-darkside-contrast .ace_invalid{color:#f8f8f0;\
background-color:#00a8c6;}.ace-darkside-contrast .ace_invalid.ace_deprecated{color:#f8f8f0;\
background-color:#00a8c6;}.ace-darkside-contrast .ace_string{color:#F2D42C;}.ace-darkside-contrast .ace_comment{color:#494B4D;}.ace-darkside-contrast .ace_variable{color:#68C244;}.ace-darkside-contrast .ace_variable.ace_parameter{font-style:italic;}.ace-darkside-contrast .ace_entity.ace_other.ace_attribute-name{color:#E8341C;}.ace-darkside-contrast .ace_entity.ace_name.ace_function{color:#68C244;}.ace-darkside-contrast .ace_entity.ace_name.ace_tag{color:#1CC3E8;}";

var dom = require("../lib/dom");
dom.importCssString(exports.cssText, exports.cssClass);
});
