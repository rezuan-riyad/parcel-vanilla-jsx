/** @jsx dom */
import dom from '../../lib/dom'

const cartTracker = () => {
  let state = [];
  return (item) => {
    if (!item) return state
    state.push(item)
    return state
  }
}

const addProduct = cartTracker()

const handleCartItem = (product) => {
  // const addedProducts = addProduct(product)
  document.getElementById('cart-items').appendChild(
    <div sx={{ display: "flex", justifyContent: "space-between" }}>
      <p sx={{ width: "60%" }}>{product.name}</p>
      <p sx={{ width: "20%" }}>1</p>
      <p sx={{ width: "20%" }}>${product.price}</p>
    </div>
  )
}

const productsList = [
  { id: 1, name: "Product One", price: "250", qty: 0 },
  { id: 2, name: "Product Two", price: "350", qty: 0 },
  { id: 3, name: "Product Three", price: "179", qty: 0 }
]

const Products = (
  <section
    className="container"
    sx={{
      display: "flex", flexDirection: "row",
      justifyContent: "space-between"
    }}>
    <div
      sx={{
        width: "60%"
      }}>
      <h1>Products</h1>
      {productsList.map(item =>
        <div sx={{
          padding: "1rem", border: "1px solid lightgray",
          display: "inline-grid", width: "45%", marginRight: "1rem",
          marginBottom: "1rem"
        }}>
          <h3>{item.name}</h3>
          <p>Price: ${item.price}</p>
          <button
            sx={{ padding: ".25rem 1rem", fontSize: "14px" }}
            onClick={() => handleCartItem(item)}>
            Add To Cart
          </button>
        </div>
      )}
    </div>
    <div sx={{ padding: "0 1rem", width: "30%" }}>
      <h1>Cart Items</h1>
      <hr />
      <div id="cart-items">

      </div>
    </div>
  </section>
)

export default Products