import { Component } from 'react';

export default class DuplicateItems extends Component {
    constructor(props) {
        super(props);

        this.mapServices = this.mapPosts.bind(this);
    }

    /** Documentation for better understanding
     *
     * "items" - the objects (or array) we would be duplicating
     * "Structure" - a component that has the structure we want to have for each item after duplicating
     * "itemsType" - specifies whether "items" is an array or object
     * "structureProps" - an object that gives us a list of the props we want to
     * pass to our "Structure" component and the key we will use to get the value of each prop from our items array. e.g, {'name': 'fullName', 'date': 'last_updated_at'}
     *
     *
     *
     * Create an object key-value pair in the props object,
     * using the props name passed through structureProps i.e.
     *
     *
     **** props[key]
        *
        *
        *
        * This function looks to set the value of the key-value pair to the expected value
        * in the "items" object.
        *
        *
        * For example, our "Structure" component will dynamically become the expected
        * component.
        * i.e. if we wanted our "Structure" component to dynamically
        * call the "App" component, then, our "Structure" component will dynamically
        * change from:
        *
        *
        *
        * *** <Structure />
        * *** to
        * *** <App />
        *
        *
        *
        * So, if our "Structure" component has a "name" prop,
        *
        *
        *
        ***** <App name={...} />
        *
        * as in our example above,
        *
        *
        *
        *  and
        * we expect the value of "name" prop to have a key of "userName" and value
        * of "Timothy" in the items object;
        * Then our code:
        *
        *
        *
        ***** props[key] = item[1][structureProps[key]]
        *
        *
        *
        * will dynamically result into
        *
        *
        *
        **** props['name'] = item[1][structureProps['userName']]
        *
        *
        *
        * and our object will have:
        *
        *
        *
        **** {
        ****      name: 'Timothy'
        **** }
        *
        *
        *
        * and our "Structure" component will dynamically become
        *
        *
        *
        **** <Structure name="Timothy" />
        *
        *
        *
        * and we will dynamically have
        *
        *
        *
        **** <App name="Timothy" />
    *
    *
    */

    mapPosts(items, Structure, itemsType = "object", structureProps, functionProps) {
        // create result array
        let result = [];

        // if items contains objects
        let itemsArray = itemsType === "object" ? Object.entries(items) : items;

        // loop through items
        itemsArray.map((item) => {
            // create props object for "Structure" component
            // set object to store props
            let props = {};

            // if we passed a structure prop loop through structureProps and get the name of each needed prop
            if (structureProps) {
                // alert('structure prop')
                Object.keys(structureProps).map((key) => {
                    // if prop structure is an object
                    if (structureProps[key] === Object(structureProps[key])) {
                        // extract key and value from the key:value pair
                        let secondKey = Object.keys(structureProps[key])[0];
                        let value = Object.values(structureProps[key])[0];
                        // if value is an object
                        if (value === Object(value)) {
                            // extract value from the key:value pair
                            let innerValue = Object.values(structureProps[key])[0];
                            // create prop:value pair
                            return props[key] = item[1][structureProps[key]][value][innerValue];
                        } else {
                            return props[key] = item[1][secondKey][key];
                        }
                    } else {
                        // return prop value based on how it's defined in the items object
                        if (item[1][structureProps[key]]) {
                            return props[key] = item[1][structureProps[key]];
                        } else if (item[structureProps[key]]) {
                            return props[key] = item[structureProps[key]];
                        } else {
                            return props[key] = item[1];
                        }
                    }
                })
            }

            // return component instance with it's props
            return result.push(<Structure {...props} {...functionProps}/>)
        })

        // return looped result
        return result;
    }


    render() {
        // set the type for items to be duplicated
        const itemsType = this.props.itemsType ? this.props.itemsType : 'object';
        const functionProps = this.props.functionProps ? this.props.functionProps : '';
        const structureProps = this.props.structureProps ? this.props.structureProps : '';
        return (
            this.mapPosts(this.props.items, this.props.structure, itemsType, structureProps, functionProps)
        )
    }
}
