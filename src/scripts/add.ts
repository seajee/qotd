import { addQuote } from "../database";

const [ _node, _file, ...args ] = process.argv;

const quote = args.join(" ");

if (quote === "") {
    console.error("ERROR: The provided quote was empty");
    process.exit(1);
}

addQuote(quote);
