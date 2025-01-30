import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
	providedIn: "root",
})
export class GenericFilterFormService {
	private formValueSubject = new Subject<any>();

	formValueChanges$ = this.formValueSubject.asObservable();

	updateFormFieldValue(fieldName: string, value: any) {
		this.formValueSubject.next({ fieldName, value });
	}
}
