# NativeScriptWithNgCli

The [NativeScript](http://docs.nativescript.org/) project but you can use [Angular CLI](https://github.com/angular/angular-cli) to generate component.

## Usage

```
git clone https://github.com/wellwind/native-script-with-ng-cli.git
cd native-script-with-ng-cli
npm install
npm run start.android
```

You will see a very simple NativeScript app.

## Using Angular CLI to generate component

```
ng g c test
```

The command will generate a component in `src\app\test`. You have to use [NativeScript UI](http://docs.nativescript.org/ui/basics) on `*.html` file.

NativeScript use absolute view path for `templateUrl` in `@Component`, to enable relative path, you have to add `moduleId: module.id` to `@Component()` decorator.

```typescript
@Component({
    moduleId: module.id,
    selector: "app-test",
    templateUrl: "./test.component.html"
})
export class TestComponent implements OnInit {
}
```
