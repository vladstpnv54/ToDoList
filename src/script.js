var taskApp = new Vue({
  el: '#taskApp',
  data: {
    tasks: []
  },
  methods: {
    addTask: function(e) {
      e.preventDefault();
      if(this.tasks.name != '' && this.tasks.name != null && this.tasks.name != ' '){
          this.tasks.push({
            name: this.tasks.name,
            done: false
          });
          this.tasks.name = '';

      }
    },
    deleteTask: function(task) {
      this.tasks.splice(this.tasks.indexOf(task), 1)

    },
    
  }
});
