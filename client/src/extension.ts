'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as path from 'path';

import { workspace, Disposable, ExtensionContext } from 'vscode';
import { LanguageClient, LanguageClientOptions, SettingMonitor, ServerOptions, TransportKind  } from 'vscode-languageclient';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: ExtensionContext) { 

    // The server is implemented in node
    let serverModule = context.asAbsolutePath(path.join('out', 'server', 'server.js'));
    // The debug options for the server
	let debugOptions = { execArgv: ["--nolazy", "--debug=6009"] };
    // If the extension is launched in debug mode then the debug server options are used
	// Otherwise the run options are used
	let serverOptions: ServerOptions = {
		run : { module: serverModule, transport: TransportKind.ipc },
        debug: { module: serverModule, transport: TransportKind.ipc, options: debugOptions }
	}
 
    // Options to control the language client 
	let clientOptions: LanguageClientOptions = {
		// Register the server for plain text documents
		documentSelector: ['brightscript'],
		synchronize: {
			// Synchronize the setting section 'languageServerExample' to the server
			configurationSection: 'brightscriptLanguageServer',
			// Notify the server about file changes to '.clientrc files contain in the workspace
			fileEvents: workspace.createFileSystemWatcher('**/.clientrc')
		}
	}
	
	// Create the language client and start the client.
	let disposable = new LanguageClient('brightscriptLanguageServer', 'BrightScript Language Server', serverOptions, clientOptions).start();
	
	// Push the disposable to the context's subscriptions so that the 
	// client can be deactivated on extension deactivation
	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {
}