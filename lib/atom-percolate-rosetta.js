'use babel';

import { CompositeDisposable } from 'atom';
import pathToRegex from './path_to_regex';

export default {
  subscriptions: null,

  activate(state) {
    this.subscriptions = new CompositeDisposable();
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'atom-percolate-rosetta:find-imports': () => this.findImports()
    }));
  },

  deactivate() {
    this.subscriptions.dispose();
  },

  findImports() {
    var editor = atom.workspace.getActiveTextEditor()
    var reStr = pathToRegex(editor.getPath())
    if (!reStr) return
    atom.commands.dispatch(document.querySelector('atom-workspace'), 'project-find:show')
    document.querySelector('.project-find .find-container atom-text-editor').model.setText(reStr)
    atom.commands.dispatch(document.querySelector('atom-workspace'), 'find-and-replace:search')
  }
};
