import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorhandleService implements ErrorHandler {

  constructor() { }

  handleError(error: any): void {
    const Dt = new Date().toISOString();
    if (error instanceof HttpErrorResponse) {
        console.log(Dt, '\r\nHTTP error: ', error.message, '\r\nStatus code:', (<HttpErrorResponse>error).status);
    }
    else if (error instanceof TypeError) {
        console.log(Dt, '\r\nType Error: ', error.message);
    }
    else if (error instanceof Error) {
        console.log(Dt, '\r\nGeneral Error: ', error.message);
    }
    else {
        console.log(Dt, '\r\nAnonymous Error: ', error);
    }
}
}
