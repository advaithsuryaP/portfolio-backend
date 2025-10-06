import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class LogInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const httpCtx = context.switchToHttp();
    const request = httpCtx.getRequest() as Request;

    const { method, url } = request;

    console.log(`Interceptor: ${method} ${url}`);

    return next.handle();
  }
}
