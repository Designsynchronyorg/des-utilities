
# DES Utilities
DES - Design Synchrony

Provides reusuable components for development, together with easier, faster and simpler code base.
## Installation

Install with npm

```bash
npm i des-utilities
```
## Features

- Simpler binding in classes (BindThis)
- Easier state lifting (Call parent method)
- Duplicate items and map items in an object or array into multiple component classes
- Dynamic Component


## Usage/Examples



### Bind This

Simplifies the method binding process in classes (react or any language that uses similar binding methods).

(For now, it works with react js at the moment and contributions will be appreciated)
For example, this:

```react
import React from 'react';
import { BindThis } from 'des-utilities';

export default class NewClass extends React.Component {
    constructor(props){
        super(props);

        this.function1 = this.function1.bind(this);
        this.function2 = this.function2.bind(this);
        this.function3 = this.function3.bind(this);
    }
    ...
}
```

becomes
```
import React from 'react';
import { BindThis } from 'des-utilities';

export default class NewClass extends React.Component {
    constructor(props){
        super(props);

        BindThis(this, ['function1', 'function2', 'function3']);
    }
    ...
}

```



### Call Parent Method
Easy state lifting in React js (especially).

Pass method name to child in react
```javascript
...
import Rename from './rename';
import { BindThis } from 'des-utilities';
import { CallParentMethod } from 'des-utilities';
...

class parent extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            name: ''
        }

        BindThis(this, [changeName]);
    }

    function changeName(name){
        ...
    }

    render () {
        return (
            <Rename changeName={this.changeName} />
        )
    }
    ...
}




class child extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            name: ''
        }

        BindThis(this, [changeName]);
    }

    function changeName(){
        // call changeName method passed to child as prop and pass "name" as prop. props could be of any type
        CallParentMethod(this, this.props.changeName, this.state.name)
        ...
    }

    render () {
        return (
            <input type="text" value={this.state.name} />
            <button ... onClick={this.changeName} />
        )
    }
    ...
}
```


### Duplicate items
Easily loop through an array or object, and render dynamic component,
passing props (that are variables) through structureProps, as an object
and function props (props that passes a function to the child) through functionProps.

Check documentation for details.

```javascript
...
import { DuplicateItems } from 'des-utilities';
import GridItem from './components/GridItem';

export default class grid extends Component {
    render() {
        const obj = {
            name: 'abbey',
            description: 'a programmer by nature',
            image: './assets/img.jpg'
        }
        return (
            <>
                <h2 className="text-center">Loop through list</h2>
                <div className="grid gap-4 mt-6 md:mt-11 ">
                    <DuplicateItems items={obj} structure={GridItem} structureProps={{ name: 'name', description: 'description', image: 'image' }} />
                </div>
            </>
        )
    }
}
...
```

### Dynamic Component
Allow you to dynamically call components

The objective was to allow easy use of react router ```useParam()``` hook in a class component, but can be used to dynamically call component
```javascript
...
import { DynamicComponent } from 'des-utilities';

...

DynamicComponent(ComponentName)
...

```
will return
```
<ComponentName />
```
with it's props and url parameters from the current route, accessible at ```props.params```, as used below
```
let parameter1 = this.props.params.parameter1;
let parameter2 = this.props.params.parameter2;
let parameter3 = this.props.params.parameter3;
```

and a route param, using react-router-dom can be accessed like below



url parameters in routes
```javascript
...
<Route path="/profile/:id" element={<Profile />} />

...
https://www.testdomain.you/profile/1
```

can be accessed as
```javascript
...
import React from 'react';
import { DynamicComponent } from 'des-utilities';
import HttpRequest from 'des-http-processor';
import { ProcessHttpMessage } from 'des-http-processor';
...

class Profile extends React.Component {
    constructor(props){
        super(props);

        HttpRequest()
        this.state = {
            user: {}
        }

        // fetch user
        HttpRequest('backend.testdomain.you/user', 'get', {user_id: this.props.params.userId}, ProcessHttpMessage).then((response) => {
            this.setState({
                user: response.data
            });
        }, (error) => {

            console.log(error.description)
        });
    }

    render() {
        return (
            ...
        );
    }
}

export default dynamicComponent(Profile);
```

Note: error message is extracted by the ```ProcessHttpMessage``` function passed to the ```HttpRequest``` function
## Authors

- [@abreel](https://github.com/abreel)


## Feedback

If you have any feedback, please reach out to us at swdeveloper@designsynchrony.com


## Contributing

Contributions are always welcome!

See `contributing.md` for ways to get started.

Please adhere to this project's `code of conduct`.


## License

[MIT](https://choosealicense.com/licenses/mit/)


## Documentation

[Documentation](https://github.com/designsynchrony/des-utilities/blob/main/DOCUMENTATION.md#documentation)
