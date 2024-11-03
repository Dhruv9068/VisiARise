import { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import products from '../utils/products'; // Only import products.js now
import Navbar from './Navbar';
import Footer from './Footer';

const Shopping = () => {
  const [filters, setFilters] = useState({
    priceRange: { min: 0, max: 2000 },
    rating: 0,
    brand: [],
    color: [],
    weight: '',
    material: '',
    stockAvailable: true,
    category: '',
  });

const handleFilterChange = (filterType, value) => {
    setFilters({ ...filters, [filterType]: value });
  };

  const handleMultiSelectChange = (filterType, value) => {
    setFilters((prevFilters) => {
      const updatedValues = prevFilters[filterType].includes(value)
        ? prevFilters[filterType].filter((item) => item !== value)
        : [...prevFilters[filterType], value];
      return { ...prevFilters, [filterType]: updatedValues };
    });
  };

  // Now using only products.js
  const filteredProducts = products.filter((product) => {
    return (
      product.price >= filters.priceRange.min &&
      product.price <= filters.priceRange.max &&
      product.rating >= filters.rating &&
      (filters.brand.length === 0 || filters.brand.includes(product.brand)) &&
      (filters.color.length === 0 || filters.color.includes(product.color)) &&
      (filters.weight === '' || product.weight === filters.weight) &&
      (filters.material === '' || product.material === filters.material) &&
      (filters.stockAvailable ? product.stock > 0 : true) &&
      (filters.category === '' || product.type === filters.category)
    );
  });

 

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex bg-gray-900 text-white relative">
        {/* Left Sidebar for Filters */}
        <div className="w-1/5 bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6">Filter by Criteria</h2>
          <div className="space-y-6">
            {/* Price Range */}
            <label className="block">
              <span className="block text-lg">Price Range:</span>
              <div className="flex justify-between">
                <input
                  type="range"
                  min="0"
                  max="2000"
                  value={filters.priceRange.min}
                  onChange={(e) => handleFilterChange('priceRange', { ...filters.priceRange, min: parseInt(e.target.value) })}
                  className="w-full mt-2 bg-gray-700 rounded-lg cursor-pointer"
                />
                <input
                  type="range"
                  min="0"
                  max="2000"
                  value={filters.priceRange.max}
                  onChange={(e) => handleFilterChange('priceRange', { ...filters.priceRange, max: parseInt(e.target.value) })}
                  className="w-full mt-2 bg-gray-700 rounded-lg cursor-pointer"
                />
              </div>
              <span className="block mt-2">Price: ${filters.priceRange.min} - ${filters.priceRange.max}</span>
            </label>

            {/* Rating Filter */}
            <label className="block">
              <span className="block text-lg">Rating:</span>
              <div className="flex space-x-2 mt-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    className={`text-2xl ${filters.rating >= star ? 'text-yellow-400' : 'text-gray-400'} hover:scale-110 transform transition-transform duration-300`}
                    onClick={() => handleFilterChange('rating', star)}
                  >
                    ⭐
                  </button>
                ))}
              </div>
            </label>

            {/* Color Filter */}
            <label className="block">
              <span className="block text-lg">Color:</span>
              <select
                multiple
                className="w-full mt-2 bg-gray-700 p-2 rounded-lg focus:outline-none focus:bg-gray-800 transition-colors duration-300"
                onChange={(e) => handleMultiSelectChange('color', e.target.value)}
              >
                <option value="Black">Black</option>
                <option value="Brown">Brown</option>
                <option value="Gray">Gray</option>
                <option value="Silver">Silver</option>
                <option value="White">White</option>
              </select>
            </label>

            {/* Category Dropdown */}
            <label className="block">
              <span className="block text-lg">Category:</span>
              <select
                className="w-full mt-2 bg-gray-700 p-2 rounded-lg focus:outline-none focus:bg-gray-800 transition-colors duration-300"
                onChange={(e) => handleFilterChange('category', e.target.value)}
              >
                <option value="">All Categories</option>
                <option value="Sofa">Sofas</option>
                <option value="Table">Tables</option>
                <option value="Storage">Storage</option>
                <option value="Decor">Decor</option>
                <option value="Misc">Misc</option>
                <option value="Mobiles">Mobiles</option>
                <option value="Laptops">Laptops</option>
                <option value="Watches">Watches</option>
              </select>
            </label>

            {/* Clear Filters Button */}
            <button
              onClick={() => setFilters({
                priceRange: { min: 0, max: 2000 },
                rating: 0,
                brand: [],
                color: [],
                weight: '',
                material: '',
                stockAvailable: true,
                category: '',
              })}
              className="bg-red-500 text-white p-2 rounded-lg mt-4 w-full hover:bg-red-600 transition-colors duration-300"
            >
              Clear Filters
            </button>
          </div>
        </div>

        {/* Products Display Section */}
        <div className="flex-1 p-6">
          <h2 className="text-2xl font-bold mb-6">Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <Link key={product.id} to={`/product/${product.id}`} className="bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover mb-4 rounded-lg" />
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-gray-400">${product.price.toFixed(2)}</p>
                <p className="text-yellow-400">Rating: {product.rating} ⭐</p>
              
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Shopping;
