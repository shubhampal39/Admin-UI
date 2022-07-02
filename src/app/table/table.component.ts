import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { userModel } from "../model/userModel";
import { DataService } from "../services/data.service";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'email', 'name', 'role', 'edit', 'delete'];
  userCollection!: MatTableDataSource<userModel>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private dataService: DataService) { }

  ngAfterViewInit(): void {
    this.dataService.getApiData().subscribe(userData => {
      this.userCollection = new MatTableDataSource(userData);
      console.log(this.userCollection)
      this.userCollection.paginator = this.paginator;
    });
  }

  edit(a: any) {

  }

  delete(a: any) {

  }
}

