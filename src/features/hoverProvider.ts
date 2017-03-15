'use strict';
import { CancellationToken, Hover, HoverProvider, MarkedString, Position, TextDocument, workspace } from 'vscode';

import globals = require('../language/globals');

export default class BrightScriptHoverProvider implements HoverProvider {


  public provideHover(document: TextDocument, position: Position, token: CancellationToken): Hover | Thenable<Hover> {
    let enable = workspace.getConfiguration('brightscript').get<boolean>('suggest.basic', true);
		if (!enable) {
			return null;
		}

    let wordRange = document.getWordRangeAtPosition(position);
		if (!wordRange) {
			return;
		}

    let name = document.getText(wordRange).toLowerCase();

		var entry = globals.globalFunctions[name] || globals.builtInFunctions[name] || globals.stringFunctions[name] || globals.mathFunctions[name];
		if (entry && entry.description) {
			let signature = name + (entry.signature || '');
			let contents: MarkedString[] = [entry.description, { language: 'brightscript', value: signature }];
			return new Hover(contents, wordRange);
		}
  }
}