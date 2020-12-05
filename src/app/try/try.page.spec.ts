import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TryPage } from './try.page';

describe('TryPage', () => {
  let component: TryPage;
  let fixture: ComponentFixture<TryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
