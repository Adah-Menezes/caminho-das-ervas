import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { SecaoSiteType } from '../../types/secao.type';

@Component({
  selector: 'app-cabecalho',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cabecalho.component.html',
  styleUrl: './cabecalho.component.css',
})
export class CabecalhoComponent {
  isDropdownOpen = false;

  @Output()
  onChangePaginaAtual = new EventEmitter<SecaoSiteType>();

  paginaAtual: SecaoSiteType = "paginaInicial";
  toggleDropdown(open: boolean) {
    this.isDropdownOpen = open;
  }

  setPaginaAtual(secao: SecaoSiteType){
    this.paginaAtual = secao;
    this.onChangePaginaAtual.emit(this.paginaAtual);
  }
}
