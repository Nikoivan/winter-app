import { FC } from 'react';
import { Metadata } from 'next';
import { cn } from '@bem-react/classname';

import Header from './_components/Header/Header';
import Main from './_components/Main/Main';
import Order from './_components/Order/Order';

const pageTitle = 'Поездки на Ай-Петри из Симферополя Севастополя Ялты и других городов Крыма';

const cnHome = cn('Home');
const cnHeader = cn('Header');
const cnMain = cn('Main');

export const metadata: Metadata = {
	title: pageTitle,
	description: 'Поездки на Ай-Петри - описание',
};

const Home: FC = () => (
	<>
		<Header title={pageTitle}>
			<>
				<h2 className={cnHeader('SecondaryTitle')}>С нами вы сможете</h2>
				<ul className={cnHeader('AdvantagesList', ['List'])}>
					<li className={cnHeader('AdvantagesItem')}>Заказать места для поездки на Ай-петри</li>
					<li className={cnHeader('AdvantagesItem')}>Индивидуальный заказ авто для поездки</li>
					<li className={cnHeader('AdvantagesItem')}>Получить в прокат зимнее снаряжение</li>
					<li className={cnHeader('AdvantagesItem')}>Воспользоваться услугами инструктора по зимним видам спорта</li>
				</ul>

				<form className={cnHeader('ContactForm')}>
					<button className={cnHeader('ContactBtn')}>Заказать обратный звонок</button>
				</form>
			</>
		</Header>
		<Main>
			<section className={cnMain('Section')}>
				<div className={cnMain('SectionHead')}>
					<h3 className={cnMain('SectionTitle')}>Как мы организовываем наши поездки на гору Ай-Петри?</h3>
				</div>
				<div className={cnMain('SectionContent')}>
					<ul className={cnMain('StagesList')}>
						<li className={cnMain('StageItem')}>
							Вы связываетесь с нами любым удобным вам способом
							<ul className={cnMain('ContactsList')}>
								<li className={cnMain('ContactItem')}>Через форму обратной связи </li>
								<li className={cnMain('ContactItem')}>Звонок по телефону</li>
								<li className={cnMain('ContactItem')}>Telegramm</li>
								<li className={cnMain('ContactItem')}>WhatsApp</li>
								<li className={cnMain('ContactItem')}>VK</li>
							</ul>
						</li>
						<li className={cnMain('StageItem')}>
							Получаете необходимую Вам информацию о наших услугах и ценах
							<ul className={cnMain('ServicesList')}>
								<li className={cnMain('ServiceItem')}>Трансфер</li>
								<li className={cnMain('ServiceItem')}>Прокат лыжи и сноубордов</li>
								<li className={cnMain('ServiceItem')}>Прокат одежды</li>
								<li className={cnMain('ServiceItem')}>Прокат санок и подобного снаряжения</li>
								<li className={cnMain('ServiceItem')}>Услуги инстуктора по сноубордингу или горным лыжам</li>
								<li className={cnMain('ServiceItem')}>Прокат/аренда снегоходов (предоставляется нашими партнерами)</li>
							</ul>
						</li>
						<li className={cnMain('StageItem')}>
							Организация бронирования
							<ul className={cnMain('OrdersList')}>
								<li className={cnMain('OrderItem')}>Оформляете заказ на трансфер</li>
								<li className={cnMain('OrderItem')}>Сообщаете, что Вам необходимо в прокат</li>
								<li className={cnMain('OrderItem')}>
									Получаете информацию о месте и времени встречи группы или сообщаете свое данные если заказываете авто
									индивидуально
								</li>
								<li className={cnMain('OrderItem')}>Подтверждаете заказ</li>
							</ul>
						</li>
						<li className={cnMain('StageItem')}>
							В указанный день и указанное время встречаетесь с организатором для оказания услуги
						</li>
						<li className={cnMain('StageItem')}>
							У вас остались вопросы? Вы можете задать его в чате, форме обратной связи, по телефону или любым другим удобным
							Вам способом!
						</li>
					</ul>
				</div>
				<div className={cnMain('Footer')}>
					<Order />
				</div>
			</section>
			<section className={cnMain('Section')}>
				<div className={cnMain('SectionHead')}>
					<h3 className={cnMain('SectionTitle')}>Какой трансфер мы можем предоставить?</h3>
				</div>
				<div className={cnMain('SectionContent')}>
					<p className={cnMain('Text')}>
						Поскольку дорога на Ай-Петри в зимний период как правило представляет собой почти отсутствие дороги, или в лучше
						случае обледеневшую и почищенную дорогу - мы организовываем трансфер на Ай-Петри исключительно полноприводным
						траспортом, вместимостью 4-7 мест в авто.
					</p>
					<p className={cnMain('Text')}>
						Мы организовываем трансфер 2 вариантами. Групповой - когда вы берете нужное Вам количество мест в авто.
						Индивидуальный - когда вы арендуете целое авто под нужное Вам количество мест. В чем отличия
					</p>
					<ul className={cnMain('TypesList')}>
						<li className={cnMain('TypeItem')}>
							<span className={cnMain('TypeText')}>
								Групповой - при таком варианте, трансфер организовывается как правило 6 местными авто. Стоимость одного места
								2000 рублей с человека (Симферополь, Севастоль, Бахчисарай, Ялта) Стоимость трансфера из других городов Крыма вы
								можете узнать в полном перечне услуг по ссылке `ССЫЛКА`. Посадка на задние места предусматривает скидку 25% и
								составит 1500рублей с человека. Стоимость детских мест такая же как и для взрослого, так как каждый ребенок едет
								на отдельном месте. Посадка детей на руки - категорически запрещена согласно ПДД РФ.
							</span>
							<span className={cnMain('TypeText')}>
								Отправление происходит из устрановленной точки сбора в утреннее время 6.00 - 8.30. В городе Севастополь от 5-го
								километра или Северная сторона пл. Захарова (точное место сообщаем по телефону). Симферополь - точки места сбора
								оговариваются с оператором (москольцо, жд вокзал, центр, марьино, севастопольская).
							</span>
						</li>
						<li className={cnMain('TypeItem')}>
							<span className={cnMain('TypeText')}>
								Индивидуальный - предусматривает заказ авто для все вашей компании исходя из количества пассажирских мест в
								удобное Вам время. Однако обращаем внимание, что в зимний период при выпадении обильных осадков ввиде снего 50+
								см, движение по дороге Соколиное-Ялта, через Ай-Петри может быть ограничено и время для проезжа будет ограничего
								(в таком случае оператор сообщит Вам об этом).
							</span>
							<span className={cnMain('TypeText')}>
								Стоимость:
								<ul className={cnMain('List')}>
									Симферополь, Севастоль, Бахчисарай, Ялта. Стоимость трансфера из других городов Крыма вы можете узнать в полном
									перечне услуг по ссылке `ССЫЛКА`.
									<li>Авто 4 места - 9 000 рублей. Mitsubishi Pajero Sport, Mitsubishi L200, Nissan Navara,</li>
									<li>Авто 6 мест - 11 000 рублей. Mitsubish Pajero Wagon, Toyota Land Cruiser (Prado)</li>
									<li>Авто 7 мест - 13 000 рублей. Mitsubishi Delica, Toyota Hiace</li>
									<li>
										Трансфер от Вашего адреса и обратно от 500 до 1000 рублей. В зависимости от вашего точного местоположения в
										городе.
									</li>
								</ul>
							</span>
						</li>
					</ul>
				</div>
			</section>
			<section className={cnMain('Section')}>
				<div className={cnMain('SectionHead')}>
					<h3 className={cnMain('SectionTitle')}>Прокат снаряжения</h3>
				</div>
				<div className={cnMain('SectionContent')}>
					<ul className={cnMain('SectionListItems')}>
						<li className={cnMain('SectionListItem')}>
							Прокат сноубордов - 1000 рублей комплект (сноуборд, ботинки, крепления)
						</li>
						<li className={cnMain('SectionListItem')}>Прокат зимней одежды - куртки, штаны. От 400р за единицу</li>
						<li className={cnMain('SectionListItem')}>Тюбинг (плюшка) - 500р</li>
						<li className={cnMain('SectionListItem')}>Защита (шлем, наколенники, налокотники) - от 500р</li>
						<li className={cnMain('SectionListItem')}>Горнолыжная маска - 200р</li>
					</ul>
				</div>
			</section>
		</Main>
	</>
);

export default Home;
