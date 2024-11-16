export default function DetailPage({ product }) {
    return (
      <div>
        <h1>{product.name}</h1>
        <p>${product.price}</p>
        <p>{product.description}</p>
      </div>
    );
  }
  