const server = require("./app");

const PORT = 5000;

server.listen(PORT, () => {
  console.log(`Server is listening on PORT ${PORT}`);
});
