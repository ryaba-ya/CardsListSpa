import React from 'react'
//Не забываем импортировать компонент
import Card from '../Card/Card';


function CardList() {
	return (
		<React.Fragment>
			<Card
				title="Зимние ботинки"
				price={99}
				description="Такие только у нас"
				imgLink="https://shop/winter_boots.jpg"
			/>
			<Card
				title="Пляжные тапки"
				price={23}
				description="Надеюсь, пригодятся"
				imgLink="https://shop/slippers.jpg"
			/>
			<Card
				title="Праздничные туфли"
				price={85}
				description="Теперь и в чёрном цвете"
				imgLink="https://shop/shoes.jpg"
			/>
		</React.Fragment>
	);
}

export default CardList;