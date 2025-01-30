import { Component, OnInit } from '@angular/core';
import { User } from '../../../../core/models/user.model';
import { CookieService } from 'ngx-cookie-service';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatrixService } from '../../services/matrix.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  standalone: false,
})
export class HomePageComponent implements OnInit {
  user!: User;

  matrixForm: FormGroup;
  responseData: any = null;
  isLoading = false;
  errorMessage: string | null = null;

  constructor(
    private readonly cookieService: CookieService,
    private fb: FormBuilder,
    private matrixService: MatrixService
  ) {
    this.matrixForm = this.fb.group({
      rows: [3, [Validators.required, Validators.min(2), Validators.max(5)]], // Min 2x2, Max 5x5
      cols: [3, [Validators.required, Validators.min(2), Validators.max(5)]],
      matrix: this.fb.array([]), // Matriz dinámica
    });

    this.generateMatrix(); // Crear matriz inicial
  }

  ngOnInit() {
    // this.getUserInfo();
  }

  onLogOut() {
    this.cookieService.delete('token', '/');
    localStorage.removeItem('user');
    window.location.reload();
  }

  get matrix(): FormArray {
    return this.matrixForm.get('matrix') as FormArray;
  }

  generateMatrix(): void {
    this.matrix.clear();
    const rows = this.matrixForm.get('rows')?.value;
    const cols = this.matrixForm.get('cols')?.value;

    for (let i = 0; i < rows; i++) {
      const row = this.fb.array([]);
      for (let j = 0; j < cols; j++) {
        row.push(
          this.fb.control('', [
            Validators.required,
            Validators.pattern('^-?[0-9]+(\\.[0-9]+)?$'),
          ])
        );
      }
      this.matrix.push(row);
    }

    console.log(this.matrix.controls);

    const firstCell = (this.matrix.at(0) as FormArray).at(0);
    console.log(firstCell);
  }

  sendMatrix(): void {
    if (this.matrixForm.invalid) {
      return;
    }

    this.isLoading = true;
    this.errorMessage = null;

    const matrixData = this.matrix.value.map((row: any) =>
      row.map((cell: any) => Number(cell))
    );

    this.matrixService.sendMatrix(matrixData).subscribe({
      next: (response) => {
        this.responseData = response;
        this.isLoading = false;
      },
      error: (error) => {
        this.errorMessage = 'Error al procesar la matriz';
        this.isLoading = false;
      },
    });
  }

  getMatrixRow(index: number): FormArray {
    return this.matrix.at(index) as FormArray;
  }

  getMatrixRowControls(index: number): FormControl[] {
    return this.getMatrixRow(index).controls as FormControl[];
  }
  
  getMatrixCell(rowIndex: number, colIndex: number): FormControl {
    return this.getMatrixRow(rowIndex).at(colIndex) as FormControl;
  }
}
