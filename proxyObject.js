const target = {
    name:'hello',
    name2:'everyone'
}

const handler = {
    get(target, prop, reciever){
        return 'world';
    }
}

const handler1 = {
    get(target, prop, reciever){
        if(prop === 'name'){
            return 'world'
        }
    return Reflect.get(...arguments);
    }
}

const proxy = new Proxy(target, handler1);

console.log(proxy.name2)
console.log(proxy.name)