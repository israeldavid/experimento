import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpResponse,
    HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError, from } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';

const TOKEN_KEY = 'token';
@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {

    isLoading: boolean = false;
    constructor(
        public loadingCtrl: LoadingController,
        private toastCtrl: ToastController,
    ) { }


    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        this.presentLoading();
        return next.handle(request).pipe(
            map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    this.dismissLoading();
                }
                return event;
            }),
            catchError((error: HttpErrorResponse) => {
                console.error(error);
                this.dismissLoading();
                this.presentErrorToast('Ups, ha habido un problema');
                return throwError(error);
            })
        );
    }

    // Presenta el toast con el error
    async presentErrorToast(msg) {
        const toast = await this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'top',
            color: 'danger',
            cssClass: 'toast',
            showCloseButton: true,
            closeButtonText: "OK",
        });
        toast.present();
    }

    async presentLoading() {
        this.isLoading = true;
        return await this.loadingCtrl.create({
            duration: 5000,
        }).then(a => {
            a.present().then(() => {
                if (!this.isLoading) {
                    a.dismiss().then(() => console.log());
                }
            });
        });
    }

    async dismissLoading() {
        this.isLoading = false;
        return await this.loadingCtrl.dismiss().then(() => console.log('dismissed'));
    }
}