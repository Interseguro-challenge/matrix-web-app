export interface TableConfig {
	columns: TableColumnConfig[];
}

export interface TableColumnConfig {
	title: string;
	name: string;
	type: TableColumnTypes;
	boolPipe?: {
		boolTrue: string;
		boolFalse: string;
	};
	options?: TableOptionsConfig[];
	viewOnMobile: boolean;
}

export interface TableOptionsConfig {
	action: string;
	icon: string;
	returnRowData: boolean;
}

export enum TableColumnTypes {
	"STRING" = "STRING",
	"NUMBER" = "NUMBER",
	"DATE" = "DATE",
	"BOOLEAN" = "BOOLEAN",
	"OPTION" = "OPTION",
}
