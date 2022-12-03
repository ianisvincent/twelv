import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Alert } from './alert';

@Component({
    selector: 'app-alert',
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {
    @Input() alert: Alert | undefined;
    @Output() countDownFinished = new EventEmitter();
    public redirectCounter = 3;
    public isDisplayed: boolean = true;
    private readonly displayDelay = 3000;

    constructor() {
    }

    ngOnInit(): void {
        this.startDisplayTimer();
        if (this.alert?.isCountDown) {
            this.startCountDown();
        }
    }

    private startDisplayTimer(): void {
        setTimeout(() => {
            this.isDisplayed = false;
        }, this.displayDelay);
    }

    private startCountDown(): void {
        let intervalId = setInterval(() => {
            this.redirectCounter = this.redirectCounter - 1;
            if (this.redirectCounter === 0) {
                clearInterval(intervalId)
                this.countDownFinished.emit();
            }
        }, 1000)
    }
}
