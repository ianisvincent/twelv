import { Component } from '@angular/core';
import { Alert, AlertType } from './alert/alert';
import { Dialog } from './dialog/dialog';
import { AlertService } from './alert/alert.service';
import { DialogService } from './dialog/dialog.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    public alert: Alert | undefined;
    public dialog: Dialog | undefined;
    public isDialogDisplayed = false;
    public isAlertDisplayed = false;

    constructor(private alertService: AlertService,
                private dialogService: DialogService) {
        this.dialog = this.dialogService.defaultDialog;
    }

    onDisplayAlert(alertType: AlertType): void {
        if (!this.isAlertDisplayed) {
            this.alert = this.alertService.createAlert(alertType);
            this.isAlertDisplayed = true;
            setTimeout(() => {
                this.isAlertDisplayed = false;
            }, this.alertService.displayDelay);
        }
    }

    onToggleDialog(): void {
        this.isDialogDisplayed = !this.isDialogDisplayed;
    }

    onCountDownFinished(): void {
        window.location.href = 'https://www.twelv.fr';
    }
}
