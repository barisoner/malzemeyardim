import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-talep',
  templateUrl: './talep.component.html',
  styleUrls: ['./talep.component.scss']
})
export class TalepComponent implements OnInit {
  Title: string = 'Talep Gridi';
  selectedRow: number | null = null;
  statusFilter: string = 'tümü';

  rows = [
    { date: '01.01.2024', documentNo: '2024-5466', organization: '', status: 'Keşif Bekleyen', description: '' },
    { date: '11.02.2024', documentNo: '2024-45455', organization: '', status: 'Onay Bekleyen', description: '' },
    { date: '11.03.2024', documentNo: '2024-45325', organization: '', status: 'Teslim Bekleyen', description: '' },
    { date: '11.04.2024', documentNo: '2024-12325', organization: '', status: 'Teslim Bekleyen', description: '' },
    { date: '11.05.2024', documentNo: '2024-12325', organization: '', status: 'Teslim Bekleyen', description: '' },
    { date: '11.06.2024', documentNo: '2024-12325', organization: '', status: 'Teslim Bekleyen', description: '' },
    { date: '11.07.2024', documentNo: '2024-12325', organization: '', status: 'Teslim Bekleyen', description: '' },
    { date: '11.07.2024', documentNo: '2024-12325', organization: '', status: 'Teslim Bekleyen', description: '' },
    { date: '11.07.2024', documentNo: '2024-12325', organization: '', status: 'Teslim Bekleyen', description: '' },
    { date: '11.07.2024', documentNo: '2024-12325', organization: '', status: 'Teslim Bekleyen', description: '' },
    { date: '11.07.2024', documentNo: '2024-12325', organization: '', status: 'Teslim Bekleyen', description: '' },
    { date: '11.08.2024', documentNo: '2024-41235', organization: '', status: 'Tamamlanan', description: '' },
  ];

  filteredRows: Array<{date: string; documentNo: string; organization: string; status: string; description: string}> = [];

  kesifBekleyenCount: number = 0;
  onayBekleyenCount: number = 0;
  teslimBekleyenCount: number = 0;
  tamamlananCount: number = 0;
  tumuCount: number = 0;

  paginatedRows: Array<{date: string; documentNo: string; organization: string; status: string; description: string}> = [];
  currentPage: number = 1;
  rowsPerPage: number = 7;
  totalPages: number = 1;

  ngOnInit(): void {
    this.calculateCounts();
    this.filterRows();
    this.setPaginatedRows();
  }

  calculateCounts() {
    this.kesifBekleyenCount = this.rows.filter(row => row.status === 'Keşif Bekleyen').length;
    this.onayBekleyenCount = this.rows.filter(row => row.status === 'Onay Bekleyen').length;
    this.teslimBekleyenCount = this.rows.filter(row => row.status === 'Teslim Bekleyen').length;
    this.tamamlananCount = this.rows.filter(row => row.status === 'Tamamlanan').length;
    this.tumuCount = this.rows.length;
  }

  onRowClick(index: number): void {
    this.selectedRow = index;
  }

  filterRows(): void {
    if (this.statusFilter === 'tümü') {
      this.filteredRows = [...this.rows];
    } else {
      this.filteredRows = this.rows.filter(row => row.status === this.statusFilter);
    }
    this.totalPages = Math.ceil(this.filteredRows.length / this.rowsPerPage);
    this.setPaginatedRows();
  }

  setPaginatedRows(): void {
    const startIndex = (this.currentPage - 1) * this.rowsPerPage;
    const endIndex = startIndex + this.rowsPerPage;

    this.paginatedRows = this.filteredRows.slice(startIndex, endIndex);
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.setPaginatedRows();
    }
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.setPaginatedRows();
    }
  }

  onStatusChange(status: string): void {
    this.statusFilter = status;
    this.filterRows();
    this.currentPage = 1;
    this.setPaginatedRows();
  }
}