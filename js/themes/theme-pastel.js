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

ace.define('ace/theme/pastel', ['require', 'exports', 'module' , 'ace/lib/dom'], function(require, exports, module) {

exports.isDark = true;
exports.cssClass = "ace-pastel";
exports.cssText = "/* THIS THEME WAS AUTOGENERATED BY Theme.tmpl.css (UUID: 3a466d37-0b5d-fe03-8394-57d466cba5a9) */\
.ace-pastel .ace_gutter {\
background: #e8e8e8;\
color: #333;\
}\
.ace-pastel .ace_print-margin {\
width: 1px;\
background: #e8e8e8;\
}\
.ace-pastel {\
background-color: #222222;\
color: #eeeeee;\
}\
.ace-pastel .ace_cursor {\
color: #f8f8f0;\
}\
.ace-pastel .ace_marker-layer .ace_selection {\
background: #008D62;\
}\
.ace-pastel.ace_multiselect .ace_selection.ace_start {\
box-shadow: 0 0 3px 0px #222222;\
border-radius: 2px;\
}\
.ace-pastel .ace_marker-layer .ace_step {\
background: rgb(198, 219, 174);\
}\
.ace-pastel .ace_marker-layer .ace_bracket {\
margin: -1px 0 0 -1px;\
border: 1px solid #3b3a32;\
}\
.ace-pastel .ace_marker-layer .ace_active-line {\
background: #333333;\
}\
.ace-pastel .ace_gutter-active-line {\
background-color: #333333;\
}\
.ace-pastel .ace_marker-layer .ace_selected-word {\
border: 1px solid #008D62;\
}\
.ace-pastel .ace_fold {\
background-color: #C56C6C;\
border-color: #eeeeee;\
}\
.ace-pastel .ace_keyword{color:#C5906C;}.ace-pastel .ace_keyword.ace_other.ace_unit{color:#9474a9;}.ace-pastel .ace_constant.ace_language{color:#04C4A5;}.ace-pastel .ace_constant.ace_numeric{color:#C56C6C;}.ace-pastel .ace_constant.ace_character{color:#04C4A5;}.ace-pastel .ace_constant.ace_other{color:#04C4A5;}.ace-pastel .ace_support.ace_function{color:#E2E060;}.ace-pastel .ace_support.ace_constant{color:#04C4A5;}.ace-pastel .ace_support.ace_constant.ace_property-value{color:#C56C6C;}.ace-pastel .ace_support.ace_class{font-style:italic;\
color:#04C4A5;}.ace-pastel .ace_support.ace_type{font-style:italic;\
color:#04C4A5;}.ace-pastel .ace_storage{color:#04C4A5;}.ace-pastel .ace_storage.ace_type{color:#9474a9;}.ace-pastel .ace_invalid{color:#f8f8f0;\
background-color:#00a8c6;}.ace-pastel .ace_invalid.ace_deprecated{color:#f8f8f0;\
background-color:#00a8c6;}.ace-pastel .ace_string{color:#C56C6C;}.ace-pastel .ace_comment{color:#444444;}.ace-pastel .ace_variable{color:#C56C6C;}.ace-pastel .ace_variable.ace_parameter{font-style:italic;}.ace-pastel .ace_entity.ace_other.ace_attribute-name{color:#04C4A5;}.ace-pastel .ace_entity.ace_name.ace_function{color:#C56C6C;}.ace-pastel .ace_entity.ace_name.ace_tag{color:#9474a9;}";

var dom = require("../lib/dom");
dom.importCssString(exports.cssText, exports.cssClass);
});
