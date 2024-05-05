<h1><b>What is webpack?</b></h1>

<h3>It is a static module bundler for javascript application. It internally build a dependency graph, and combines every module of the project into one or more bundles.</h3>

<h1><b>What are the core concepts?</b></h1>
<h3>
1) entry: it is a starting module that webpack uses to build its dependency graph. Webpack identifies all the other modules and libraries that the entry point relies on, both directly and indirectly.
2) output: it tells webpack were to emit the bundles it creates and how to name these files.
3) loaders: webpack only understand javascript and json files, loaders allow webpack to process other types of files.
4) plugin: plugins can be leveraged to perform a wider range of tasks like bundle optimization, asset management etc.</h3>
   

It the above project i have used webpack and webpack cli for creating bundles.
