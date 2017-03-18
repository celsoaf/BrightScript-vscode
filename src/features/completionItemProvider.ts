import {
  CancellationToken,
  CompletionItem,
  CompletionItemKind,
  CompletionItemProvider,
  CompletionList,
  Position,
  Range,
  TextDocument,
  workspace
} from 'vscode';

import globals = require('../language/globals');

export default class BrightScriptCompletionItemProvider implements CompletionItemProvider {


  public provideCompletionItems(
    document: TextDocument, 
    position: Position, 
    token: CancellationToken): 
      CompletionItem[] | Thenable<CompletionItem[]> | CompletionList | Thenable<CompletionList> {
    
    let result: CompletionItem[] = [];

    let shouldProvideCompletionItems = workspace.getConfiguration('brightscript').get<boolean>('suggest.basic', true);
		if (!shouldProvideCompletionItems) {
			return Promise.resolve(result);
		}

    var range = document.getWordRangeAtPosition(position);
		var prefix = range ? document.getText(range) : '';
		if (!range) {
			range = new Range(position, position);
		}

    var added: any = {};
		var createNewProposal = function (kind: CompletionItemKind, name: string, entry: globals.IEntry): CompletionItem {
			var proposal: CompletionItem = new CompletionItem(name);
			proposal.kind = kind;
			if (entry) {
				if (entry.description) {
					proposal.documentation = entry.description;
				}
				if (entry.signature) {
					proposal.detail = entry.signature;
				}
			}
			return proposal;
		};

    var matches = (name: string) => {
			return prefix.length === 0 || name.length >= prefix.length && name.substr(0, prefix.length) === prefix;
		};

    for (var name in globals.globalFunctions) {
			if (globals.globalFunctions.hasOwnProperty(name) && matches(name)) {
				added[name] = true;
				result.push(createNewProposal(CompletionItemKind.Variable, name, globals.globalFunctions[name]));
			}
		}
    for (var name in globals.builtInFunctions) {
			if (globals.builtInFunctions.hasOwnProperty(name) && matches(name)) {
				added[name] = true;
				result.push(createNewProposal(CompletionItemKind.Variable, name, globals.builtInFunctions[name]));
			}
		}
    for (var name in globals.stringFunctions) {
			if (globals.stringFunctions.hasOwnProperty(name) && matches(name)) {
				added[name] = true;
				result.push(createNewProposal(CompletionItemKind.Variable, name, globals.stringFunctions[name]));
			}
		}
    for (var name in globals.mathFunctions) {
			if (globals.mathFunctions.hasOwnProperty(name) && matches(name)) {
				added[name] = true;
				result.push(createNewProposal(CompletionItemKind.Variable, name, globals.mathFunctions[name]));
			}
		}
    for (var name in globals.keywords) {
			if (globals.keywords.hasOwnProperty(name) && matches(name)) {
				added[name] = true;
				result.push(createNewProposal(CompletionItemKind.Variable, name, globals.keywords[name]));
			}
		}

    return Promise.resolve(result);
  }
}