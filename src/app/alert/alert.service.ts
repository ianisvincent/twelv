import { Injectable } from '@angular/core';
import { Alert, AlertType } from './alert';

@Injectable({
    providedIn: 'root'
})
export class AlertService {
    readonly displayDelay = 4000;

    constructor() {
    }

    createAlert(alertType: AlertType): Alert {
        switch (alertType) {
            case AlertType.Error:
                return {
                    type: alertType,
                    message: 'Oups! Une erreur est survenue.'
                };
            case AlertType.Info:
                return {
                    type: alertType,
                    message: `Vous venez de cliquer sur le lien de notre site www.twelv.fr!`,
                    isCountDown: true
                };
            case AlertType.Success:
                return {
                    type: alertType,
                    message: 'Twelv est la plateforme collaborative qui détecte, organise et distribue le savoir entre pairs autour d’une communauté auto apprenante.'
                };
        }
    }
}
