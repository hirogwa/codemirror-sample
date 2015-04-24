$(function() {

    CodeMirror.defineSimpleMode('sampleMode', {
        start: [{
            regex: /\b(Start):/, token: 'variable-2', indent: true
        }, {
            regex: /\b.*:/, token: 'variable-3', indent: true
        }, {
            regex: /(ThrowBall|SingSong)\b/, token: 'keyword'
        }, {
            regex: /(Speed|Motion|Hurmor)\b/, token: 'string'
        }, {
            regex: /#.*/, token: 'comment'
        }, {
            regex: /[=]/, token: "operator"
        }, {
            regex: /\s+$/, dedent: true
        }],
        comment: [
        ],
        meta: {
            lineComment: '#'
        }
    });

    var c  = CodeMirror.fromTextArea($('#editor')[0], {
        mode: 'sampleMode',
        lineNumbers: true
    });

    var d = CodeMirror.fromTextArea($('#jseditor')[0], {
        mode: 'javascript',
        lineNumbers: true
    });

    //c.setValue('function() {console.log("whatever dude")}');

    c.setOption("extraKeys", {
        Tab: function(cm) {
            var spaces = Array(cm.getOption("indentUnit") + 1).join(" ");
            cm.replaceSelection(spaces);
        }
    });
    c.setOption('keyMap', 'vim');

    c.setOption('matchBrackets', true);

    c.setOption('autoCloseBrackets', true);

    c.setOption('styleActiveLine', true);

    //c.setOption('readOnly', true);
});
