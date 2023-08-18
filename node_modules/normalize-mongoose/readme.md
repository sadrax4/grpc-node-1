# normalize-mongoose

[![GH Status](https://github.com/abranhe/normalize-mongoose/workflows/build/badge.svg)](https://github.com/abranhe/normalize-mongoose/actions)
[![NPM](https://img.shields.io/npm/v/normalize-mongoose)](https://npmjs.org/normalize-mongoose)
[![License](https://img.shields.io/npm/l/normalize-mongoose)](https://npmjs.org/normalize-mongoose)

> Normalize Mongoose JSON output

This plugin removes the following fields `_id`, `__v`, and published virtuals `id` when the document is converted to JSON. Also it allows you to hide private fields like `password`.

## Install

```
$ npm install normalize-mongoose
```

Using [Github NPM Registry](https://github.com/features/packages)

```
$ npm install abranhe@normalize-mongoose
```

## Usage

```js
import mongoose from 'mongoose';
import normalize from 'normalize-mongoose';

const personSchema = mongoose.Schema({
    name: String,
    age: Number,
});

personSchema.plugin(normalize);
```

See how `normalize-mongoose` will clean the the JSON output:

###### From:

```json
{
  "_id": "5dff03d3218b91425b9d6fab",
  "name": "Abraham",
  "__v": 0
}
```

###### To:

```json
{
  "id": "5dff03d3218b91425b9d6fab",
  "name": "Abraham"
}
```

`normalize-mongoose` comes really handy on real word applications, allowing you to hide from the output any private field previously defined.

```js
import mongoose from 'mongoose';
import normalize from 'normalize-mongoose';

const personSchema = mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    password: { type: String, private: true },
});

personSchema.plugin(normalize);

const Person = mongoose.model('Person', personSchema);
const someone = new Person( {
  name: 'Abraham',
  age: 33,
  email: 'abranhe@example.com',
  password: 'my_awesome_password',
});
```

The above code will output:

```json
{
  "id": "5dff03d3218b91425b9d6fab",
  "name": "Abraham",
  "age": 33,
  "email": "abranhe@example.com"
}
```

## License

MIT © [Abraham Hernandez](https://abranhe.com)
