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

ace.define('ace/theme/sourlick', ['require', 'exports', 'module' , 'ace/lib/dom'], function(require, exports, module) {

exports.isDark = true;
exports.cssClass = "ace-sourlick";
exports.cssText = "/* THIS THEME WAS AUTOGENERATED BY Theme.tmpl.css (UUID: 7fb20831-cd83-c33b-4d8c-427c53567a6c) */\
.ace-sourlick .ace_gutter {\
background: #e8e8e8;\
color: #333;\
}\
.ace-sourlick .ace_print-margin {\
width: 1px;\
background: #e8e8e8;\
}\
.ace-sourlick {\
background-color: #2E2C2B;\
color: #DEDEDE;\
}\
.ace-sourlick .ace_cursor {\
color: #f8f8f0;\
}\
.ace-sourlick .ace_marker-layer .ace_selection {\
background: #518f0d;\
}\
.ace-sourlick.ace_multiselect .ace_selection.ace_start {\
box-shadow: 0 0 3px 0px #2E2C2B;\
border-radius: 2px;\
}\
.ace-sourlick .ace_marker-layer .ace_step {\
background: rgb(198, 219, 174);\
}\
.ace-sourlick .ace_marker-layer .ace_bracket {\
margin: -1px 0 0 -1px;\
border: 1px solid #3b3a32;\
}\
.ace-sourlick .ace_marker-layer .ace_active-line {\
background: #3B3633;\
}\
.ace-sourlick .ace_gutter-active-line {\
background-color: #3B3633;\
}\
.ace-sourlick .ace_marker-layer .ace_selected-word {\
border: 1px solid #518f0d;\
}\
.ace-sourlick .ace_fold {\
background-color: #BDF522;\
border-color: #DEDEDE;\
}\
.ace-sourlick .ace_keyword{color:#D2EB31;}.ace-sourlick .ace_keyword.ace_other.ace_unit{color:#EDF252;}.ace-sourlick .ace_constant.ace_language{color:#8AC27A;}.ace-sourlick .ace_constant.ace_numeric{color:#FC580C;}.ace-sourlick .ace_constant.ace_character{color:#8AC27A;}.ace-sourlick .ace_constant.ace_other{color:#8AC27A;}.ace-sourlick .ace_support.ace_function{color:#FFBB29;}.ace-sourlick .ace_support.ace_constant{color:#8AC27A;}.ace-sourlick .ace_support.ace_constant.ace_property-value{color:#E4FF33;}.ace-sourlick .ace_support.ace_class{font-style:italic;\
color:#8AC27A;}.ace-sourlick .ace_support.ace_type{font-style:italic;\
color:#8AC27A;}.ace-sourlick .ace_storage{color:#8AC27A;}.ace-sourlick .ace_storage.ace_type{color:#EDF252;}.ace-sourlick .ace_invalid{color:#f8f8f0;\
background-color:#00a8c6;}.ace-sourlick .ace_invalid.ace_deprecated{color:#f8f8f0;\
background-color:#00a8c6;}.ace-sourlick .ace_string{color:#E4FF33;}.ace-sourlick .ace_comment{color:#615953;}.ace-sourlick .ace_variable{color:#BDF522;}.ace-sourlick .ace_variable.ace_parameter{font-style:italic;}.ace-sourlick .ace_entity.ace_other.ace_attribute-name{color:#8AC27A;}.ace-sourlick .ace_entity.ace_name.ace_function{color:#BDF522;}.ace-sourlick .ace_entity.ace_name.ace_tag{color:#EDF252;}";

var dom = require("../lib/dom");
dom.importCssString(exports.cssText, exports.cssClass);
});
