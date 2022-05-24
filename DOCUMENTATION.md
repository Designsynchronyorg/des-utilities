
# DES Utilities

DES - Design Synchrony

Provides reusuable components for development, together with easier, faster and simpler code base.

## Installation

Install with npm

```bash
npm i des-utilities
```

## Documentation

#### Full documentation coming soon

### Duplicate items

#### This function looks to set the value of the key-value pair to the expected value in the ```items``` object

#### Props

```items``` - the objects (or array)
we would be duplicating

```Structure``` - a component that has
the structure we want to have for each
item after duplicating

```itemsType``` - specifies whether
```items``` is an array or object

```structureProps``` - an object that
gives us a list of the props we want to
pass to our ```Structure``` component
and the key we will use to get the value
of each prop from our items array. e.g,

```
{
    userName: 'fullName',
    date: 'last_updated_at'
}
```

#### Use

Create an object key-value pair in the props object,
using the props name passed through structureProps i.e. ```props[key]```

For example, our ```Structure``` component will dynamically become the expected component.

i.e. if we wanted our ```Structure``` component to dynamically call the ```App``` component, then, our ```Structure``` component will dynamically change from:

```<Structure />```
to
```<App />```

So, if our ```App``` component has a ```name``` prop,

```
<App name={...} />
```

as in our example above, and
we expect the value of ```name``` prop
to have a key of ```userName``` and value
of ```Timothy``` in the items object;

Then our code:

```
props[key] = item[1][structureProps[key]]
```

will dynamically result into

```
props['name'] = item[1][structureProps['userName']]
```

and our ```props``` object will have:

```
{
    name: 'Timothy'
}
```

and our ```Structure``` component will dynamically become

```
<App name="Timothy" />
```

## Usage/Examples

[Usage and examples](https://linktodocumentation)

## Authors

- [@abreel](https://www.github.com/abreel)

## Feedback

If you have any feedback, please reach out to us at swdeveloper@designsynchrony.com

## Contributing

Contributions are always welcome!

See `contributing.md` for ways to get started.

Please adhere to this project's `code of conduct`.

## License

MIT
