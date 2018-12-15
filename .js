
//Object.create function to create new objects
var Pastry={
	inicializa: function(type,flavor,levels,price,occasion){
		this.type=type;
		this.flavor=flavor;
		this.levels=levels;
		this.price=price;
		this.occasion=occasion;
	}
	

	describe:function() {
	var description= "The" + this.type+ "is a"+ this.occasion+ "pastry, has a" + this.flavor + "flavor,"
	 + this.levels+ "layers(s), and costs"+ this.price+ ".";
	return description;
	}

	bake:function() {
var baked = "The "+ this.flavor + this.type + " was placed in the oven. It's done!";

return baked;
		}
};

var muffin= Object.create(Pastry);
muffin.inicializa ("muffin","blueberry",1, "$2","breakfast");


var cake = Object.create(Pastry);
cake.inicializa("cake","vanilla",3,"$10","birthday");


console.log(muffin.describe());
console.log(cake.describe());
console.log(muffin.bake());
console.log(cake.bake());

//constructor function 
function Pastry (type,flavor,levels,price,occasion){
	this.type=type;
	this.flavor=flavor;
	this.levels=levels;
	this.price=price;
	this.occasion=occasion;

//method calls the prototype
 Pastry.prototype.describe= function(){
 	var description= "The " + this.type+ " is a "+ this.occasion+ " pastry, has a " + this.flavor + " flavor,"
	 + this.levels + " layers(s), and costs "+ this.price+ ".";
	return description;
	}	

}

//creating new objects
var cake = new Pastry("cake","vanilla",3,"$10","birthday");
var muffin= new Pastry("muffin","blueberry",1, "$2","breakfast");
console.log(cake);
console.log(cake.describe());

//local and global scopes 
var foo = "bar";

function baz() {
  console.log(foo);
  console.log(this.foo);
}

baz();
// > "bar"
// > "bar"


function baz() {
  var foo = "bar";

  console.log(foo);
  console.log(this.foo);
}

baz();
// > "bar"
// > undefined




