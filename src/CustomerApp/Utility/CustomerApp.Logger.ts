//browser console
//email
//Db

export interface ILogger{
    Log();
}

export class BaseLogger implements ILogger{
    Log() {
    }
}
export class ConsoleLogger extends BaseLogger{
    override Log() {
        console.log("Using console loggger");
    }
}

export class DBLogger extends BaseLogger{
    override Log() {
        console.log("Using DB loggger");
    }
}

export class FileLogger extends BaseLogger{
    override Log() {
        console.log("Using File loggger");
    }
}