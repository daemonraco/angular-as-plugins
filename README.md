# Creation
```
ng new core --routing --skip-git --style scss --skip-tests --minimal
ng new plugin --skip-git --style scss --skip-tests --minimal
```

# Example Sources
Some documentation I found to build my stuff.
* [Build a Reusable Component with Angular Elements](https://scotch.io/tutorials/build-a-reusable-component-with-angular-elements/amp)
    * I ignored the `okta` part.

# Testing
Enter the folder `core` and run `npm run start` to use it as a simple app that is
not build for production.
If you `npm run start:prod` it will be the same but it will simulate a built and
minified app ready for production.

If you want to test as it should be compiled, instead of `http://localhost:4200/` use  `http://localhost:4200/?how-it-should-be`
