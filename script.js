const App = {
  data() {
    return {
      counter: 0,
      notePlaceholder: 'Enter note title',
      inputValue: '',
      notes: []
    }
  },
  methods: {
    inputChangeHandler(event) {
      this.inputValue = event.target.value;
    },
    addNewNote() {
      this.notes.push(this.inputValue);
      this.inputValue = '';
    }
  }
}

Vue.createApp(App).mount('#root');