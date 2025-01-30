import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, ValidatorFn, Validators } from '@angular/forms';
import { GenericFilterFormService } from '../../services/generic-filter-form.service';
import { FormField } from '../../../core/models/generic-filter-form.model';

@Component({
  selector: 'app-generic-filter-form',
  templateUrl: './generic-filter-form.component.html',
  styleUrls: ['./generic-filter-form.component.css'],
})
export class GenericFilterFormComponent implements OnInit {
  @Output() search = new EventEmitter();
  @Output() clear = new EventEmitter();
  @Output() optionSelected = new EventEmitter();

  form!: UntypedFormGroup;

  @Input() formFields!: FormField[];

  constructor(private genericFilterFormService: GenericFilterFormService) {}

  ngOnInit() {
    this.createForm();

    this.genericFilterFormService.formValueChanges$.subscribe(change => {
      console.log(change);
      const { fieldName, value } = change;
      this.updateFormFieldValue(fieldName, value);
    });
  }

  createForm() {
    const formGroup: any = {};
    this.formFields.forEach(field => {
      if (field.validations) {
        formGroup[field.name] = new UntypedFormControl(
          null,
          field.validations.map(validate => validate.validation)
        );
      } else {
        formGroup[field.name] = new UntypedFormControl('');
      }
    });

    this.form = new UntypedFormGroup(formGroup);
  }

  onSearch() {
    if (this.form.valid) {
      this.search.emit(this.form.value);
    }
  }

  updateFormFieldValue(fieldName: string, value: any) {
    if (this.form.contains(fieldName)) {
      this.form.get(fieldName)?.setValue(value);
    }
  }

  onOptionSelected(field: FormField) {
    console.log({ [field.name]: this.form.get(field.name)?.value });
    this.optionSelected.emit({ [field.name]: this.form.get(field.name)?.value });
  }

  onClear() {
    this.form.reset();
    this.clear.emit(this.form.value);
  }
}
