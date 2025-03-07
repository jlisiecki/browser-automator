import { env } from "@/env";
import { type Configuration } from "webpack";

const config: Configuration = {};

console.log(env.NODE_ENV, config);
