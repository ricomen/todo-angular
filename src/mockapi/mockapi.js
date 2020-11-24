import { RestSerializer, Model } from "miragejs"

const mockServer = {
  serializers: {
    reminder: RestSerializer.extend({
      include: ["todo"],
      embed: true,
    }),
  },

  models: {
    todo: Model,
  },

  routes() {
    this.namespace = "api"

    this.get("/list", (schema, request) => {
        return schema.todos.all();
    }, { timing: 100 });

    this.post("/list", (schema, request) => {
      return schema.todos.create({
        title: JSON.parse(request.requestBody).body,
        completed: false
      })
    })

    this.patch("/list/:id", (schema, request) => {
      let completed = JSON.parse(request.requestBody);
      let id = request.params.id
      let todo = schema.todos.find(id)

      return todo.update(completed);
    })

    this.delete("/list/:id", (schema, request) => {
      let id = request.params.id
      schema.todos.find(id).destroy();
      return schema.todos.find(id);
    })

  },

  seeds(server) {
    server.create('todo', {
      title: 'Some task 1',
      completed: false
    }),
    server.create('todo', {
      title: 'Some task 2',
      completed: false
    })
  }
};

export default mockServer;
