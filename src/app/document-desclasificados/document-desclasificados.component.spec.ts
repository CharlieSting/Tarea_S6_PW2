import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentDesclasificadosComponent } from './document-desclasificados.component';

describe('DocumentDesclasificadosComponent', () => {
  let component: DocumentDesclasificadosComponent;
  let fixture: ComponentFixture<DocumentDesclasificadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentDesclasificadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentDesclasificadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
