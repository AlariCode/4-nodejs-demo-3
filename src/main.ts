import { App } from './app';
import { ExeptionFilter } from './errors/exeption.filter';
import { LoggerService } from './logger/logger.service';
import { UserController } from './users/users.controller';

async function bootstrap() {
	const logger = new LoggerService();
	const app = new App(
		logger,
		new UserController(logger),
		new ExeptionFilter(logger)
	);
	await app.init();
}

bootstrap();