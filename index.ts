// Question ______________ 124

/* Define an object with a name property and a method to return its own name
const myObject = {
    name: "MyObject",
    getName: function() {
        return this.name;
    }
};

// Access the object's name using the getName method
console.log(myObject.getName()); // Output: MyObject


// Question ________________ 125


// Define an object with two properties and a method that interacts with both
const myOBJECT = {
    name: "MyOBJECT",
    count: 0,
    increaseCount: function() {
        this.count++; // Using this keyword to access and modify the count property
        console.log(`Count increased to ${this.count}`);
    }
};

// Invoke the method to increase the count property
myOBJECT.increaseCount();


// Question ______________ 126


// Define an object with a method containing a nested function
const myobject = {
    name: "Myobject",
    count: 0,
    increaseCount: function() {
        // Nested function inside the method
        function increment() {
            // In a browser environment, this will refer to the global object (window)
            // In Node.js, this would refer to the global object (global)
            // This behavior is different from the intended object reference
            // this.count++; // This would throw an error or not behave as expected
            
            // Workaround: Assign this to another variable in the outer function
            const self = this;
            self.count++;
            console.log(`Count increased to ${self.count}`);
        }
        // Invoke the nested function
        increment();
    }
};

// Invoke the method to increase the count property
myobject.increaseCount();*/


// Define an object with a name property and a method to return its own name
const myObject = {
    name: "MyObject",
    getName: function() {
        return this.name;
    }
};

// Access the object's name using the getName method
console.log(myObject.getName()); // Output: MyObject

// Define an object with two properties and a method that interacts with both
const myOBJECT = {
    name: "MyOBJECT",
    count: 0,
    increaseCount: function() {
        this.count++; // Using this keyword to access and modify the count property
        console.log(`Count increased to ${this.count}`);
    }
};

// Invoke the method to increase the count property
myOBJECT.increaseCount();

// Define an object with a method containing a nested arrow function
const myobject = {
    name: "Myobject",
    count: 0,
    increaseCount: function() {
        // Using an arrow function for the nested function
        const increment = () => {
            // Since arrow functions capture the lexical scope, this will refer to the object
            this.count++;
            console.log(`Count increased to ${this.count}`);
        };
        // Invoke the nested function
        increment();
    }
};

// Invoke the method to increase the count property
myobject.increaseCount();

