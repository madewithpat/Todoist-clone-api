import * as express from "express";

const app = express();

app.get("/", (request: express.Request, response: express.Response) => {
   const thing = request.method;
   response.send("<h1>Hello World</h1><br/><p>thing: " + thing);
});
// tslint:disable-next-line:no-console
app.listen(4000, () => console.log("Api running on port 3000"));
