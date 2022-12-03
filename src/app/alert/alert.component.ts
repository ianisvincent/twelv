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
    public counter = 3;

    constructor() {
    }

    ngOnInit(): void {
        if (this.alert?.isCountDown) {
            let intervalId = setInterval(() => {
                this.counter = this.counter - 1;
                if (this.counter === 0) {
                    clearInterval(intervalId)
                    this.countDownFinished.emit();
                }
            }, 1000)
        }
    }
}
