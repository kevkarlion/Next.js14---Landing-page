interface CategoryProps {
    params: {
        categories: string[],
        searchParams?: string
    }
}



export default function Category(props: CategoryProps){
    
    
    
    const { categories } = props.params   
    const { searchParams } = props.params    
 
    console.log(categories);
    console.log('searchParams es...',searchParams);

    
    return (
        <h1>Categoria dinámica { categories } </h1>
    )
}