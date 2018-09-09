## Angular 6 Overview & Setup : Sept 2018

#### Setup

- You will need **administrator rights** and the ability to install/run software from the command line.
- Install **Chrome**
- Install the Augury extension for Chrome
- Install **Atom** or **Visual Studio Code**.
- Install **Node** (which also installs NPM)
- Check Node/NPM versions:

		node --v
		npm --v

- The Angular 6 CLI requires Node 8.9+, and NPM 5.5.1+

- Install the **Angular Command Line Interface (CLI)** globally.

		npm install -g @angular/cli

- Check the Angular 6 CLI is running:

		ng --version
		ng --help

- Some optional useful tools that can also be installed.
- **Typescript** can be run from the command line.

		npm install -g typescript
		
- http-server creates a local web server

		npm install http-server -g
		
		
#### JS review
- Review of ES5 and ES6 fundamentals

#### Exercise a-intro
- Create a **minimal** Angular app using the Angular CLI.
- The **structure** of an Angular app.

#### Exercise b-shop
- Iterate over an array using **ngFor**.
- Add a currency **pipe**
- Add a **(click) event**
- Conditionally display/style using **ngIf** and **ngClass**.

#### Exercise c-compose

- Angular components are **composable**.
- Using **ng generate** to add a new component.
- Pass **inputs** into a component.
- Emit **output** events from a component.

#### Exercise d-translate
- Convert a jQuery translation example into Angular

#### Exercise e-di

- Create a new **service** to read JSON data using HTTP.
- Connect the service to a component using Dependency Injection.

#### Exercise f-pipe
- Built-in Angular pipes
- Create a custom pipe.

#### Exercise g-observable
- Introduce Observables using JS
- Implement an Observable in Angular.

#### Exercise h-vote
- Use GET/PUT with HTTPClient to read/write to a Node server.

#### Exercise i-forms
- FormControls , FormGroups
- FormBuilder
- Validation
- Custom validation

#### Exercise j-router
- Define an Angular router.
- Route parameters
- Nested routes
- Guards.

#### Exercise k-lifecycle
- Working with component life cycle hooks
- Creating a stateful pipe with onDestroy.

#### Exercise l-game
- Working in teams, port a word game from plain JS to Angular.

#### Exercise m-testing
- Unit testing with Jasmine and Karma

#### Exercise n-directive
- Create a custom directive.
- Communicate between the directive and its parent component

#### Exercise o-redux
- Centralise state using the Redux pattern.

#### Exercise p-angular6
- Review new features of Angular 6

