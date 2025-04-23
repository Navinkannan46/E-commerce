import { Products } from '../../components/Products'
type ProductType = {
    id: number;
    name: string;
    price: number;
    category: string;
    image: string;
    wishlist?: boolean;
};
const page = () => {
    const product: ProductType[] = [
        { id: 1, name: "Adidas", price: 1222, category: "Men", image: '/landing-img.png' },
        { id: 2, name: "Nike", price: 1100, category: "Women", image: '/landing-img.png' },
        { id: 3, name: "Puma", price: 950, category: "Kids", image: '/landing-img.png' },
        { id: 4, name: "Reebok", price: 980, category: "Men", image: '/landing-img.png' },
        // Add more products here
    ];

    return (
        <div>
            <h1 className='text-center my-4 p-4 text-3xl -'>My Whishlist</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-around px-8  ">
                {product.map(res => (
                    <div key={res?.id}>
                        <Products wishlist={true} />
                    </div>
                ))}
            </div>

        </div>
    )
}

export default page