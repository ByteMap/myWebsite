import { Component, Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

export class ContentDialogData {
  dialogTitle?: string;
  dialogContent?: string;
}

@Component({
  selector: 'content-dialog',
  templateUrl: './content-dialog.component.html',
  styleUrls: ['./content-dialog.component.scss']
})
export class ContentDialogComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<ContentDialogComponent>, @Inject(MAT_DIALOG_DATA) public dialogData: ContentDialogData) {}

  ngOnInit() {}
}
