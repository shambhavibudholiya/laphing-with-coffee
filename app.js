const cal = (a,b,op) => {

    // ADD
    const add = (a,b) => {
        return a+b

    }
    
    // SUB
    const sub = (a,b) => {
return a-b
    }
    
    // DIV
    const div = (a,b) => {
        return a/b

    }
    
    
    // MUL
    const mul = (a,b) => {


        return a*b    }
    
    // SQ
    const sq = (a) => {
        return a*a

    }
    
    
    // >
    const grt = (a,b) => {
        if (a > b) return a
        else return b

    }
    
    
    // <
    const less = (a,b) => {
        if (a < b) return a
        else return b

    }
    
    
    
    // =
    const eq = (a,b) => a===b;
    
    
    // %
    const per = (a,b) => {
        return a/b*100

    }

    let result;
    if (op === 'add') result = add(a,b);
    if(op === 'sub')result = sub(a,b)
    if(op === 'div') result =div(a,b)
    if(op === 'mul')result = mul(a,b)
    if (op === 'sq') result =sq(a)
    if (op === 'eq') result =eq(a)
    if(op === 'greater')result = grt(a,b)
    if(op === 'less')result = less(a,b)
    if(op === 'percentage')result = per(a,b)

    return result
}



console.log("ADD -> ", cal(6,9,"add"));

console.log("SUB -> ", cal(6,9,"sub"));

console.log("DIVISION -> ", cal(6,9,"div"));

console.log("MULTIPLY -> ", cal(6,9,"mul"));

console.log("SQUARE-> ", cal(6,9,"sq"));

console.log("GREATER -> ", cal(6,9,"greater"));
 
console.log("EQUAL-> ", cal(6,9,"eq"));

console.log("LESS -> ", cal(6,9,"less"));

console.log("PERCENTAGE-> ", cal(6,9,"percentage"));