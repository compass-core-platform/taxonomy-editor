import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxonomyViewComponent } from './taxonomy-view.component';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ConnectorService } from '../../services/connector.service';
import { MockFrameworkService, ConnectorMockService } from './taxonomy-view.component.stub';
import { FrameworkService } from '../../services/framework.service';


describe('TaxonomyViewComponent', () => {
  let component: TaxonomyViewComponent;
  let fixture: ComponentFixture<TaxonomyViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaxonomyViewComponent ],
      imports: [HttpClientModule, MatDialogModule, MatSnackBarModule],
      providers: [
        {provide:ConnectorService, useClass: ConnectorMockService},
        {provide:FrameworkService, useClass: MockFrameworkService}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxonomyViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  
  afterEach(() => {
    spyOn(component, 'ngOnDestroy').and.callFake(() => { });
    fixture.destroy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
