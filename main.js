import './style.css'

import { EditorView, basicSetup } from "codemirror"
import { html } from "@codemirror/lang-html"

let editor = new EditorView({
  extensions: [basicSetup, html(), EditorView.updateListener.of(function (e) {
    if (e.docChanged) {
      document.getElementById('result').innerHTML = e.state.doc.toString()
    }
  })
  ],
  parent: document.getElementById('editor')
})

// editor.dispatch({
//   changes: {from: 0, to: editor.state.doc.length, insert: 'New Test Text'}
// });

document.getElementById('save').addEventListener('click', function () {
  console.log(editor.state.doc.toString());
});