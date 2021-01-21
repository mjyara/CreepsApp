import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserwalletPage } from './userwallet.page';

describe('UserwalletPage', () => {
  let component: UserwalletPage;
  let fixture: ComponentFixture<UserwalletPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserwalletPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UserwalletPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
