import { UntypedFormControl, ValidatorFn } from "@angular/forms";
import { Operator } from "../interfaces/operator.enum";

export interface FormField {
	type: FieldTypes;
	label: string;
	name: string;
	operator?: Operator;
	options?: Option[];
	placeholder?: string;
	validations?: Validation[];
	formControl?: UntypedFormControl;
}

export interface Validation {
	name: string;
	errorMessage: string;
	validation: ValidatorFn;
}

export interface Option {
	value: number | string | boolean;
	label: number | string | boolean;
}

export enum FieldTypes {
	"TEXT" = "TEXT",
	"NUMBER" = "NUMBER",
	"DATE" = "DATE",
	"BOOLEAN" = "BOOLEAN",
	"SELECT" = "SELECT",
}
