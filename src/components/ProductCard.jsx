export default function ProductCard({id, title, price, image}) {

    return (

        <div  >
            <h3 className="upperCase py-10">{title}</h3>

            <img className="card-img" src={image} alt={title} />

            <div className="flex-center gap mb-20">
                {price}
            </div>
           
        </div>

    );
}