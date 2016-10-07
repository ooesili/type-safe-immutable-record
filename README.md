Type-safe Immutable Record
==========================

A strongly typed immutable-js record interface.

This interface was strongly inspired by [typed-immutable-record][0], but
restricts the interface, allowing only methods that can play nicely with
TypeScript's interface system. So far the only method on the interface is
`merge`. If you want to add more methods, open an issue and start a discussion
so that we can make sure to keep this interface as safe as possible.


Usage
-----

This package contains only two things. An interface which should be extended
from a specific way describe below, and a wrapper around `Immutable.Record`
that usses the interface.


```typescript
import Record, { RecordBase } from 'type-safe-immutable-record'

export interface PersonFields {
  name: string
  age: number
}

export interface PersonChange {
  name?: string
  age?: number
}

export interface Person extends RecordBase<PersonChange, Person>, PersonFields {}

export const Person = Record<PersonFields, PersonChange, Person>({
  name: '',
  age: 0,
})

const person = Person({
  name: 'Dale Gribble',
  age: 47
})

person.age === 47

const alias = person.merge({name: 'Rusty Shackleford'})

alias.name === 'Rusty Shackleford'
```

[0]: https://github.com/rangle/typed-immutable-record
