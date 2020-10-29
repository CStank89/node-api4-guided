require("dotenv").config();

const server = require("./api/server.js");

const port = process.env.PORT;
// when running local
//when running local it will be on 5000 but process.env.PORT
//is what heroku will run
const secret = process.env.SECRET_THING;

console.log(port, secret);

server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
