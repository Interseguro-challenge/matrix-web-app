import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { TableConfig } from '../../../core/models/generic-table.model';

@Component({
  selector: 'app-generic-table',
  templateUrl: './generic-table.component.html',
  styleUrls: ['./generic-table.component.css'],
})
export class GenericTableComponent implements OnInit, OnChanges {
  dataSource: MatTableDataSource<any>;
  @Input() tableConfig!: TableConfig;
  @Input() data: any;
  displayedColumns: string[] = [];

  @Output() optionSelected = new EventEmitter();

  constructor() {
    this.dataSource = new MatTableDataSource<any>();
  }

  ngOnInit() {
    this.dataSource.data = this.data;
    this.getColumns();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes['data'].firstChange) {
      this.dataSource = changes['data'].currentValue;
    }
  }

  getColumns() {
    this.tableConfig.columns.map(element => {
      this.displayedColumns.push(element.name);
    });
  }

  onOptionSelected<T>(element: T, action: string) {
    console.log(element);
    this.tableConfig.columns.map(column => {
      if (column.options !== undefined) {
        column.options.map(option => {
          if (option.action === action) {
            console.log(action);
            console.log(element);
            this.optionSelected.emit({ action, rowData: element });
          }
        });
      }
    });
  }
}
