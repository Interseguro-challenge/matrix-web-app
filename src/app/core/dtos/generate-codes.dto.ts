export interface GenerateCodesDto {
  user: string;
  emails?: string[];
  codesNumber: number;
  availableFrom: Date;
  availableTo: Date;
}
