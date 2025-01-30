import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
	selector: "app-generic-delete-modal",
	templateUrl: "./generic-delete-modal.component.html",
	styleUrls: ["./generic-delete-modal.component.css"],
})
export class GenericDeleteModalComponent implements OnInit {
	constructor(
		@Inject(MAT_DIALOG_DATA) public toDeleteItemName: any,
		private dialogRef: MatDialogRef<GenericDeleteModalComponent>
	) {}

	ngOnInit() {}

	onCancel(): void {
		this.dialogRef.close(false);
	}
}
