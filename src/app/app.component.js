import { WFMComponent } from '../framework';

class AppComponent extends WFMComponent {
  constructor(config) {
    super(config);
  }
}

export const appComponent = new AppComponent({
  selector: 'body',
  template: `
     <h1>App is Working</>
     <h3>It's really working<h3/>
    `,
});
