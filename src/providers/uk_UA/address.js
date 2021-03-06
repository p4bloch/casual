var provider = {
	city_prefixes: ['місто'],

	region_suffixes: ['область'],

	street_prefixes: [
		'вул.', 'просп.', 'бул.', 'пров.'
	],

	zip_formats: ['#####'],

	countries: [
		'Україна', 'Російська Федерація', 'США', 'Канада', 'Австралія', 'Австрія',
		'Азербайджан', 'Аландські острови', 'Албанія', 'Алжир', 'Американські острови Самоа', 'Ангілья',
		'Ангола', 'Андорра', 'Антарктика', 'Антигуа і Барбуда', 'Аргентина', 'Вірменія',
		'Аруба', 'Афганістан , Ісламська Республіка', 'Багами', 'Бангладеш', 'Барбадос', 'Бахрейн',
		'Беліз', 'ілорусі', 'Бельгія', 'Бермудські Острови', 'Болгарія', 'Болівія',
		'Боснія і Герцеговина', 'Ботсвана', 'Бразилія', 'Британська територія Індійського океану',
		'Бруней Даруссалам', 'Буркіна Фасо', 'Бурунді', 'Бутан', 'Вануату',
		'Великобританія', 'Угорщина', 'Венесуела', 'Віргінські о-ви, Великобританія', 'Віргінські о-ви, США',
		'Східний Тимор', 'В\'єтнам', 'Габон', 'Гаїті', 'Гайана',
		'Гамбія', 'Гана', 'Гваделупа', 'Гватемала', 'Гвінея',
		'Гвінея -Біссау', 'Німеччина', 'Гібралтар', 'Гонгконг', 'Гондурас',
		'Держава - місто Ватикан', 'Гренада', 'Гренландія', 'Греція', 'Грузія',
		'Гуам', 'Данія', 'Джерсі', 'Джібуті', 'Домініканська Республіка',
		'Єгипет', 'Замбія', 'Західна Сахара', 'Зімбабве', 'Ізраїль',
		'Індія', 'Індонезія', 'Йорданія', 'Ірак', 'Іран',
		'Ірландія', 'Ісландія', 'Іспанія', 'Італія', 'Ємен',
		'Казахстан, Республіка', 'Кайманові Острови', 'Камбоджа', 'Камерун', 'Катар',
		'Кенія', 'Кіпр', 'Кірібаті', 'Китай', 'Кокосові острови',
		'Колумбія', 'Коморські Острови', 'Конго ,  Демократична Республіка', 'Конго ,  Республіка', 'Коста -Ріка', 
		'Кот- д\'Івуар', 'Куба', 'Кувейт', 'Киргизстан', 'Лаос', 
		'Латвія', 'Лесото', 'Ліберія', 'Ліван', 'Лівія', 
		'Литва', 'Ліхтенштейн', 'Люксембург', 'Маврикій', 'Мавританія', 
		'Мадагаскар ,  Республіка', 'Майотта', 'Макао', 'Македонія ,  Республіка', 'Малаві', 
		'Малайзія', 'Малі', 'Мальдіви', 'Мальта', 'Марокко', 
		'Мартиніка', 'Маршаллові Острови', 'Мексика', 'Дрібні віддалені острови США', 'Мозамбік', 
		'Молдова', 'Монако', 'Монголія', 'Монтсеррат', 'М\'янма', 
		'Намібія', 'Науру', 'Непал', 'Нігерія', 'Нігерія', 
		'Нідерландські Антильські острови', 'Нідерланди', 'Нікарагуа', 'Ніуе', 'Нова Зеландія', 
		'Нова Каледонія', 'Норвегія', 'Об\'єднані Арабські Емірати', 'О. Гернсі', 'Оман', 
		'Острови Зеленого Мису', 'Острови Кука', 'Острови Теркс І Кайкос', 'острови Уолліс Футуна', 'Острови Херд і Макдональд', 
		'Острів Буве', 'Острів Домініка', 'Острів Мен', 'Острів Норфолк', 'Острів Святого Мартіна', 
		'Острів Святої Єлени', 'О. Південна Георгія І Південні Сандвічеві Острови', 'Пакистан', 'Палау', 'Палестина', 
		'Панама', 'Папуа - Нова Гвінея', 'Парагвай', 'Перу', 'Піткерн', 
		'Польща', 'Португалія', 'Пуерто -Ріко', 'Реюньйон', 'Острів Різдва', 
		'Руанда', 'Румунія', 'Сальвадор', 'Самоа', 'Сан-Марино', 
		'Сан -Томе і Прінсіпі', 'Саудівська Аравія', 'Свазіленд', 'Північна Корея', 'Північні Маріанські Острови', 
		'Сейшельські Острови', 'Сен- Бартельмі', 'Сенегал', 'Сен-П\'єр і Мікелон', 'Сент-Вінсент і Гренадіни', 
		'Сент- Кітс і Невіс', 'Сент-Люсія', 'Сербія', 'Сербія і Чорногорія,  Державний Союз', 'Сінгапур', 
		'Сирія',  'Словацька республіка', 'Словенія', 'Соломонові острови', 'Сомалі', 
		'Судан', 'Суринам', 'Сьєрра-Леоне', 'Таджикистан', 'Тайвань', 
		'Тайланд', 'Танзанія', 'Того', 'Токелау', 'Тонга', 
		'Тринідад і Тобаго', 'Тувалу', 'Туніс', 'Туркменія', 'Туреччина', 
		'Уганда', 'Узбекистан', 'Уругвай', 'Фарерські острови', 'Федеративні Штати Мікронезії', 
		'Фіджі', 'Філіппіни', 'Фінляндія', 'Фолклендські о- ва', 'Франція', 
		'Французька Гвінея', 'Французька Полінезія', 'Французькі Південні Території', 'Хорватія', 'Чад', 
		'Чорногорія', 'Чеська Республіка', 'Чилі', 'Швейцарія', 'Швеція', 
		'Шпіцберген і Ян -Майєн', 'Шрі -Ланка', 'Еквадор', 'Екваторіальна Гвінея', 'Еритрея', 
		'Естонія', 'Ефіопія', 'Південна Корея', 'Південно-Африканська Республіка', 'Ямайка', 'Японія'
	],

	regions: [
		'АР Крим', 'Вінницька', 'Волинська', 'Дніпропетровська', 'Донецька',
		'Житомирська', 'Закарпатська', 'Запорізька', 'Івано-Франківська',
		'Київська', 'Кіровоградська', 'Луганська', 'Львівська', 'Миколаївська',
		'Одеська', 'Полтавська', 'Рівненська', 'Сумська', 'Тернопільська',
		'Харківська', 'Херсонська', 'Хмельницька', 'Черкаська', 'Чернівецька',
		'Чернігівська'
	],

	cities: [
		'Авдіївка','Алмазна','Алупка','Алушта','Барвінкове','Батурин','Бахмач','Бахчисарай','Вільногірськ',
		'Вільнянськ','Вінниця','Вовчанськ','Вознесенськ','Волноваха','Володимир-Волинський',
		'Волочиськ','Городенка', 'Городище','Городня','Городок','Городок','Горохів','Гребінка',
		'Гуляйполе','Дергачі','Джанкой','Дзержинськ','Димитров','Дніпродзержинськ','Енергодар',
		'Євпаторія','Єнакієве','Жашків','Жданівка','Жидачів','Житомир','Жмеринка','Жовква',
		'Жовті','Заліщики','Запоріжжя','Заставна','Івано-Франківськ','Ізмаїл','Ізюм','Ізяслав',
		'Іллінці','Іллічівськ','Іловайськ','Калуш','Кам\'янець-Подільський','Кам\'янка-Бузька',
		'Кам\'янка-Дніпровська','Кам\'янка','Камінь-Каширський','Ладижин','Ланівці','Лебедин','Липовець',
		'Лисичанськ','Макіївка','Мала','Малин','Мар\'їнка','Марганець','Маріуполь','Миронівка','Міусинськ',
		'Могилів-Подільський','Ніжин','Нікополь','Нова','Нова','Новоград-Волинський','Новогродівка',
		'Новодністровськ','Новодружеськ','Новомиргород','Обухів','Овруч','Одеса','Олевськ',
		'Острог','Первомайський','Перевальськ','Перемишляни','Перечин','Попасна','Путивль',
		'Рава-Руська','Рожище','Роздільна','Ромни','Рубіжне','Рудки','Саки','Сватове',
		'Свердловськ','Світловодськ','Тлумач','Токмак','Угнів','Ужгород','Узин','Українка',
		'Умань','Устилуг','Фастів','Феодосія','Харків','Ходорів','Христинівка','Хуст','Цюрупинськ',
		'Часів','Червоноград','Чернігів','Чигирин','Чоп','Чуднів','Шаргород','Шахтарськ',
		'Шумськ','Щастя','Щолкіне','Щорс','Южне','Южноукраїнськ','Юнокомунарівськ','Яворів',
		'Яготин','Ялта','Ямпіль','Яремче','Ясинувата'
	],

	streets: [
		'Калініна', 'Кірова', 'Кобозєва', 'Коваля', 'Конєва', 'Косіора', 'Куйбишева', 
		'Купріна', 'Лагутенка', 'Лесі Українки', 'Рози Люксембург', 'Маршала Жукова',
		'Маяковського', 'Миру', 'Молодих Шахтарів', 'Орєшкова', 'Павла Поповича', 'Панфілова', 'Петровського', 
		'Постишева', 'Пушкіна', 'Садовий', 'Сосюри', 'Стратонавтів', 'Титова', 'Флеровського', 
		'Франка', 'Богдана Хмельницького', 'Челюскінців', 'Чубаря', 'Шевченка', 'Шекспіра', 'Щорса'
	],

	address_formats: [
		"{{zip}}, {{region}} {{region_suffix}}, {{city_prefix}} {{city}}, {{street_prefix}} {{street}}, {{building_number}}",
	],

	region_suffix: function() {
		return this.random_element(this.region_suffixes);
	},

	region: function() {
		return this.random_element(this.regions);
	},

	city: function() {
		return this.random_element(this.cities);
	},

	street_prefix: function() {
		return this.random_element(this.street_prefixes);
	},

	street: function() {
		return this.random_element(this.streets);
	}
}

module.exports = provider; 
