# Instantiation
- var x = new Object()
- var x = {}
- var x = new X()
- var x = Object.create(oldX)

# Inheritance
## Prototypes
- "prototype-based language"
 - each object instance has a prototype property, but each object constructor also has a prototype property
  - Note: A Function (e.g. constructor) is also an object, hence it can have methods
 - think of the constructor as a different object.
  - var x = new Person()
   - x is an empty object that inherits from Person, which inherits from Object
 - `__proto__` property
  - deprecated
 - `Object.getPrototypeOf(obj)`
 - prototype property on constructor functions
- userDefinedClass -> prototype1 -> ... -> prototypeN -> Object
- inherited items are defined on class' prototype property
### Chains
