import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { EditDialogComponent } from '../components/edit-dialog/edit-dialog.component';
import { ConfirmDialogComponent } from '../components/confirm-dialog/confirm-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(
    private dialog: MatDialog
  ) { }

  public openEditDialog(_data){
    // console.log(_data)
    var dialogRef = this.dialog.open(EditDialogComponent, {
      width: "40rem",
      data: _data
    });
    
  }

  public openDeleteDialog(){
    var dialogRef = this.dialog.open(ConfirmDialogComponent,{
      width: "20rem",
      data: {title: "Remove Blog Confirmation", body: "Are you sure to remove Blog?"}
    })
    return dialogRef;
  }
}
