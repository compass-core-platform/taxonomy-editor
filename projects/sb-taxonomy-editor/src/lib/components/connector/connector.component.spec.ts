import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ConnectorComponent } from './connector.component';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';


xdescribe('ConnectorComponent', () => {
  let component: ConnectorComponent;
  let fixture: ComponentFixture<ConnectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectorComponent ],
      imports:[
        MatDialogModule
      ],
      providers:[
        {provide: MatDialogRef, useValue: {}},
        {provide: MAT_DIALOG_DATA, useValue: []},
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
