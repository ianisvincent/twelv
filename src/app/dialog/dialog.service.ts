import { Injectable } from '@angular/core';
import { Dialog } from './dialog';

@Injectable({
    providedIn: 'root'
})
export class DialogService {

    public readonly defaultDialog: Dialog = {
        title: 'Qui sommes-nous ?',
        message: 'Twelv est la plateforme collaborative de montée en compétences entre pairs. Avec le savoir faire Twelv, renforcez votre productivité, sécurisez votre environnement, tout en engageant et valorisant vos talents.'
    };

    constructor() {
    }
}
