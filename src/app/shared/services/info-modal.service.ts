import { MatDialog } from '@angular/material/dialog';
import { InfoModal } from '../../core/models/info-modal.model';
import { InfoModalComponent } from '../components/info-modal/info-modal.component';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InfoModalService {
  constructor(private readonly matDialog: MatDialog) {}

  open(data: InfoModal) {
    return this.matDialog.open(InfoModalComponent, {
      data: { ...data },
    });
  }
}
