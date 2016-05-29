import fileSystem from "fs";

export default class StimpakQuotes {
	constructor(stimpak) {
		stimpak.quote = this.quote.bind(stimpak);
	}

	quote() {
		const quotes = fileSystem.readFileSync(`${__dirname}/quotes.txt`, { encoding: "utf-8" });

		let lines = quotes.split("\n");

		lines = lines.filter(line => {
			return !(line === undefined || line === "");
		});

		const randomLine = lines[Math.floor(Math.random()*lines.length)];

		this.then((stimpak, done) => {
			process.stdout.write(`    ${randomLine}\n\n`);
			done();
		});
	}
}
