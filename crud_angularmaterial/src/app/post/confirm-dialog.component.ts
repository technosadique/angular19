import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';


@Component({
    selector: 'app-confirm-dialog',
    templateUrl: './confirm-dialog.component.html',
    imports: [MatDialogModule, MatButtonModule]
})
export class ConfirmDialogComponent {
    constructor(
        public dialogRef: MatDialogRef<ConfirmDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public message: string
    ) { }

    onConfirm() {
        this.dialogRef.close(true);
    }

    onCancel() {
        this.dialogRef.close(false);
    }

}