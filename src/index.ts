import Elysia from "elysia";
import index from "./index.html";

new Elysia()
.get("/*", index)
.listen(3000, (sv) => console.log(`Server started on port ${sv.port}`));
