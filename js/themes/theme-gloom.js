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

ace.define('ace/theme/gloom', ['require', 'exports', 'module' , 'ace/lib/dom'], function(require, exports, module) {

exports.isDark = true;
exports.cssClass = "ace-gloom";
exports.cssText = "/* THIS THEME WAS AUTOGENERATED BY Theme.tmpl.css (UUID: b1ea21fb-2177-ffed-af81-0a3967e76069) */\
.ace-gloom .ace_gutter {\
background: #e8e8e8;\
color: #333;\
}\
.ace-gloom .ace_print-margin {\
width: 1px;\
background: #e8e8e8;\
}\
.ace-gloom {\
background-color: #2A332B;\
color: #D8EBE5;\
}\
.ace-gloom .ace_cursor {\
color: #f8f8f0;\
}\
.ace-gloom .ace_marker-layer .ace_selection {\
background: #FF5D38;\
}\
.ace-gloom.ace_multiselect .ace_selection.ace_start {\
box-shadow: 0 0 3px 0px #2A332B;\
border-radius: 2px;\
}\
.ace-gloom .ace_marker-layer .ace_step {\
background: rgb(198, 219, 174);\
}\
.ace-gloom .ace_marker-layer .ace_bracket {\
margin: -1px 0 0 -1px;\
border: 1px solid #3b3a32;\
}\
.ace-gloom .ace_marker-layer .ace_active-line {\
background: #3C4D3E;\
}\
.ace-gloom .ace_gutter-active-line {\
background-color: #3C4D3E;\
}\
.ace-gloom .ace_marker-layer .ace_selected-word {\
border: 1px solid #FF5D38;\
}\
.ace-gloom .ace_fold {\
background-color: #BCD42A;\
border-color: #D8EBE5;\
}\
.ace-gloom .ace_keyword{color:#26A6A6;}.ace-gloom .ace_keyword.ace_other.ace_unit{color:#26A6A6;}.ace-gloom .ace_constant.ace_language{color:#FF5D38;}.ace-gloom .ace_constant.ace_numeric{color:#BCD42A;}.ace-gloom .ace_constant.ace_character{color:#FF5D38;}.ace-gloom .ace_constant.ace_other{color:#FF5D38;}.ace-gloom .ace_support.ace_function{color:#FF5D38;}.ace-gloom .ace_support.ace_constant{color:#FF5D38;}.ace-gloom .ace_support.ace_constant.ace_property-value{color:#BCD42A;}.ace-gloom .ace_support.ace_class{font-style:italic;\
color:#FF5D38;}.ace-gloom .ace_support.ace_type{font-style:italic;\
color:#FF5D38;}.ace-gloom .ace_storage{color:#FF5D38;}.ace-gloom .ace_storage.ace_type{color:#26A6A6;}.ace-gloom .ace_invalid{color:#f8f8f0;\
background-color:#00a8c6;}.ace-gloom .ace_invalid.ace_deprecated{color:#f8f8f0;\
background-color:#00a8c6;}.ace-gloom .ace_string{color:#BCD42A;}.ace-gloom .ace_comment{color:#4F6E64;}.ace-gloom .ace_variable{color:#BCD42A;}.ace-gloom .ace_variable.ace_parameter{font-style:italic;}.ace-gloom .ace_entity.ace_other.ace_attribute-name{color:#FF5D38;}.ace-gloom .ace_entity.ace_name.ace_function{color:#BCD42A;}.ace-gloom .ace_entity.ace_name.ace_tag{color:#26A6A6;}";

var dom = require("../lib/dom");
dom.importCssString(exports.cssText, exports.cssClass);
});
