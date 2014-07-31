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

ace.define('ace/theme/legacy', ['require', 'exports', 'module' , 'ace/lib/dom'], function(require, exports, module) {

exports.isDark = true;
exports.cssClass = "ace-legacy";
exports.cssText = "/* THIS THEME WAS AUTOGENERATED BY Theme.tmpl.css (UUID: 0cc0a050-7cf3-d31e-5089-f420a4cf8b4b) */\
.ace-legacy .ace_gutter {\
background: #e8e8e8;\
color: #333;\
}\
.ace-legacy .ace_print-margin {\
width: 1px;\
background: #e8e8e8;\
}\
.ace-legacy {\
background-color: #14191f;\
color: #aec2e0;\
}\
.ace-legacy .ace_cursor {\
color: #f8f8f0;\
}\
.ace-legacy .ace_marker-layer .ace_selection {\
background: #FF410D;\
}\
.ace-legacy.ace_multiselect .ace_selection.ace_start {\
box-shadow: 0 0 3px 0px #14191f;\
border-radius: 2px;\
}\
.ace-legacy .ace_marker-layer .ace_step {\
background: rgb(198, 219, 174);\
}\
.ace-legacy .ace_marker-layer .ace_bracket {\
margin: -1px 0 0 -1px;\
border: 1px solid #3b3a32;\
}\
.ace-legacy .ace_marker-layer .ace_active-line {\
background: #1b232c;\
}\
.ace-legacy .ace_gutter-active-line {\
background-color: #1b232c;\
}\
.ace-legacy .ace_marker-layer .ace_selected-word {\
border: 1px solid #FF410D;\
}\
.ace-legacy .ace_fold {\
background-color: #FFB20D;\
border-color: #aec2e0;\
}\
.ace-legacy .ace_keyword{color:#748aa6;}.ace-legacy .ace_keyword.ace_other.ace_unit{color:#267fb5;}.ace-legacy .ace_constant.ace_language{color:#ffffff;}.ace-legacy .ace_constant.ace_numeric{color:#C7F026;}.ace-legacy .ace_constant.ace_character{color:#ffffff;}.ace-legacy .ace_constant.ace_other{color:#ffffff;}.ace-legacy .ace_support.ace_function{color:#267fb5;}.ace-legacy .ace_support.ace_constant{color:#ffffff;}.ace-legacy .ace_support.ace_constant.ace_property-value{color:#FF410D;}.ace-legacy .ace_support.ace_class{font-style:italic;\
color:#ffffff;}.ace-legacy .ace_support.ace_type{font-style:italic;\
color:#ffffff;}.ace-legacy .ace_storage{color:#ffffff;}.ace-legacy .ace_storage.ace_type{color:#267fb5;}.ace-legacy .ace_invalid{color:#f8f8f0;\
background-color:#00a8c6;}.ace-legacy .ace_invalid.ace_deprecated{color:#f8f8f0;\
background-color:#00a8c6;}.ace-legacy .ace_string{color:#FF410D;}.ace-legacy .ace_comment{color:#324357;}.ace-legacy .ace_variable{color:#FFB20D;}.ace-legacy .ace_variable.ace_parameter{font-style:italic;\
color:#f1f6fb;}.ace-legacy .ace_entity.ace_other.ace_attribute-name{color:#ffffff;}.ace-legacy .ace_entity.ace_name.ace_function{color:#FFB20D;}.ace-legacy .ace_entity.ace_name.ace_tag{color:#267fb5;}";

var dom = require("../lib/dom");
dom.importCssString(exports.cssText, exports.cssClass);
});
