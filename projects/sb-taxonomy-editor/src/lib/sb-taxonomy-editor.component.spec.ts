import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SbTaxonomyEditorComponent } from './sb-taxonomy-editor.component';
import { HttpClientModule } from '@angular/common/http';

describe('SbTaxonomyEditorComponent', () => {
  let component: SbTaxonomyEditorComponent;
  let fixture: ComponentFixture<SbTaxonomyEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SbTaxonomyEditorComponent ],
      imports: [HttpClientModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SbTaxonomyEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
