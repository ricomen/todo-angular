import { RestSerializer } from "miragejs"

const mockServer = {
    serializers: {
      reminder: RestSerializer.extend({
        include: ["list"],
        embed: true,
      }),
    },

  routes() {
    this.namespace = "api"
    this.get(
      "/list",
      () => (
        [
            {
              id: 1,
              title: 'Some task 1',
              completed: false
            },
            {
              id: 2,
              title: 'Some task 2',
              completed: false
            },
            {
              id: 3,
              title: 'Some task 3',
              completed: false
            },
            {
              id: 4,
              title: 'Some task 4',
              completed: false
            },
          ]
      ),
      { timing: 100 }
    );
    this.post("/list", (schema, request) => {
      return {
        id: Math.floor(Math.random() * 100),
        title: JSON.parse(request.requestBody),
        completed: false
      }
    })
  },
};

export default mockServer;
