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
    addNewNote() {
      if (this.inputValue !== '') {
        this.notes.push(this.inputValue);
        this.inputValue = '';
      }
    },
    deleteNote(index) {
      this.notes.splice(index, 1);
    },
  },
  computed: {
    doubledComputed() {
      console.log(this.notes.length);
      return this.notes.length * 2
    }
  },
  watch: {
    inputValue(value) {
      if (value.length > 10) {
        this.inputValue = value.slice(0, -1);
      }
    }
  }
}

Vue.createApp(App).mount('#root');