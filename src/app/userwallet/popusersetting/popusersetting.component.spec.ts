import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PopusersettingComponent } from './popusersetting.component';

describe('PopusersettingComponent', () => {
  let component: PopusersettingComponent;
  let fixture: ComponentFixture<PopusersettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopusersettingComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PopusersettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
