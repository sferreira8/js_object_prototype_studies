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


function Pastry (type,flavor,levels,price,occasion){
	this.type=type;
	this.flavor=flavor;
	this.levels=levels;
	this.price=price;
	this.occasion=occasion;

	
}
