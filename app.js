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

    // joinWithSpace = joinable => joinable.join(' ');

    joinWithSpace([user.firstName, user.lastName]);


    // const identit = a => a;
    
    // // const {Either} = requires('types')

    // const identity = a => a;
    // compose(f, g);

    // Either.of(2).fold(identity, identity);


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
// // Definition. A group is a set G along with some operation · that takes in two elements
// and outputs another element of our group, such that we satisfy the following properties:
// • Identity: there is a unique identity element e ∈ G such that for any other g ∈ G, we
// have e · g = g · e = g.
// • Inverses: for any g ∈ G, there is a unique g
// −1
// such that g · g
// −1 = g
// −1
// g = e.
// • Associativity: for any three a, b, c ∈ G, a · (b · c) = (a · b) · c.
// 


// favor composable functions



// shapes // normalize effect types


// ---> semi group

let a =1+2+(3+6)
a = (1+2)+3+6
// addition is associative


 a = 2 * (5 * 2)

// multiplication is also closed and associative

// closed  is when we do an operation if we get the result as the same type as the two arguments this operation si closed

// closed + associative = parallel

a = true && true && false
a = true || true || false

// // these are also associative 

// [1, 2, 3] ^ [2, 5, 3] ^ [5, 3] // --> this is also associative
// [1, 2, 3] v [2, 5, 3] v [5, 3] // --> this is also associative



// <*>
// > < 

1 > 3 > 7


//

const Sum = (x) => 
    ({
        x,
        concat: other =>
            Sum(x + other.x)
    });
const Product = (x) => 
    ({
        x,
        concat: other =>
            Product(x * other.x)
    });
const any = (x) => 
    ({
        x,
        concat: other =>
            any(x|| other.x)
    });

    const res = Sum(3).concat(Sum(5)) // SUm(8)
    const prod = Product(3).concat(Product(5)) // SUm(8)
    const bool = any(true).concat(any(false));
    console.log(res);
    console.log(prod);
    console.log(bool);
    // string
    console.log('hi'.concat('!'));


    // Monoid = SemiGroup + Identity
    // am using product function above 
    Product.empty = () => Product(1);
    console.log(Product.empty().concat(Product(10)));

    // lets go for sum. 
    Sum.empty = () => Sum(0);

    any(true).concat(any(false)); //

    const sum1 = [].map(Sum).reduce((acc, n) => acc.concat(n), Sum.empty()); // if we give valus give an sum, we will just get the sums
    console.log(sum1); // else it just blows up, if we initializ the reduce we get smth else it shows an error