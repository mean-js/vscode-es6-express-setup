import path from "path";
import express from "express";
import { firstRoute } from "./first/first-route";

import Student from "./first/first";


class Main {
    static main() {
        let ref = new Student();
        console.log(ref);

        let app = express();

        app.use("/", firstRoute);


        app.listen(3003, function() {
            console.log("Server Started");
        });
    }
}

Main.main();