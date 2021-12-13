import chalk from "chalk";
import moment from "moment";
import util from "util";

export default class logger {
    public static shared: logger = new logger(); //* init logger class: logger

    public static sucess(message: any, bold: boolean = false): void {
        if (bold) return console.log(`[${chalk.rgb(40, 175, 40)("SUCCESS")}] ${chalk.bold.black(moment().format("HH:mm:ss"))} ${chalk.bold(this.clean(message))}`)
        return console.log(`[${chalk.rgb(40, 175, 40)("SUCCESS")}] ${chalk.bold.black(moment().format("HH:mm:ss"))} ${this.clean(message)}`)
    }

    public static error(message: any, bold: boolean = false): void {
        if (bold) return console.log(`[${chalk.rgb(255, 10, 10)("ERROR")}] ${chalk.bold.black(moment().format("HH:mm:ss"))} ${chalk.bold(this.clean(message))}`)
        return console.log(`[${chalk.rgb(255, 10, 10)("ERROR")}] ${chalk.bold.black(moment().format("HH:mm:ss"))} ${this.clean(message)}`)
    }
    
    public static info(message: any, bold: boolean = false): void {
        if (bold) return console.log(`[${chalk.rgb(155, 135, 0)("INFO")}] ${chalk.bold.black(moment().format("HH:mm:ss"))} ${chalk.bold(this.clean(message))}`)
        return console.log(`[${chalk.rgb(155, 135, 0)("INFO")}] ${chalk.bold.black(moment().format("HH:mm:ss"))} ${this.clean(message)}`)
    }

    public static test(message: any, bold: boolean = false): void {
        if (bold) return console.log(`[${chalk.rgb(135, 205, 250)("TEST")}] ${chalk.bold.black(moment().format("HH:mm:ss"))} ${chalk.bold(this.clean(message))}`)
        return console.log(`[${chalk.rgb(135, 205, 250)("TEST")}] ${chalk.bold.black(moment().format("HH:mm:ss"))} ${this.clean(message)}`)
    }

    private static clean(message: any): string {
        if (typeof message === "string") return message;
        return util.inspect(message, { depth: Infinity });
    }
}