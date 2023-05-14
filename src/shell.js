import '@vandeurenglenn/editor-fields'

customElements.define('app-shell', class extends HTMLElement {
  constructor() {
    super()

    this.attachShadow({mode: 'open'})
    this.shadowRoot.innerHTML = this.template
  }

  get editorField() {
    return this.shadowRoot.querySelector('editor-fields')
  }

  connectedCallback() {
    this.editorField.createModel('my-thing.js', 'export default class MyThing { getThing () { return "theThing"}}', 'javascript')
  
    this.editorField.addField('thing.js', `import Thing from "./my-thing.js"
const thing = new Thing()`,
      'javascript')

    this.editorField.addField('index.html', '<html></html>', 'html')

    this.editorField.addField('index.css', 'html { display: block;}', 'css', 'vertical')
    
    
  }

  get template() {
    return `
    <style>
      :host {
        display: block;
        width: 100%;
        height: 100%;
      }
    </style>

    <editor-fields></editor-fields>
    `


  }
})