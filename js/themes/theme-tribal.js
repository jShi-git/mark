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

ace.define('ace/theme/tribal', ['require', 'exports', 'module' , 'ace/lib/dom'], function(require, exports, module) {

exports.isDark = true;
exports.cssClass = "ace-tribal";
exports.cssText = "/* THIS THEME WAS AUTOGENERATED BY Theme.tmpl.css (UUID: d22d863f-34f3-4ec8-56ae-7d0cb891e636) */\
.ace-tribal .ace_gutter {\
background: #e8e8e8;\
color: #333;\
}\
.ace-tribal .ace_print-margin {\
width: 1px;\
background: #e8e8e8;\
}\
.ace-tribal {\
background-color: #19191d;\
color: #ffffff;\
}\
.ace-tribal .ace_cursor {\
color: #f8f8f0;\
}\
.ace-tribal .ace_marker-layer .ace_selection {\
background: #47959a;\
}\
.ace-tribal.ace_multiselect .ace_selection.ace_start {\
box-shadow: 0 0 3px 0px #19191d;\
border-radius: 2px;\
}\
.ace-tribal .ace_marker-layer .ace_step {\
background: rgb(198, 219, 174);\
}\
.ace-tribal .ace_marker-layer .ace_bracket {\
margin: -1px 0 0 -1px;\
border: 1px solid #3b3a32;\
}\
.ace-tribal .ace_marker-layer .ace_active-line {\
background: #33333c;\
}\
.ace-tribal .ace_gutter-active-line {\
background-color: #33333c;\
}\
.ace-tribal .ace_marker-layer .ace_selected-word {\
border: 1px solid #47959a;\
}\
.ace-tribal .ace_fold {\
background-color: #E0DDEB;\
border-color: #ffffff;\
}\
.ace-tribal .ace_keyword{color:#5f5582;}.ace-tribal .ace_keyword.ace_other.ace_unit{color:#c43535;}.ace-tribal .ace_constant.ace_language{color:#5f5582;}.ace-tribal .ace_constant.ace_numeric{color:#64aeb3;}.ace-tribal .ace_constant.ace_character{color:#5f5582;}.ace-tribal .ace_constant.ace_other{color:#5f5582;}.ace-tribal .ace_support.ace_function{color:#8f8aa2;}.ace-tribal .ace_support.ace_constant{color:#5f5582;}.ace-tribal .ace_support.ace_constant.ace_property-value{color:#64aeb3;}.ace-tribal .ace_support.ace_class{font-style:italic;\
color:#5f5582;}.ace-tribal .ace_support.ace_type{font-style:italic;\
color:#5f5582;}.ace-tribal .ace_storage{color:#5f5582;}.ace-tribal .ace_storage.ace_type{color:#c43535;}.ace-tribal .ace_invalid{color:#f8f8f0;\
background-color:#00a8c6;}.ace-tribal .ace_invalid.ace_deprecated{color:#f8f8f0;\
background-color:#00a8c6;}.ace-tribal .ace_string{color:#64aeb3;}.ace-tribal .ace_comment{color:#4a4a54;}.ace-tribal .ace_variable{color:#E0DDEB;}.ace-tribal .ace_variable.ace_parameter{font-style:italic;\
color:#ffffff;}.ace-tribal .ace_entity.ace_other.ace_attribute-name{color:#5f5582;}.ace-tribal .ace_entity.ace_name.ace_function{color:#E0DDEB;}.ace-tribal .ace_entity.ace_name.ace_tag{color:#c43535;}";

var dom = require("../lib/dom");
dom.importCssString(exports.cssText, exports.cssClass);
});
