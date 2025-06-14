import { Component, ViewChild } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PostService } from '../post.service';
import { Post } from '../post';
import { MessageService } from '../../message.service';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ConfirmDialogComponent } from './../confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatSortModule } from '@angular/material/sort';


@Component({
  selector: 'app-index',
  imports: [CommonModule, RouterModule, MatTableModule,
    MatToolbarModule,
    MatButtonModule, MatCardModule, MatIconModule, MatPaginatorModule,MatSortModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {

  posts: Post[] = [];
  successMessage = ''
  displayedColumns: string[] = ['id', 'name', 'email', 'age', 'actions'];


  @ViewChild(MatPaginator) paginator!: MatPaginator;
@ViewChild(MatSort) sort!: MatSort;
  dataSource = new MatTableDataSource<Post>();

  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(public postService: PostService, private messageService: MessageService, private dialog: MatDialog) { }

  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit() {
    this.successMessage = this.messageService.getMessage();
    if (this.successMessage) {
      setTimeout(() => this.successMessage = '', 3000);
    }
    this.postService.getAll().subscribe((data: Post[]) => {
    this.dataSource.data = data;
    });
  }

  ngAfterViewInit() {
  this.dataSource.paginator = this.paginator;
  this.dataSource.sort = this.sort;
}


  deletePost(id: string) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '350px',
      data: 'Are you sure you want to delete this record?'
    });

    dialogRef.afterClosed().subscribe(data => {
      if (data) {
        // Proceed with delete
        this.postService.delete(id).subscribe(() => {
          this.ngOnInit()
        });
      }
    });
  }


}