import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    var inwardKeywords = ['sub', 'for', 'while', 'if'];
    var outwardKeywords = ['end', 'exit', 'step'];

    vscode.languages.registerDocumentFormattingEditProvider({ language: 'brightscript', scheme: 'file' }, {
        provideDocumentFormattingEdits(document: vscode.TextDocument): vscode.TextEdit[] {
            var changes: vscode.TextEdit[] = [];
            var indents = 0;
            for (let i = 0; i < document.lineCount; i++) {
                let direction = 0;
                let line = document.lineAt(i);
                var lowerLine = line.text.toLowerCase().trim();
                //determine if children should be indended after this line
                inner: for (var j = 0; j < inwardKeywords.length; j++) {
                    let keyword = inwardKeywords[j];
                    if (lowerLine.startsWith(keyword)) {
                        direction = 1;
                        break inner;
                    }
                }
                //determine if children should be outdented after this line
                inner: for (var j = 0; j < inwardKeywords.length; j++) {
                    let keyword = outwardKeywords[j];
                    if (lowerLine.startsWith(keyword)) {
                        direction = -1;
                        break inner;
                    }
                }
                //if the direction is backwards, we need to move THIS line backwards
                if (direction === -1) {
                    indents += direction;
                }
                var spaceCount = indents * 4;
                //if the line is an else statement, it needs outdented but without affecting the next line
                if (lowerLine.startsWith('else')) {
                    spaceCount -= 4;
                }
                var spaces = Array(spaceCount + 1).join(' ');
                var spacedLine = spaces += line.text.trim();
                changes.push(vscode.TextEdit.replace(line.range, spacedLine));
                //if the direction is forwards, move the NEXT line forward
                if (direction !== -1) {
                    indents += direction;
                }

            }
            return changes;
        }
    });
}

export function deactivate() {
}