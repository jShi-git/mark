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

ace.define('ace/theme/piggy', ['require', 'exports', 'module' , 'ace/lib/dom'], function(require, exports, module) {

exports.isDark = true;
exports.cssClass = "ace-piggy";
exports.cssText = "/* THIS THEME WAS AUTOGENERATED BY Theme.tmpl.css (UUID: 3bb56721-9c67-cf77-716a-22da6ab80c25) */\
.ace-piggy .ace_gutter {\
background: #e8e8e8;\
color: #333;\
}\
.ace-piggy .ace_print-margin {\
width: 1px;\
background: #e8e8e8;\
}\
.ace-piggy {\
background-color: #1c1618;\
color: #EDEBE6;\
}\
.ace-piggy .ace_cursor {\
color: #f8f8f0;\
}\
.ace-piggy .ace_marker-layer .ace_selection {\
background: #F52E62;\
}\
.ace-piggy.ace_multiselect .ace_selection.ace_start {\
box-shadow: 0 0 3px 0px #1c1618;\
border-radius: 2px;\
}\
.ace-piggy .ace_marker-layer .ace_step {\
background: rgb(198, 219, 174);\
}\
.ace-piggy .ace_marker-layer .ace_bracket {\
margin: -1px 0 0 -1px;\
border: 1px solid #3b3a32;\
}\
.ace-piggy .ace_marker-layer .ace_active-line {\
background: #34282c;\
}\
.ace-piggy .ace_gutter-active-line {\
background-color: #34282c;\
}\
.ace-piggy .ace_marker-layer .ace_selected-word {\
border: 1px solid #F52E62;\
}\
.ace-piggy .ace_fold {\
background-color: #FF5D80;\
border-color: #EDEBE6;\
}\
.ace-piggy .ace_keyword{color:#FD6A5D;}.ace-piggy .ace_keyword.ace_other.ace_unit{color:#F52E62;}.ace-piggy .ace_constant.ace_language{color:#FD6A5D;}.ace-piggy .ace_constant.ace_numeric{color:#FF453E;}.ace-piggy .ace_constant.ace_character{color:#FD6A5D;}.ace-piggy .ace_constant.ace_other{color:#FD6A5D;}.ace-piggy .ace_support.ace_function{color:#F52E62;}.ace-piggy .ace_support.ace_constant{color:#FD6A5D;}.ace-piggy .ace_support.ace_constant.ace_property-value{color:#FF453E;}.ace-piggy .ace_support.ace_class{font-style:italic;\
color:#FD6A5D;}.ace-piggy .ace_support.ace_type{font-style:italic;\
color:#FD6A5D;}.ace-piggy .ace_storage{color:#FD6A5D;}.ace-piggy .ace_storage.ace_type{color:#F52E62;}.ace-piggy .ace_invalid{color:#f8f8f0;\
background-color:#00a8c6;}.ace-piggy .ace_invalid.ace_deprecated{color:#f8f8f0;\
background-color:#00a8c6;}.ace-piggy .ace_string{color:#FF453E;}.ace-piggy .ace_comment{color:#3f3236;}.ace-piggy .ace_variable{color:#FF5D80;}.ace-piggy .ace_variable.ace_parameter{font-style:italic;\
color:#EDEBE6;}.ace-piggy .ace_entity.ace_other.ace_attribute-name{color:#FD6A5D;}.ace-piggy .ace_entity.ace_name.ace_function{color:#FF5D80;}.ace-piggy .ace_entity.ace_name.ace_tag{color:#F52E62;}";

var dom = require("../lib/dom");
dom.importCssString(exports.cssText, exports.cssClass);
});
