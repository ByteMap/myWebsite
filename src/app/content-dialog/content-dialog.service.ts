import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ContentDialogComponent, ContentDialogData } from "./content-dialog.component";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class ContentDialogService {
  constructor(public dialog: MatDialog) {}

  openContentDialog(contentData: ContentDialogData, dialogSize: string): Observable<boolean> {
    const dialogRef = this.dialog.open(ContentDialogComponent, {
      width: dialogSize,
      data: contentData
    });
    return dialogRef.afterClosed();
  }
}
