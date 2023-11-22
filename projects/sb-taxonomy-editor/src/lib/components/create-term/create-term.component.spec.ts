import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTermComponent } from './create-term.component';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { By } from '@angular/platform-browser';
import { MatButtonHarness } from '@angular/material/button/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { HarnessLoader } from '@angular/cdk/testing';

describe('CreateTermComponent', () => {
  let component: CreateTermComponent;
  let fixture: ComponentFixture<CreateTermComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTermComponent ],
      imports: [
        MatDialogModule,
        BrowserDynamicTestingModule,
        HttpClientModule,
        ReactiveFormsModule,
        MatAutocompleteModule
      ],
      providers:[
        {provide: MatDialogRef, useValue: {}},
        {provide: MAT_DIALOG_DATA, useValue: []},
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTermComponent);
    component = fixture.componentInstance;
  
    component.data = {
      columnInfo: {
        children: []
      }
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form', () => {
    expect(component.createTermForm).toBeDefined();
  });

  it('should mark form as invalid on submit with empty fields', () => {
    component.createTermForm.setValue({ name: '', description: '' });
    expect(component.createTermForm.valid).toBeFalsy();
  });

  it('should call saveTerm method on form submission for create', () => {
    spyOn(component, 'saveTerm');
    // Set form values as needed
    component.createTermForm.setValue({ name: 'Test Term', description: 'Description' });
    component.disableCreate = false;
    fixture.detectChanges(); // Trigger change detection
    fixture.debugElement.query(By.css('form')).triggerEventHandler('ngSubmit', null);
    expect(component.saveTerm).toHaveBeenCalled();
  });

  it('should call updateTerm method on form submission for update', () => {
    spyOn(component, 'updateTerm');
    // Set form values as needed
    component.createTermForm.setValue({ name: 'Updated Term', description: 'Updated Description' });
    component.disableCreate = true;
    fixture.detectChanges(); // Trigger change detection
    fixture.debugElement.query(By.css('form')).triggerEventHandler('ngSubmit', null);
    expect(component.updateTerm).toHaveBeenCalled();
  });

  it('should render "Update" button when in update mode', async () => {
    component.disableCreate = true;
    fixture.detectChanges(); // Trigger change detection
    const loader = TestbedHarnessEnvironment.loader(fixture);
    const updateButton = await loader.getHarness(MatButtonHarness.with({ text: 'Update' }));
    expect(updateButton).toBeTruthy();
  });

  it('should call dialogClose method on "Cancel" button click', async () => {
    spyOn(component, 'dialogClose');
    const loader = TestbedHarnessEnvironment.loader(fixture);
    const cancelButton = await loader.getHarness(MatButtonHarness.with({ text: 'Cancel' }));
    await cancelButton.click();
    fixture.detectChanges();
    expect(component.dialogClose).toHaveBeenCalled();
  });
});
