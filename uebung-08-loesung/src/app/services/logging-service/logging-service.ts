export class LoggingService {

    private constructor() {
    }

    private static INSTANCE: LoggingService;
    
    public static get(): LoggingService {
        if (!LoggingService.INSTANCE) {
            return LoggingService.INSTANCE = new LoggingService();
        }
        return LoggingService.INSTANCE;
    }

    log(message: string): void {
        if (import.meta.env.DEV) {
          console.log(`[LOG] ${message}`);
        }
    }

    error(message: string): void {
        console.error(`[ERROR] ${message}`);
    }

    warn(message: string): void {
        console.warn(`[WARN] ${message}`);
    }

}