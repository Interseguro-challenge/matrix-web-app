import { DialogRef } from '@angular/cdk/dialog';
import { Component, Inject, OnInit, Output } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { InfoModal, InfoModalType } from '../../../core/models/info-modal.model';

@Component({
  selector: 'app-info-modal',
  templateUrl: './info-modal.component.html',
  styleUrls: ['./info-modal.component.css'],
})
export class InfoModalComponent implements OnInit {
  @Output('onClose') onClose!: (response: boolean) => void;

  InfoModalType = InfoModalType;

  constructor(
    private readonly dialogRef: DialogRef<InfoModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: InfoModal
  ) {}

  ngOnInit() {
    console.log(this.data)
  }
}
