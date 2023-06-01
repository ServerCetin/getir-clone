import CardItem from "./cardItem";

function Cards() {

	const cards = [
		{
			title: 'Her siparişinize bir kampanya',
			description: 'Getir\'de vereceğiniz her siparişe uygun bir kampanya bulabilirsiniz.',
			image: '/assets/images/main-page/article/intro-in-minutes-1.svg'
		},
		{
			title: 'Dakikalar içinde kapınızda',
			description: 'Getir\'le siparişiniz dakikalar içinde kapınıza gelir.',
			image: '/assets/images/main-page/article/intro-in-minutes-2.svg'
		},
		{
			title: 'Binlerce çeşit mutluluk',
			description: 'Getir\'de binlerce çeşit arasından seçiminizi yapabilirsiniz.',
			image: '/assets/images/main-page/article/intro-in-minutes-3.svg'
		}
	]

	return (
		<div className="container mx-auto md:max-w-[1519px] md:px-32">
			<div className="grid mt-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
				{cards.map((card, key) => <CardItem key={key} card={card} />)}
			</div>
		</div>
	)
}

export default Cards