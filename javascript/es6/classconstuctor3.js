class institute{
    industry="software";
    constructor(name,area,state,country){
        this.institute_name = name;
        this.institute_area = area;
        this.institute_state = state;
        this.institute_country = country;
    }
}
let x = new institute("prostack","bangalore","karnataka","india");
let a = new institute("colormoon","vizag","andhrapradesh","india");
console.log(x);
console.log(a);