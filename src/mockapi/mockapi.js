import { RestSerializer } from "miragejs"

const mockServer = {
    serializers: {
      reminder: RestSerializer.extend({
        include: ["list"],
        embed: true,
      }),
    },

  routes() {
    this.get(
      "api/list",
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
      { timing: 1000 }
    )
  },
};

export default mockServer;
