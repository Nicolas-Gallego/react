import React from 'react'

class List extends React.Component {
    render() {
        return (
            <div>
                <p>List</p>
                <ul>
                    {this.props.items.map((items, index) => {
                        return (
                            <li key={index}> {items.name} : {items.price}€</li>
                        );
                    })}
                </ul>
            </div>
        )
    }
}

export default List;