import { Component, EventEmitter, Output } from '@angular/core';
import { AlertType } from '../alert/alert';

@Component({
    selector: 'app-logo',
    templateUrl: './logo.component.html',
    styleUrls: ['./logo.component.scss']
})
export class LogoComponent {
    @Output() displayDialog = new EventEmitter();
    @Output() displayAlert = new EventEmitter<AlertType>();
    public alertTypeEnum = AlertType;
    public isBulletHovered = false;
    public isBulletClicked = false;

    onBulletHovered(): void {
        this.isBulletHovered = !this.isBulletHovered;
    }

    onBulletClicked(): void {
        this.isBulletClicked = !this.isBulletClicked;
    }
}
