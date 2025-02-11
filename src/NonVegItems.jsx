import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./Store";
import { useState } from "react";
import './App.css'; // Assuming you will use an external CSS file for styles

function NonVegItems() {
  let nonVegItems = useSelector((state) => state.products.nonVeg);
  let dispatch = useDispatch();

  const [pageNumber, setPageNumber] = useState(0);
  const [searchQuery, setSearchQuery] = useState(''); // State for search input

  const itemsPerPage = 5; // Number of items per page

  // Filter items based on the search query (name or price)
  const filteredItems = nonVegItems.filter((item) => {
    const searchQueryLower = searchQuery.toLowerCase();
    return (
      item.name.toLowerCase().includes(searchQueryLower) || // Match name
      item.price.toString().includes(searchQueryLower)       // Match price
    );
  });

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  // Calculate the index of the items to be displayed for the current page
  const pageStartItemIndex = pageNumber * itemsPerPage;
  const pageEndItemIndex = pageStartItemIndex + itemsPerPage;
  const currentPageItems = filteredItems.slice(pageStartItemIndex, pageEndItemIndex);

  // Map through the current page items to display them horizontally
  const finalItems = currentPageItems.map((item, index) => (
    <div className="card" key={index}>
      <img src={item.image} alt={item.name} className="card-img" />
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <p className="card-price">${item.price}</p>
        <button
          className="btn-add-to-cart"
          onClick={() => dispatch(addToCart(item))}
        >
          Add to Cart
        </button>
      </div>
    </div>
  ));

  // Handle page changes
  const handlePage = (page) => {
    setPageNumber(page);
  };

  // Create pagination buttons
  const buttons = Array.from({ length: totalPages }, (_, index) => (
    <button
      key={index}
      className={`page-btn ${index === pageNumber ? 'active' : ''}`}
      onClick={() => handlePage(index)}
      disabled={index === pageNumber}
    >
      {index + 1}
    </button>
  ));

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="non-veg-items-container">
      <h1 className="title">Non Veg Items</h1>

      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search by name or price..."
          className="search-input"
        />
      </div>

      {/* Horizontal scrollable list */}
      <div className="card-container">
        {finalItems}
      </div>

      {/* Pagination controls */}
      <div className="pagination">
        <button
          className="page-btn"
          onClick={() => handlePage(pageNumber - 1)}
          disabled={pageNumber === 0}
        >
          Previous
        </button>
        {buttons}
        <button
          className="page-btn"
          onClick={() => handlePage(pageNumber + 1)}
          disabled={pageNumber === totalPages - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default NonVegItems;
