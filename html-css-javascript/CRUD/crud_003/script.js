var app = new function() {
    this.el = document.getElementById('tasks');
    this.tasks = []

        //to display ou read all our items
    this.fetchAll = function() {
        var data = '';
        console.log(tasks);

        if(this.tasks.length > 0) {
            for (i = 0; i < this.tasks.length; i++) {
                data += '<tr>';
                data += '<td>'+(i+1)+'. '+this.tasks[i]+'</td>';
                data += '<td><button onclick="app.edit('+i+')" class="btn btn-warning">Edit</button></td>';
                data += '<td><button onclick="app.delete('+i+')" class="btn btn-danger">Delete</button></td>';
                data += '</tr>';
            }
        }
        this.count(this.tasks.length);
        return this.el.innerHTML = data
    };

        //to add new elements
    this.add = function() {
        el = document.getElementById('add-todo');
        var task = el.value;
        if (task) {
            this.tasks.push(task.trim());
            el.value='';
            this.fetchAll();
        }
    };

        //to edit or to update
    this.edit = function(item) {
        el = document.getElementById('edit-todo');
        el.value = this.tasks[item]
        document.getElementById('edit-box').style.display = 'block';
        self = this;

        document.getElementById('save-edit').onsubmit = function() {
            var task = el.value;
            if (task) {
                self.tasks.splice(item, 1, task.trim());
                self.fetchAll();
                closeInput();
            }
        }
    };

        //to delete
    this.delete = function(item) {
        this.tasks.splice(item,1);
        this.fetchAll();
    };

        //para fazer contagens
    this.count = function(data) {
        var el = document.getElementById('counter')
        var name = 'Tasks';
        if (data) {
            if (data == 1) {
                name = 'Task';
            }
            el.innerHTML = data+' '+name;
        }
        else {
            el.innerHTML = "No "+ name;
        }
    };
}

app.fetchAll();

function closeInput() {
    document.getElementById('edit-box').style.display = 'none';
}