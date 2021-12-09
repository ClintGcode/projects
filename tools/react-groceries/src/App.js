import React, { useState, useEffect } from 'react';
import './index.css';


const App = () => {

    const [ items, setItems ] = useState(
        [
			{ itemName: 'water', brand: 'poland spring', units: 1, quantity: 1, isPurchased: true },
			{ itemName: 'orange juice', brand: 'tropicana', units: 1, quantity: 1, isPurchased: true },
			{ itemName: 'juice', brand: 'caprisun', units: 6, quantity: 2, isPurchased: true }
		]
    );

	const [inputValue, setInputValue] = useState({ isPurchased: true });

	const handleChange = (event) => {
		const value = event.target.value;

		setInputValue({
			...inputValue,
			[event.target.name]: value,
		})

		// console.log(event.target.id, event.target.value)
		// console.log(inputValue);
	}

	const handleSubmit = (event) => {
		event.preventDefault();

		const newItem = inputValue;
		const newItems = [newItem, ...items];

		setItems(newItems);
		setInputValue({ itemName: '', brand: '', units: '', quantity: '', isPurchased: true });

		console.log(newItems);
	}

	const handleDelete = (event) => {
		
		setItems(!items.isPurchased);

	}

	return (
		<div className="container">
			<div className="header">

				{/* Header */}
				<div className="header-title">
					<h1>üShopper</h1>
					<h4>The Grocery List You Won't Forget</h4>
				</div>

				{/* Submission Form */}
				<div className="form-container">
					<form onSubmit={(event)=> handleSubmit(event)} onChange={(event)=> handleChange(event)}>
						<h3>Remeber to pick up</h3>
						<label htmlFor="item" value={items.name}></label>
						<input type="text" value={inputValue.itemName} name="itemName" id="item" placeholder="Item" style={{textAlign:"center"}}></input>
						
						<label htmlFor="brand" value={items.brand}></label>
						<input type="text" value={inputValue.brand} name="brand" id="brand" placeholder="Brand" style={{textAlign:"center"}}></input>
						
						<label htmlFor="units" value={items.units}></label>
						<input type="number" value={inputValue.units} name="units" id="units" placeholder="Units" style={{textAlign:"center"}}></input>
						
						<label htmlFor="quantity" value={items.quantity}></label>
						<input type="number" value={inputValue.quantity} name="quantity" id="quantity" placeholder="Quantity" style={{textAlign:"center"}}></input>
						
						<label htmlFor="addItem" value={items.isPurchased}></label>
						<input type="submit" value="Add to cart"></input>
					</form>
				</div>

				{/* Grocery List */}
				<div className="groceryList">
					<h3 className="listName">Grocery List</h3>
					{items.map((item, index) => item.isPurchased ? (
						<form>
								<label htmlFor="item" value={items.name}></label>
								<input id="item" placeholder="Item" style={{textAlign:"center"}} name="itemName" value={items[index].itemName}></input>

								<label htmlFor="brand" value={items.brand}></label>
								<input id="brand" placeholder="Brand" style={{textAlign:"center"}} name="brand" value={items[index].brand}></input>
								
								<label htmlFor="units" value={items.units}></label>
								<input id="units" placeholder="Units" style={{textAlign:"center"}}name="units" value={items[index].units}></input>
								
								<label htmlFor="quantity" value={items.quantity}></label>
								<input id="quantity" placeholder="Quantity" style={{textAlign:"center"}} name="quantity" value={items[index].quantity}></input>
								
								<label htmlFor="removeItem" value={items.isPurchased}></label>
								<button id="removeItem" onClick={handleDelete}>remove</button>  
						</form>
					) : (
						''
					))}
				</div>

			</div>	
		</div>
	)
};

export default App;