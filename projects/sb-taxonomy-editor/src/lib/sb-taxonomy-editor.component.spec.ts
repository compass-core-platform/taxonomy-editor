import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SbTaxonomyEditorComponent } from './sb-taxonomy-editor.component';

describe('SbTaxonomyEditorComponent', () => {
  let component: SbTaxonomyEditorComponent;
  let fixture: ComponentFixture<SbTaxonomyEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SbTaxonomyEditorComponent ]
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
