export class listTemplate {
    constructor(container) {
        this.container = container;
        // we don't have to do anything inside here, because when we have private in front of the property it automatically assign whatever value would pass in as the argument to a property on that instance
    }
    render(item, heading, pos) {
        const li = document.createElement('li');
        const h4 = document.createElement('h4');
        h4.innerText = heading;
        li.append(h4);
        const p = document.createElement('p');
        p.innerText = item.format(); // returnes formatting string
        li.append(p);
        if (pos === 'start') {
            this.container.prepend(li);
        }
        else {
            this.container.append(li);
        }
    }
}
/*
1. register a list container (ul) in the constructor
2. create a render method to render a new 'li' to the container
    --- accepts arguments: invoice or payment, a heading, a position
    --- create the html template(li,h4,p)
    --- add the 'li' template to the start/end of the list
*/ 
