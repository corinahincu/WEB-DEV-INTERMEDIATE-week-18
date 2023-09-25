
# TypeScript 

- alternative to js (superset)
- allows us to use strict types
- supports modern features (arrow functions, let, const,destructuring)
- extra features ( generics, interfaces, tuples etc)

browsers by default do not understand typescript, like they do with js, so when we write typescript we have to compile it down into js, in order for the browsers to understand it.

tsc sandbox.ts -> for compiling into sandbox.js,  if is the same name, no need to write the name of js file.
tsc sandbox.ts -w -> for starting compilation in watch mode, in that case is no need to compile it every time manually!!!!