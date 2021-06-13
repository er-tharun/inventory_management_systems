import { Pipe, PipeTransform } from "@angular/core";
import { Product } from "./product";

@Pipe({
    name:'productsFilter'
})

export class productsFilter implements PipeTransform {
    transform(value:Product[], args:string):Product[]
    {
        let searchFilter: string = args ? args.toLocaleLowerCase() : null;
        return searchFilter ? value.filter(product => 
            product.productName.toLocaleLowerCase().startsWith(searchFilter) != false) : value;
    }
}