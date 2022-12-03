import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Dialog } from './dialog';

@Component({
    selector: 'app-dialog',
    templateUrl: './dialog.component.html',
    styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
    @Input() dialog: Dialog | undefined;
    @Output() closeDialog = new EventEmitter();

    constructor() {
    }

    ngOnInit(): void {
    }

}
