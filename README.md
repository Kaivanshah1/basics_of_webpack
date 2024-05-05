<h1>What is webpack?</h1>

<h4>It is a static module bundler for javascript application. It internally build a dependency graph, and combines every module of the project into one or more bundles.</h4>

<h1><b>What are the core concepts?</b></h1>

<h3>1) entry:</h3> it is a starting module that webpack uses to build its dependency graph. Webpack identifies all the other modules and libraries that the entry point relies on, both directly and indirectly. <br/>
<h3>2) output:</h3> it tells webpack were to emit the bundles it creates and how to name these files.<br/>
<h3>3) loaders:</h3> webpack only understand javascript and json files, loaders allow webpack to process other types of files.<br/>
<h3>4) plugin:</h3> plugins can be leveraged to perform a wider range of tasks like bundle optimization, asset management etc.<br/>
   

It the above project i have used webpack and webpack cli for creating bundles.
