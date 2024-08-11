import chalk from "chalk";

const config = {
  matchers: [
    "/health",
    "/auth",
    "/client",
    "/account",
    "/recent",
    "/favorite",
    "/collection",
  ],
  methods: {
    GET: chalk.hex("#60E809"),
    POST: chalk.yellowBright,
    PUT: chalk.cyanBright,
    DELETE: chalk.red,
  },
};

export default config;
