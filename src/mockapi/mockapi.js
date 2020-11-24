import { RestSerializer, Model } from "miragejs"

const mockServer = {
  serializers: {
    reminder: RestSerializer.extend({
      include: ["list"],
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
    },
      { timing: 100 });

    this.post("/list", (schema, request) => {
      return {
        id: Math.floor(Math.random() * 100),
        title: JSON.parse(request.requestBody).body,
        completed: false
      }
    });

    this.delete('/list:1', (schema, request) => {

      return {
        id: request,
      }
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
