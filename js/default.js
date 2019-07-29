$(document).ready(function(){
	//code here...
	var myCodeMirror = CodeMirror(document.body, {
	  value: "function myScript(){return 100;}\n",
	  mode:  "javascript"
	});
	var code = $(".codemirror-textarea")[0];
	var editor = CodeMirror.fromTextArea(code, {
		lineNumbers : true
	});
});