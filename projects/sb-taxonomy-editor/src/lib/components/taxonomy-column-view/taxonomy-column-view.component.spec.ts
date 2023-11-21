import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxonomyColumnViewComponent } from './taxonomy-column-view.component';
import { HttpClientModule } from '@angular/common/http';
import { ConnectorService } from '../../services/connector.service';


describe('TaxonomyColumnViewComponent', () => {
  let component: TaxonomyColumnViewComponent;
  let fixture: ComponentFixture<TaxonomyColumnViewComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [ TaxonomyColumnViewComponent ],
      imports: [HttpClientModule],
      providers: [ConnectorService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxonomyColumnViewComponent);
    component = fixture.componentInstance;
    component.column = {
      index:1
    };
    
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
