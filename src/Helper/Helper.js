import chalk from "chalk";

export default class Helper {
    static outputHelp(examples = [], command = "") {
        const str = this.help(examples, command);

        str.forEach(eg => console.log(eg));
    }

    static help(examples = [], command = "") {
        let str = ["\n  Examples: \n"];

        const max = examples.reduce((a, b) => (a[0].length > b[0].length ? a : b), [0])[0].length;

        examples.forEach(([cmd, explain]) => {
            const padded = cmd.padEnd(max);
            str.push(`    $ shinka ${command} ${padded}   ${chalk.gray(explain)}`);
        });

        return str;
    }
}
