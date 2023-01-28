import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { getClosestAcceptableTargetPage, getEntitiesOfPage, getNumberOfPagesToContainEntities } from 'src/app/utility/paginator';

@Component({
  selector: 'app-pagination-bar',
  templateUrl: './pagination-bar.component.html',
  styleUrls: ['./pagination-bar.component.css']
})
export class PaginationBarComponent implements OnInit {

  @Input() allItems!: any[];
  @Input() maxItemsPerPage!: number;
  @Input() currentPage!: number;

  @Output() displayedItems = new EventEmitter<any[]>();

  maxPage: number = 1;
  targetPage: number = 1;

  constructor() {
  }

  ngOnInit(): void {
    this.maxPage = getNumberOfPagesToContainEntities(this.allItems, this.maxItemsPerPage);
    this.setCurrentPage(this.currentPage);
  }

  setCurrentPage(page: number) {
    this.currentPage = getClosestAcceptableTargetPage(this.allItems, page, this.maxItemsPerPage);
    this.targetPage = this.currentPage
    this.displayedItems.emit(getEntitiesOfPage(this.allItems, this.currentPage, this.maxItemsPerPage));
  }

}
