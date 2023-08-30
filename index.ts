console.clear();
import { from, of, zip } from 'rxjs';
import { groupBy, mergeMap, toArray } from 'rxjs/operators';

// https://www.learnrxjs.io/learn-rxjs/operators/transformation/groupby
// Example 2: Group by into key - values

const people = [
  { name: 'Sue', age: 25 },
  { name: 'Joe', age: 30 },
  { name: 'Frank', age: 25 },
  { name: 'Sarah', age: 35 },
];

from(people)
  .pipe(
    groupBy(
      (person) => person.age,
      (p) => p.name
    ),
    mergeMap((group) => zip(of(group.key), group.pipe(toArray())))
  )
  .subscribe(console.log);

/*
  output:
  [25, ["Sue", "Frank"]]
  [30, ["Joe"]]
  [35, ["Sarah"]]
*/
