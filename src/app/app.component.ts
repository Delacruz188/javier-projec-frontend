import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { DialogComponent } from './components/dialog/dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'javier-projec-frontend';
  api: any;
  dataSource: any;
  paginator: any;
  sort: any;

  constructor(private dialog: MatDialog){}


  getProducts() {
    this.api.getProduct()
    .subscribe({
      next: (res: any) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: () => {
        alert("There was an error while fetching the products");
      }
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '30%',
    }).afterClosed().subscribe({
      next: (res) => {
        this.getProducts();
      },
      error: () => {
        alert("There was an error while deleting the products");
      }
    });
  }


}
