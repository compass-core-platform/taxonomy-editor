import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmDialogBoxComponent } from './confirm-dialog-box.component';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { HttpClientModule } from '@angular/common/http';

describe('ConfirmDialogBoxComponent', () => {
  let component: ConfirmDialogBoxComponent;
  let fixture: ComponentFixture<ConfirmDialogBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmDialogBoxComponent ],
      imports: [
        MatDialogModule,
        BrowserDynamicTestingModule,
        HttpClientModule
      ],
      providers:[
        {provide: MatDialogRef, useValue: {}},
        {provide: MAT_DIALOG_DATA, useValue: []},
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmDialogBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
