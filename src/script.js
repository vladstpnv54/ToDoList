var taskApp = new Vue({
  el: '#taskApp',
  data: {
    tasks: []
  },
  mounted() {
    if(localStorage.getItem('tasks')) {
      try {
        this.tasks = JSON.parse(localStorage.getItem('tasks'));
      } catch(e) {
        localStorage.removeItem('tasks');
      }
    }
  },
  methods: {
    addTask: function(e) {
      e.preventDefault();
      if (this.tasks.name != undefined){
        if(this.tasks.name.split('')[0] != " " && this.tasks.name != ''){
            this.tasks.push({
              name: this.tasks.name
            })
            this.tasks.name = '';
            this.saveTask();
        }
        else {
          alert ('Неправильно введены данные!')
        }
      }
      else {
        alert ('Неправильно введены данные!')
      }
    },
    deleteTask: function(task) {
      this.tasks.splice(this.tasks.indexOf(task), 1)
      this.saveTask();
    },
    deleteAll: function (e) {
      e.preventDefault();
      this.tasks = [];
      this.saveTask();
    },
    saveTask() {
      let parsed = JSON.stringify(this.tasks);
      localStorage.setItem('tasks', parsed);
    }
  }
});
