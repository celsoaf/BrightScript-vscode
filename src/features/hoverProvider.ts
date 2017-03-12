'use strict';
import { CancellationToken, Hover, HoverProvider, MarkedString, Position, TextDocument, workspace } from 'vscode';



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

    let name = document.getText(wordRange);

		let contents: MarkedString[] = ["Test", { language: 'brightscript', value: name }];
		return new Hover(contents, wordRange);
  }
}