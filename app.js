// heyyo we started 
// goal

// Modular 
// Extendable
// Performant
// Maintainable
// readable
// etc


// Metaphors?
    // to know about context and domain
    // mixed metaphors: procesor converter, etc
    // evolves/blurs over time
    // Hodge-podge of functionality ineach object



    class User {
        constructor(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
        }
    
        fullName() {
            return this.firstName + ' ' + this.lastName
        }
    }
    

    const user = new User('Bobby', 'Fischer')
    console.log(user.fullName());

    const user2 = {
        firstName: 'Bobby',
        lastName: "Fischer"
    };
    const fullName = (firstName, lastName) => [firstName, lastName].join(' ');

    console.log(fullName(user.firstName, user.lastName));

    // sorry  but here i willl use again user object;

    const joinWithSpace = (...args) => args.join(' ');
    console.log(joinWithSpace(user.firstName, user.lastName));
    
    console.log(joinWithSpace('a', 'b', 'c'));


    joinWithSpace(joinWithSpace('a', 'v'), 'c') // a v c

    joinWithSpace = joinable => jinable.join(' ');

    joinWithSpace([user.firstName, user.lastName]);


    const identit = a => a;
    
    const {Either} = requires('types')

    const identity = a => a;
    compose(f, g);

    Either.of(2).fold(identity, identity);


    // Highly generalized function.

    // composition
    // first decision => we will go with this
        // satisfy use cases
        // simple, understandable pieces
        // reuse

        // harder to change to implement
        // harder for users to compose

    // second decision
        // flexibility in implementation changes 
        // less use cases to support

        // flags, if/else
        // won't satisfy all cases
        // less reuse


// definition of the group

// 
// 
// 


// favor composable functions