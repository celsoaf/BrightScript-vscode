'use strict';

// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import BrightScriptHoverProvider from './features/hoverProvider';
import BrightScriptCompletionItemProvider from './features/completionItemProvider';
import BrightScriptSignatureHelpProvider from './features/signatureHelpProvider';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    // add providers
	context.subscriptions.push(
        vscode.languages.registerHoverProvider('brightscript', new BrightScriptHoverProvider()));
    context.subscriptions.push(
        vscode.languages.registerCompletionItemProvider('brightscript', new BrightScriptCompletionItemProvider()));
    context.subscriptions.push(
        vscode.languages.registerSignatureHelpProvider('brightscript', new BrightScriptSignatureHelpProvider(), '(', ','));
	
}

// this method is called when your extension is deactivated
export function deactivate() {
}
