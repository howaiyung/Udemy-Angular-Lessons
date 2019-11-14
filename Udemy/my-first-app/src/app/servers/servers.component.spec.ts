import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServersComponent } from './servers.component';

describe('ServersComponent', () => {
  let component: ServersComponent;
  let fixture: ComponentFixture<ServersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


/*

Note that for Visual Studio Code as of version 1.40.1 User version, if you can run ng cmds, do the following:

1. Right Clicked on My Computer (windows)
2. Selected Advanced System Settings
3. Clicked "Environment Variables"
4. Under "Path" variable, made the FIRST value listed %AppData%\npm

Reference:
https://stackoverflow.com/questions/44958847/the-term-ng-is-not-recognized-as-the-name-of-a-cmdlet/44958882

*/