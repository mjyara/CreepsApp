import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TesterPage } from './tester.page';

describe('TesterPage', () => {
  let component: TesterPage;
  let fixture: ComponentFixture<TesterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TesterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TesterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
