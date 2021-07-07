console.log('')
console.log('-------------------------------')
console.log('  Скрипт Tasmarn Bot запущен.')
console.log('  Разработчик: Влад Орлов')
console.log('  vk.com/riconc')

console.log('-------------------------------')
console.log('')
console.log('=> Loading 5%\n=> Loading 20%\n=> Loading 50%\n=> Loading 60%\n=> Loading 70%\n=> Loading 100%\n'); 
// ВСЕ НАСТРОЙКИ В ФАЙЛЕ /database/settings.json! 

const { VK } = require('vk-io');
const vk = new VK();
const commands = [];
const request = require('prequest');



var express = require('express');
var app     = express();

app.set('port', (process.env.PORT || 5000));

//For avoidong Heroku $PORT error
app.get('/', function(request, response) {
    var result = 'App is running'
    response.send(result);
}).listen(app.get('port'), function() {
    console.log('App is running, server is listening on port ', app.get('port'));
});



const food = [
    {
		name: 'no',
		id:0 
	},
	{
		name: 'Фляга травяного чая (+5хп)',
		cost: 10,
		id:1 
	},
	{
		name: 'Жареная рыба (+10хр)',
		cost: 15,
		id:2 
	},
	{
		name: 'Вареный корус (+20хп)',
		cost: 25,
		id:3 
	},
	{
		name: 'Жареная свинина (+30хп)',
		cost: 35,
		id:4 
	},
];


	
const the_class = [
    {
		name: 'no',
		cost: 0,
		id:0 
	},
    {
		name: 'Воин',
		cost: 0,
		id: 1
	},
    {
		name: 'Лучник',
		cost: 0,
		id: 2
	},
    {
		name: 'Маг',
		cost: 0,
		id: 3
	},
    {
		name: 'Охотник',
		cost: 0,
		id: 4
	},
];



const horse = [
    {
		name: 'no',
		id: 0
	},
	{
		name: 'Зебра',
		cost: 500,
		id: 1
	},
	{
		name: 'Лошадь',
		cost: 2500,
		id: 2
	},
	{
		name: 'Единорог',
		cost: 5000,
		id: 3
	},
	{
		name: 'Олень',
		cost: 7500,
		id: 4
	},
	{
		name: 'Волк',
		cost: 25000,
		id: 5
	},
	{
		name: 'Лев',
		cost: 50000,
		id: 6
	},
	{
		name: 'Тигр',
		cost: 50000,
		id: 6
	}
];

const сhariots = [
    {
		name: 'no',
		id: 0
	},
	{
		name: 'Упряжь с двумя Лошадьми',
		cost: 1000,
		id: 1
	},
	{
		name: 'Упряжь с двумя оленями',
		cost: 1000,
		id: 2
	},
	{
		name: 'Волчья упряжь',
		cost: 15000,
		id: 3
	}
];

const boat = [
    {
		name: 'no',
		id: 0
	},
	{
		name: 'Березовая лодка с вёслами',
		cost: 1000,
		id: 1
	},
	{
		name: 'Дубовая лодка с вёслами',
		cost: 3500,
		id: 2
	},
	{
		name: 'Дубовая лодка с лодочником',
		cost: 7000,
		id: 3
	},
	{
		name: 'Корабль',
		cost: 1000,
		id: 4
	}
];

const helmet = [
    {
		name: 'no',
		id: 0
	},
	{
		name: 'Амулет защиты',
		cost: 2,
		id: 1
	},
	{
		name: 'Амулет защиты',
		cost: 300000,
		id: 2
	},
	{
		name: 'Амулет здоровья',
		cost: 450000,
		id: 3
	},
	{
		name: 'Амулет здоровья',
		cost: 1300000,
		id: 4
	}
];

const chestplate = [
    {
		name: 'no',
		id: 0
	},
	{
		name: ' Лёгкая кираса',
		cost: 250,
		id: 1
	},
	{
		name: 'Железная улучшенная кираса',
		cost: 3000,
		id: 2
	},
	{
		name: 'Магический плащ',
		cost: 3500,
		id: 3
	},
	{
		name: 'Кираса из чешуи дракон',
		cost: 5000,
		id: 4
	}
];

const shoulders = [
    {
		name: 'no',
		id: 0
	},
	{
		name: 'Магические наплечники',
		cost: 15000,
		id: 1
	},
	{
		name: 'Наплечники из чешуи дракона',
		cost: 55000,
		id: 2
	},
	
];

const trouserss = [
    {
		name: 'no',
		id: 0
	},
	{
		name: 'Лёгкие штаны',
		cost: 250,
		id: 1
	},
	{
		name: 'Железные поножи',
		cost: 500,
		id: 2
	},
	{
		name: 'Поножи из чешуи дракона',
		cost: 2000,
		id: 3
	},
];

const boots = [
    {
		name: 'no',
		id: 0
	},
	{
		name: 'Охотничьи сапоги',
		cost: 20,
		id: 1
	},
	{
		name: 'Ботинки из кожи',
		cost: 10,
		id: 2
	},
	{
		name: 'Берцы',
		cost: 9,
		id: 3
	}
];



const farms = [
	{
		name: '6U Nvidia',
		cost: 20500000,
		id: 1
	},
	{
		name: 'AntminerS9',
		cost: 100000000,
		id: 2
	},
	{
		name: 'FM2018-BT200',
		cost: 900000000,
		id: 3
	}
];

const business = [
	[ // Бизнес #1
		{ // Стандартный бизнес
			name: 'Шаурмечная',
			cost: 50000,
			earn: 200,
			workers: 1,
			id: 1,
			icon: '🥖'
		},

		{ // Первое улучшение
			name: '5 шаурмечных',
			cost: 350000,
			earn: 1000,
			workers: 10,
			id: 1,
			icon: '🥖'
		},

		{ // Второе улучшение
			name: 'Небольшая сеть шаурмечных',
			cost: 900000,
			earn: 2625,
			workers: 30,
			id: 1,
			icon: '🥖'
		},

		{ // 3 улучшение
			name: 'Средняя сеть шаурмечных',
			cost: 1200000,
			earn: 3750,
			workers: 50,
			id: 1,
			icon: '🥖'
		},

		{ // Последнее улучшение
			name: 'Лучшая шаурма в стране',
			cost: 4000000,
			earn: 11000,
			workers: 200,
			id: 1,
			icon: '🥖'
		}
	],

	[
		{
			name: 'Ларёк',
			cost: 100000,
			earn: 700,
			workers: 1,
			id: 2,
			icon: '🏪'
		},

		{
			name: '5 ларьков',
			cost: 500000,
			earn: 3700,
			workers: 5,
			id: 2,
			icon: '🏪'
		},

		{
			name: 'Средняя сеть ларьков',
			cost: 950000,
			earn: 7725,
			workers: 40,
			id: 2,
			icon: '🏪'
		},

		{
			name: 'Ларьки во всех городах страны',
			cost: 8000000,
			earn: 37450,
			workers: 150,
			id: 2,
			icon: '🏪'
		},

		{
			name: 'Ларьки в каждой стране',
			cost: 17500000,
			earn: 79950,
			workers: 400,
			id: 2,
			icon: '🏪'
		}
	],

	[
		{
			name: 'Забегаловка',
			cost: 300000,
			earn: 2700,
			workers: 3,
			id: 3,
			icon: '🍷'
		},

		{
			name: 'Общепит',
			cost: 450000,
			earn: 4350,
			workers: 7,
			id: 3,
			icon: '🍷'
		},

		{
			name: 'Ресторан',
			cost: 450000,
			earn: 7400,
			workers: 15,
			id: 3,
			icon: '🍷'
		},

		{
			name: 'Небольшая сеть ресторанов',
			cost: 4000000,
			earn: 19900,
			workers: 80,
			id: 3,
			icon: '🍷'
		},

		{
			name: 'Лучшие рестораны в стране',
			cost: 11000000,
			earn: 47400,
			workers: 300,
			id: 3,
			icon: '🍷'
		}
	],

	[
		{
			name: 'Мини-магазин',
			cost: 500000,
			earn: 4100,
			workers: 15,
			id: 4,
			icon: '🏫'
		},

		{
			name: 'Магазин',
			cost: 1250000,
			earn: 9350,
			workers: 10,
			id: 4,
			icon: '🏫'
		},

		{
			name: 'Сеть магазинов',
			cost: 3000000,
			earn: 23350,
			workers: 70,
			id: 4,
			icon: '🏫'
		},

		{
			name: 'Сеть супермаркетов',
			cost: 20000000,
			earn: 109850,
			workers: 500,
			id: 4,
			icon: '🏫'
		}
	],

	[
		{
			name: 'Завод в гараже',
			cost: 1500000,
			earn: 8800,
			workers: 5,
			id: 5,
			icon: '🏭'
		},

		{
			name: 'Средний завод',
			cost: 3500000,
			earn: 13800,
			workers: 20,
			id: 5,
			icon: '🏭'
		},

		{
			name: 'Сеть заводов',
			cost: 15000000,
			earn: 60800,
			workers: 200,
			id: 5,
			icon: '🏭'
		},

		{
			name: 'Главные заводы страны',
			cost: 50000000,
			earn: 274800,
			workers: 1000,
			id: 5,
			icon: '🏭'
		}
	],

	[
		{
			name: 'Угольная шахта',
			cost: 25000000,
			earn: 84700,
			workers: 50,
			id: 6,
			icon: '⛏'
		},

		{
			name: 'Золотая шахта',
			cost: 50000000,
			earn: 117200,
			workers: 75,
			id: 6,
			icon: '⛏'
		},

		{
			name: 'Алмазная шахта',
			cost: 60000000,
			earn: 229700,
			workers: 200,
			id: 6,
			icon: '⛏'
		},

		{
			name: 'Алмазный карьер',
			cost: 90000000,
			earn: 432700,
			workers: 360,
			id: 6,
			icon: '⛏'
		},

		{
			name: 'Крупнейший алмазный карьер',
			cost: 200000000,
			earn: 709700,
			workers: 700,
			id: 6,
			icon: '⛏'
		}
	],

	[
		{
			name: 'Маленький офис',
			cost: 80000000,
			earn: 229625,
			workers: 10,
			id: 7,
			icon: '🏢'
		},

		{
			name: 'Средний офис',
			cost: 240000000,
			earn: 329175,
			workers: 60,
			id: 7,
			icon: '🏢'
		},

		{
			name: 'Большой офис',
			cost: 240000000,
			earn: 614675,
			workers: 200,
			id: 7,
			icon: '🏢'
		},

		{
			name: 'Офис-небоскрёб',
			cost: 1000000000,
			earn: 1227275,
			workers: 700,
			id: 7,
			icon: '🏢'
		}
	],

	[
		{
			name: 'Любительский GameDev',
			cost: 150000000,
			earn: 302000,
			workers: 5,
			id: 8,
			icon: '🕹'
		},

		{
			name: 'Инди GameDev',
			cost: 200000000,
			earn: 379500,
			workers: 10,
			id: 8,
			icon: '🕹'
		},

		{
			name: 'AA GameDev',
			cost: 750000000,
			earn: 1024500,
			workers: 50,
			id: 8,
			icon: '🕹'
		},

		{
			name: 'AAA GameDev',
			cost: 5000000000,
			earn: 6749500,
			workers: 500,
			id: 8,
			icon: '🕹'
		}
	],

	[
		{
			name: 'Нефтевышка',
			cost: 500000000,
			earn: 707000,
			workers: 8,
			id: 9,
			icon: '🏜'
		},

		{
			name: 'Нефтеплатформа в море',
			cost: 750000000,
			earn: 1019000,
			workers: 20,
			id: 9,
			icon: '🏜'
		},

		{
			name: 'Нефтеплатформа в океане',
			cost: 1250000000,
			earn: 4049000,
			workers: 50,
			id: 9,
			icon: '🏜'
		},

		{
			name: '5 нефтеплатформ в океане',
			cost: 5000000000,
			earn: 15249000,
			workers: 250,
			id: 9,
			icon: '🏜'
		}
	],

	[
		{
			name: 'Мини АЭС',
			cost: 800000000,
			earn: 1050700,
			workers: 40,
			id: 10,
			icon: '💡'
		},

		{
			name: 'Средняя АЭС',
			cost: 1200000000,
			earn: 1496200,
			workers: 75,
			id: 10,
			icon: '💡'
		},

		{
			name: 'АЭС с 5 энергоблоками',
			cost: 4250000000,
			earn: 3088700,
			workers: 300,
			id: 10,
			icon: '💡'
		},

		{
			name: 'Крупнейшая АЭС',
			cost: 10000000000,
			earn: 34843700,
			workers: 650,
			id: 10,
			icon: '💡'
		}
	],

	[
		{
			name: 'Apple Store',
			cost: 25000000000,
			earn: 250000000,
			workers: 75,
			id: 11,
			icon: '🗺'
		},

		{
			name: 'Магазин Apple',
			cost: 3000000000000,
			earn: 1000000000,
			workers: 150,
			id: 11,
			icon: '🗺'
		},

		{
			name: 'Центральный Apple Store',
			cost: 9000000000000,
			earn: 5000000000,
			workers: 250,
			id: 11,
			icon: '🗺'
		},

		{
			name: 'Завод Apple',
			cost: 20000000000000,
			earn: 11000000000,
			workers: 500,
			id: 11,
			icon: '🗺'
		},

		{
			name: 'Заводы Apple по всему миру',
			cost: 100000000000000,
			earn: 45000000000,
			workers: 1000,
			id: 11,
			icon: '🗺'
		},

		{
			name: 'Заводы Apple по всему миру',
			cost: 200000000000000,
			earn: 75000000000,
			workers: 1500,
			id: 11,
			icon: '🗺'
		}
	]
];

const works = [
	{
		name: 'Дворник',
		requiredLevel: 1,
		min: 2000,
		max: 2500,
		id: 1
	},
	{
		name: 'Сантехник',
		requiredLevel: 3,
		min: 3750,
		max: 4000,
		id: 2
	},
	{
		name: 'Электрик',
		requiredLevel: 5,
		min: 4000,
		max: 4500,
		id: 3
	},
	{
		name: 'Слесарь',
		requiredLevel: 8,
		min: 5000,
		max: 5500,
		id: 4
	},
	{
		name: 'Юрист',
		requiredLevel: 10,
		min: 7500,
		max: 8000,
		id: 5
	},
	{
		name: 'Бухгалтер',
		requiredLevel: 14,
		min: 9000,
		max: 9489,
		id: 6
	},
	{
		name: 'Бармен',
		requiredLevel: 22,
		min: 10000,
		max: 12500,
		id: 7
	},
	{
		name: 'Администратор',
		requiredLevel: 25,
		min: 12500,
		max: 13500,
		id: 8
	},
	{
		name: 'ЛОХ ИЛИ БОГГГГГГГ',
		requiredLevel: 49,
		min: 16000,
		max: 17500,
		id: 9
	}
];
const utils = {
	sp: (int) => {
		int = int.toString();
		return int.split('').reverse().join('').match(/[0-9]{1,3}/g).join('.').split('').reverse().join('');
	},
	rn: (int, fixed) => {
		if (int === null) return null;
		if (int === 0) return '0';
		fixed = (!fixed || fixed < 0) ? 0 : fixed;
		let b = (int).toPrecision(2).split('e'),
			k = b.length === 1 ? 0 : Math.floor(Math.min(b[1].slice(1), 14) / 3),
			c = k < 1 ? int.toFixed(0 + fixed) : (int / Math.pow(10, k * 3) ).toFixed(1 + fixed),
			d = c < 0 ? c : Math.abs(c),
			e = d + ['', 'тыс', 'млн', 'млрд', 'трлн'][k];

			e = e.replace(/e/g, '');
			e = e.replace(/\+/g, '');
			e = e.replace(/Infinity/g, 'ДОХЕРА');

		return e;
	},
	
	gi: (int) => {
		int = int.toString();

		let text = ``;
		for (let i = 0; i < int.length; i++)
		{
			text += `${int[i]}&#8419;`;
		}

		return text;
	},
	decl: (n, titles) => { return titles[(n % 10 === 1 && n % 100 !== 11) ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2] },
	random: (x, y) => {
		return y ? Math.round(Math.random() * (y - x)) + x : Math.round(Math.random() * x);
	},
	pick: (array) => {
		return array[utils.random(array.length - 1)];
	},
	time: () => {
		return parseInt(new Date().getTime()/1000)
	}
}

const rotateText = {
	q: 'q',
	w: 'ʍ',
	e: 'ǝ',
	r: 'ɹ',
	t: 'ʇ',
	y: 'ʎ',
	u: 'u',
	i: 'ᴉ',
	o: 'o',
	p: 'p',
	a: 'ɐ',
	s: 's',
	d: 'd',
	f: 'ɟ',
	g: 'ƃ',
	h: 'ɥ',
	j: 'ɾ',
	k: 'ʞ',
	l: 'l',
	z: 'z',
	x: 'x',
	c: 'ɔ',
	v: 'ʌ',
	b: 'b',
	n: 'n',
	m: 'ɯ',

	й: 'ņ',
	ц: 'ǹ',
	у: 'ʎ',
	к: 'ʞ',
	е: 'ǝ',
	н: 'н',
	г: 'ɹ',
	ш: 'm',
	щ: 'm',
	з: 'ε',
	х: 'х',
	ъ: 'q',
	ф: 'ф',
	ы: 'ıq',
	в: 'ʚ',
	а: 'ɐ',
	п: 'u',
	р: 'd',
	о: 'о',
	л: 'v',
	д: 'ɓ',
	ж: 'ж',
	э: 'є',
	я: 'ʁ',
	ч: 'һ',
	с: 'ɔ',
	м: 'w',
	и: 'и',
	т: 'ɯ',
	ь: 'q',
	б: 'ƍ',
	ю: 'oı'
}

let btc = 6000;

let users = require('./users.json');
let buttons = [];

setTimeout(async () => {
	const rq = await request('https://api.cryptonator.com/api/ticker/btc-usd');

	if(!rq.ticker) return;
	if(!rq.ticker.price) return;

	btc = Math.floor(Number(rq.ticker.price));
}, 5);

setInterval(async () => {
	const rq = await request('https://api.cryptonator.com/api/ticker/btc-usd');

	if(!rq.ticker) return;
	if(!rq.ticker.price) return;

	btc = Math.floor(Number(rq.ticker.price));
}, 60000);

setInterval(async () => {
	await saveUsers();
	console.log('saved');
}, 30000);

setInterval(async () => {
	users.filter(x=> x.misc.farm !== 0).map(x=> {
		if(x.misc.farm === 1)
		{
			x.farm_btc += 2;
		}

		if(x.misc.farm === 2)
		{
			x.farm_btc += 10;
		}

		if(x.misc.farm === 3)
		{
			x.farm_btc += 100;
		}
	});
}, 3600000);

setInterval(async () => {
	users.map(user => {
		for(var i = 0; i < user.business.length; i++)
		{
			const biz = business[user.business[i].id - 1][user.business[i].upgrade - 1];
			user.business[i].moneys += Math.floor(biz.earn / biz.workers * user.business[i].workers)
		}
	});
}, 3600000);

function clearTemp()
{
	users.map(user => {
		user.timers.hasWorked = false;
		user.timers.bonus = false;
	});
}

clearTemp();

async function saveUsers()
{
	require('fs').writeFileSync('./users.json', JSON.stringify(users, null, '\t'));
	return true;
}

vk.setOptions({ token: '23b44bf954e85eef8dc4618ea09185ecd5f741eaf6eec3d7b45a46827e01f13bd4302cc89555d1ff85e7c', pollingGroupId: 189177237 });
const { updates, snippets } = vk;

updates.startPolling();
updates.on('message', async (message) => {
	if(Number(message.senderId) <= 0) return;
	if(/\[public189177237\|(.*)\]/i.test(message.text)) message.text = message.text.replace(/\[public189177237\|(.*)\]/ig, '').trim();

	if(!users.find(x=> x.id === message.senderId))
	{
		const [user_info] = await vk.api.users.get({ user_id: message.senderId });
		const date = new Date();

			users.push({
			id: message.senderId,
			uid: users.length,
			the_class:0,
			yid: users.length,
			balance: 5000,
			bank: 0,
			btc: 0,
			farm_btc: 0,
			farms: 0,
			farmslimit: 200,
			energy: 10,
			opit: 0,
			biz: 0,
			zhelezo: 0,
			zoloto: 0,
			almaz: 0,
			bizlvl: 0,
			nicklimit: 16,
			rating: 0,
			regDate: `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`,
			mention: true,
			ban: false,
			pp: 0,
			timers: {
				hasWorked: false,
				bonus: false,
				poxod: false,
				poxod2: false,
				kopat: false,
				hack: false,
				delacc: false,
				bonus: false,
				obva: false,
				krik: false,
				mine: false,
				tower: false,
			},
			tag: user_info.first_name,
			work: 0,
			business: 0,
			notifications: true,
			exp: 1,
			level: 1,
			levelt: 0,
			referal: null,
			promo: false,
			items: {
				health: 0,
				food: 0,
				mana: 0,
				stamina: 0,
				attack: 0,
				magic_attack: 0,
				protection: 0,
				
			},
			transport: {
				horse: 0,
				сhariots: 0,
				boat: 0,
			},
			armor: {
				boots: 0,
				helmet: 0,
				chestplate: 0,
				shoulders: 0,
				trousers: 0,
			},
			misc: {
				farm: 0,
				pet: 0,
			},
			settings: {
				firstmsg: true,
				adm: 0,
				trade: true,
				old: false,
				limit: 1000000,
			},
			pet: {
				lvl: 0,
				poterl: false
			},
			marriage: {
				partner: 0,
				requests: []
			}
		});
		console.log(` +1 игрок [Игроков: ${users.length}]`);
		console.log(``);
		saveUsers();
	}

	message.user = users.find(x=> x.id === message.senderId);

	const bot = (text, params) => {
		return message.send(`${message.user.tag}, ${text}`, params);
	}

	if(message.user.ban) return bot(`ваш аккаунт заблокирован ⛔`);

	const command = commands.find(x=> x[0].test(message.text));

	if(message.user.settings.firstmsg)
	{

bot(`123`,);
		message.user.settings.firstmsg = false;


		saveUsers();
		return;

	}

	if(!command)
	{

		if(!message.isChat) return bot(`такой команды не существует, отправь «помощь» что бы узнать мои команды.`);
		if(message.isChat) return;

	}

	if(message.user.exp >= 24)
	{
		message.user.exp = 1;
		message.user.level += 1;
	}
	


	message.args = message.text.match(command[0]);
	await command[1](message, bot);

	saveUsers();
	console.log(` Введена команда: ${message.text}.`)
	console.log(``)
});

const cmd = {
	hear: (p, f) => {
		commands.push([p, f]);
	}
}

cmd.hear(/^(?:eval)\s([^]+)$/i, async (message, bot) => {
	if(message.senderId !== 514831440| message.senderId !== 514831440) return;

	try {
		const result = eval(message.args[1]);

		if(typeof(result) === 'string')
		{
			return bot(`string: ${result}`);
		} else if(typeof(result) === 'Готово')
		{
			return bot(`number: ${result}`);
		} else {
			return bot(`${typeof(result)}: ${JSON.stringify(result, null, '&#12288;\t')}`);
		}
	} catch (e) {
		console.error(e);
		return bot(`ошибка:
		${e.toString()}`);
	}
});



cmd.hear(/^(?:помощь|команды|📚 Помощь|меню|help|commands|cmds|menu|начать|start|@destinybot 📚 Помощь)$/i, async (message, bot) => {
	await bot(`мои команды:
❓ Помощь [команда] - описание команды

кодер https://vk.com/minecraftgame33

⛪Таверна 
⠀⠀🎲 Кубик [1-6] 
⠀⠀🥛 Стаканчик [1-3] [сумма] 
👔 Работа - список работ 
⠀🔨 Работать 
⠀❌ Уволиться 

🌽 Питомцы: 
⠀⠀🐒 Питомец - информация 
⠀⠀🐪 Питомец поход 
⠀⠀🌟 Питомец улучшить 


📒 Профиль 
💲 Баланс 
👑 Рейтинг - ваш рейтинг 
✒ Ник [ник/вкл/выкл] 
🛒 Рынок 
🔋 Ферма
🤝 Передать [id] [сумма] 
🏆 Топ 
💎 Бонус - ежедневный бонус 
👪 Брак [id] - сделать предложение 
⠀ ⠀Браки - список предложений 
💔 Развод 
⌚ Дата [id] - дата регистрации игрока 
🎁 Донат 
👫 Реферал - деньги за друзей 

🆘 Репорт [фраза] - ошибки или пожелания`);
});

cmd.hear(/^(?:донат)$/i, async (message, bot) => {
	return bot(`хотите купить донат?
	Вы можете купить его по дешёвке!

	1 миллиард -  (9 рублей)

	3 миллиарда -  (15 рублей)

	5 миллиардов -  (25 рублей)

	30 миллиардов -  (40 рублей)

	100 миллиардов -  (50 рублей)
	За донатом писать @vika_kus123 (создатель) или @koldan_off (кодер 2 после создателя) или @id478925120 (админ спонсор денег)` );
});


cmd.hear(/^(?:wiki|вики)\s(.*)$/i, async (message, bot) => {
    let args = message.text.match(/^(?:wiki|вики)\s?(.*)/i);
    function isEmpty( str ) { if (str.trim() == '') return true; return false; }
        rq("https://ru.wikipedia.org/w/api.phealth?action=opensearch&search="+encodeURIComponent((args[1] ? args[1] : "ВКонтакте"))+"&meta=siteinfo&rvprop=content&format=json")
        .then((res) => {
            if(isEmpty(res[2][0])) {
                if(isEmpty(res[2][1])) {
                    if(isEmpty(res[2][2])) return message.reply('Статья не полная, либо отсутствует.\n\nСсылка: ' + res[3][0]);
                } else {
                    return message.reply(`Я нашёл то, что Вы попросили найти! \n\nСсылка: ${res[3][1]}`);
                }
            } else {
                return message.reply(`Я нашёл то, что Вы попросили найти!\n\nСсылка: ${res[3][0]}`);
            }
        });
});

cmd.hear(/^(?:помощь)\s(.*)$/i, async (message, bot) => {
	message.args[1] = message.args[1].toLowerCase();

	if(message.args[1] === 'переверни')
	{
		return message.send(`Команда "Переверни" пишет ваш текст вверх ногами (Поддерживаются цифры, буквы латинского и кириллического алфавита, а также некоторые символы)`);
	}

	if(message.args[1] === 'шар')
	{
		return message.send(`Команда "Шар" используя магию рандома выводит случайное сообщение.`);
	}

	if(message.args[1] === 'инфа')
	{
		return message.send(`Команда "Инфа" случайным образом присылает шанс чего-либо. Также можно использовать команды "Шанс" или "Вероятность"`);
	}

	if(message.args[1] === 'выбери')
	{
		return message.send(`Команда "Выбери" случайным образом выбирает один из двух предложенных вариантов.`);
	}

	if(message.args[1] === 'казино')
	{
		return message.send(`Команда "Казино" случайным образом умножает вашу ставку (Могут выпасть множители х0, х0.25, х0.5, x0.75, х1, х2, х5, х50). Чтобы поставить всю сумму введите "Казино все" или "Казино вабанк"`);
	}

	if(message.args[1] === 'кубик')
	{
		return message.send(`Команда "Кубик" сравнивает ваше число со случайным от 1 до 6, если вы угадали, то получаете вознаграждение. Также можно использовать "Куб"`);
	}

	if(message.args[1] === 'трейд')
	{
		return message.send(`Команда "Трейд" - симулятор бинарных опционов. Введите "Трейд вверх (сумма)" если думаете, что курс валюты будет увеличиваться, или "Трейд вниз (сумма)" если будет уменьшаться.`);
	}

	if(message.args[1] === 'бар')
	{
		return message.send(`Чтобы зайти в бар и испытать удачу введи "бар [1-3] [сумма]".`);
	}

	if(message.args[1] === 'работа')
	{
		return message.send(`С помощью команды "Работа" вы можете устроиться на одну из работ. Чтобы отрыть новые профессии, вам нужно отработать определённое кол-во игровых недель (Команда "Работать"). Для увольнения с работы введите "Уволиться".`);
	}

	if(message.args[1] === 'бизнес')
	{
		return message.send(`Владея бизнесом, вы можете зарабатывать немало денег:
		Бизнесы [номер] - купить бизнес
		Бизнес - ваш бизнес
		Бизнес снять - снять деньги со счёта бизнеса
		Продать бизнес - продажа бизнеса`);
	}

	if(message.args[1] === 'реши')
	{
		return message.send(`Команда "Реши" решает ваш пример (Реши 5 + 5).
		Команда умеет:
		Складывать (+)
		Вычитать (-)
		Умножать (*)
		Делить (/)`);
	}

	if(message.args[1] === 'курс')
	{
		return message.send(`С помощью команды "Курс" можно узнать курс Биткоина на данный момент.`);
	}

	if(message.args[1] === 'профиль')
	{
		return message.send(`Команда "Профиль" выводит вашу игровую статистику.`);
	}

	if(message.args[1] === 'баланс')
	{
		return message.send(`Команда "Баланс" выводит кол-во валюты на вашем аккаунте.`);
	}

	if(message.args[1] === 'банк')
	{
		return message.send(`При вводе команды "Банк" (без параметров) выводится ваша сумма на счёте. Для того чтобы положить на счёт деньги введите "Банк [сумма]" (Максимум 250.000.000.000$). Чтобы забрать деньги из банка введите "Банк снять/взять [сумма]".
		Сумма в банке увеличивается каждый час (больше сумма - больше прибыль).`);
	}

	if(message.args[1] === 'рейтинг')
	{
		return message.send(`Пустая команда "Рейтинг" (без параметров) выводит ваше кол-во рейтинга (также можно узнать в профиле). При указании параметра (любое число) вы купите данное кол-во единиц рейтинга (👑1 = 250.000.000$). Рейтинг влияет на ваше положение в топе.`);
	}

	if(message.args[1] === 'ник')
	{
		return message.send(`С помощью команды "Ник" можно выбрать себе ник длинною до 15 символов. Также, ник можно делать кликабельным/некликабельным в топе "Ник вкл" и "Ник выкл"`);
	}

	if(message.args[1] === 'магазин')
	{
		return message.send(`Команда "Магазин" выводит список категорий товаров, которые доступны для покупки.`);
	}

	if(message.args[1] === 'продать')
	{
		return message.send(`С помощью команды "Продать" вы можете продать любой предмет (Машину, дом, квартиру, телефон, яхту, самолет, вертолет, биткоин, ферму).`);
	}

	if(message.args[1] === 'передать')
	{
		return message.send(`Команда "Передать" переводит указанную вами сумму любому игроку (Передать ${message.user.uid} 1000).`);
	}

	if(message.args[1] === 'топ')
	{
		return message.send(`Команда "Топ" выводит 10 игроков с самым большим рейтингом.`);
	}

	if(message.args[1].includes('брак'))
	{
		return message.send(`Используя команды "Брак", "Браки", "развод", вы можете жениться/выходить замуж/разводиться.
		Брак [id] - сделать предложение
		Браки - список предложений
		Развод - ...`);
	}

	if(message.args[1] === 'дата')
	{
		return message.send(`Команда "Дата" выводит дату регистрации человека в боте. Можно использовать id человека.`);
	}

	if(message.args[1] === 'репорт')
	{
		return message.send(`С помощью команды "Репорт" вы можете отправить создателю бота любое сообщение. Также можно использовать "Реп", "Жалоба", "Rep".`);
	}
});




cmd.hear(/^(?:переверни)\s([^]+)$/i, async (message, bot) => {
	let text = ``;
	message.args[1].split('').map(x=> {
		if(rotateText[x])
		{
			text += rotateText[x];
		}
	});

	return bot(`держи : "${text.split('').reverse().join('')}"`)
});

cmd.hear(/^(?:шар)\s([^]+)$/i, async (message, bot) => {
	const phrase = utils.pick(['перспективы не очень хорошие', 'сейчас нельзя предсказать', 'пока не ясно', 'знаки говорят - "Да"', 'знаки говорят - "Нет"', 'можешь быть уверен в этом', 'мой ответ - "нет"', 'мой ответ - "да"', 'бесспорно', 'мне кажется - "Да"', 'мне кажется - "Нет"']);
	return bot(phrase);
});

cmd.hear(/^(?:setwall)\s(.*)$/i, async (message, bot) => {
	if(message.senderId !== 514831440| message.senderId !== 514831440) return;

	message.args[1] = message.args[1].replace("wall", "");
	message.args[1] = message.args[1].split('_');
	wall_to_send = "wall" + message.args[1][0] + "_" + message.args[1][1];
	return bot(`обновлён пост для рассылки`);
});

cmd.hear(/^(?:textsend)\s([^]+)/i, async (message, bot) => {
if(message.senderId !== 514831440| message.senderId !== 514831440) return;

	await bot(`рассылка завершена`);
	users.map(user => {
		vk.api.messages.send({ user_id: user.id, message: message.args[1], attachment: wall_to_send }).then(() => {
			console.log(`SENDED ${user.id}`)
		}).catch((err) => {
			console.log(`NOOOOT ${user.id}`)
		});
	});

	for(var i = 1; i < 900; i++) {
		vk.api.messages.send({ peer_id: 2000000000 + i, message: message.args[1], attachment: wall_to_send }).then(() => {
			console.log(`CHAT SENDED ${user.id}`)
		}).catch((err) => {
			console.log(`CHAT NOOOOT ${user.id}`)
		});
	}
	/*message.args[1] = message.args[1].replace("wall", "");
	message.args[1] = message.args[1].split('_');
	wall_to_send = "wall" + message.args[1][0] + "_" + message.args[1][1];
	return bot(`обновлён пост для рассылки`);*/
});

cmd.hear(/^(?:инфа|шанс|вероятность)\s([^]+)$/i, async (message, bot) => {
	const phrase = utils.pick(['шанс этого', 'мне кажется около']);
	const percent = utils.random(100);

	return bot(`${phrase} ${percent}%`)
});

cmd.hear(/^(?:выбери)\s([^]+)\s(?:или)\s([^]+)$/i, async (message, bot) => {
	const first = message.args[1];
	const second = message.args[2];

	const phrase = utils.pick([`конечно ${utils.random(1, 2)} вариант`, `мне кажется, что ${utils.random(1, 2)} вариант лучше`]);
	return bot(`${phrase}`);
});

cmd.hear(/^(?:профиль)$/i, async (message, bot) => {
	let text = ``;
    text += `🔎 ID: ${message.user.uid}\n`;
	
    text += `Ник: ${message.user.yid}\n`;
	text += `класс: ${the_class[message.user.the_class - 0].name}\n`;
	text += `💰 Деньги: ${utils.sp(message.user.balance)}🌀\n`;
	text += `❤ Здоровье: ${utils.sp(message.user.items.health)}\n`;
	text += `🛡 Защита: ${utils.sp(message.user.items.protection)}\n`;
	text += `🍖 еда: ${utils.sp(message.user.items.food)}\n`;
	text += `✨ Мана: ${utils.sp(message.user.items.mana)}\n`;
	
	    text += `Выносливость: ${utils.sp(message.user.items.stamina)}\n`;
	    text += `Атака: ${utils.sp(message.user.items.attack)}\n`;
	    text += `Маг. атака: ${utils.sp(message.user.items.magic_attack)}\n`;
		
	//if(message.user.bank) text += `🌀 В банке: ${utils.sp(message.user.bank)}$\n`;
	//if(message.user.btc) text += `🌀 Биткоинов: ${utils.sp(message.user.btc)}\n`;
	text += `👑 Рейтинг: ${utils.sp(message.user.rating)}\n`;
	text += `🌟 Уровень: ${message.user.level} [${message.user.exp}/24]\n`;
	
	text += `\n🔑 Транспорт :\n`;
		
		text += `🏇 Лошадь: ${horse[message.user.transport.horse - 0].name}\n`;
		text += `🔷 Колесница: ${сhariots[message.user.transport.сhariots - 0].name}\n`;
		text += `⛵ Лодка: ${boat[message.user.transport.boat - 0].name}\n`;
		
	//if(message.user.work) text += `👔 Работа: ${works[message.user.work - 1].name}\n`;
	//if(message.user.marriage.partner) text += `👬 Партнер: ${users[message.user.marriage.partner].tag}`;
	
		text += `\n👘 Броня:\n`;
		text += `📿 Шлем: ${helmet[message.user.armor.helmet - 0].name}\n`;
		text += `🧥 Нагрудник : ${chestplate[message.user.armor.chestplate - 0].name}\n`;
		text += `👖 Штаны: ${trouserss[message.user.armor.trousers - 0].name}\n`;
		text += `👢 Сапоги: ${boots[message.user.armor.boots - 0].name}\n`;
		
		text += `⚜ Наплечники: ${shoulders[message.user.armor.shoulders - 0].name}\n`;
		
		//if(message.user.misc.farm) text += `⠀🔋 Ферма: ${farms[message.user.misc.farm - 1].name} (${message.user.misc.farm_count} шт.)\n`;
		if(message.user.business.length != 0)
		{
			for(var i = 0; i < message.user.business.length; i++)
			{
				text += `⠀${ business[message.user.business[i].id - 1][message.user.business[i].upgrade - 1].icon } ${business[message.user.business[i].id - 1][message.user.business[i].upgrade - 1].name}\n`;
			}
		}
	

	text += `\n📗 Дата регистрации: ${message.user.regDate}`;
	return bot(`твой профиль:\n${text}`);
});

cmd.hear(/^(?:баланс)$/i, async (message, bot) => {
	let text = `на руках: ${utils.sp(message.user.balance)}$`;

	if(message.user.bank) text += `\n💳 В банке: ${utils.sp(message.user.bank)}$`;
	if(message.user.btc) text += `\n🌐 Биткоинов: ${utils.sp(message.user.btc)}฿`;

	return bot(text);
});

cmd.hear(/^(?:банк)$/i, async (message, bot) => {
	return bot(`на вашем банковском счёте находится ${utils.sp(message.user.bank)}$`);
});

cmd.hear(/^(?:банк)\s(?:снять)\s(.*)$/i, async (message, bot) => {
	message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
	message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
	message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
	message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/ig, message.user.bank);

	if(!Number(message.args[1])) return;
	message.args[1] = Math.floor(Number(message.args[1]));

	if(message.args[1] <= 0) return;

	if(message.args[1] > message.user.bank) return bot(`у вас нет данной суммы`);
	else if(message.args[1] <= message.user.bank)
	{
		message.user.balance += message.args[1];
		message.user.bank -= message.args[1];

		return bot(`вы сняли ${utils.sp(message.args[1])}$
💳 Остаток на счёте: ${utils.sp(message.user.bank)}$
💰 Ваш баланс: ${utils.sp(message.user.balance)}$`);
	}
});


cmd.hear(/^(?:стёпа фак|СТЕПА ФАК|СТЁПА ФАК|Степа фак|степа фак|фак)/i, async (message, bot) => { 
        return bot(`🖕🏻🖕🏻🖕🏻`) 
});


cmd.hear(/^(?:плак)/i, async (user, bot) => {
		return bot(`😢😢😭😭`);
});


cmd.hear(/^(?:гори в аду|сжечь|сжэчь)/i, async (user, bot) => {
		return bot(`🔥🔥🔥`);
});

cmd.hear(/^(?:хть тфу|ТьФу|Свинка харкается|ХТЬ ТФУ|тьфу )\s([0-9]+)$/i, async (user, bot) => {
        return bot(`💦💦💦`);
});


cmd.hear(/^(?:Стёпа фак)\s([0-9]+)$/i, async (message, bot) => { 
let user = users.find(x=> x.uid === Number(message.args[1]));
if(!user) return bot(`неверный ID игрока`); 
if(message.args[1] == message.user.uid) return bot(`Вы даун? Вы не можете себя послать :/`);
await bot(`вы послали игрока ${user.tag} 🖕🏻🖕🏻🖕🏻.`); 
vk.api.messages.send({ user_id: user.id, message: `[УВЕДОМЛЕНИЕ]\nСтёпа послал вас 🖕🏻🖕🏻🖕🏻.` }); 
});


cmd.hear(/^(?:плюнуть)\s([0-9]+)$/i, async (message, bot) => { 
let user = users.find(x=> x.uid === Number(message.args[1]));
if(!user) return bot(`неверный ID игрока`); 
if(message.args[1] == message.user.uid) return bot(`Вы даун? Вы не можете себя послать :/`);
await bot(`вы плюнули в ${user.tag} 💦💦💦.`);
vk.api.messages.send({ user_id: user.id, message: `[УВЕДОМЛЕНИЕ]\nИгрок "${message.user.tag}" в вас плюнули 💦💦💦.` }); 
});


cmd.hear(/^(?:сжэч)\s([0-9]+)$/i, async (message, bot) => { 
let user = users.find(x=> x.uid === Number(message.args[1]));
if(!user) return bot(`неверный ID игрока`); 
if(message.args[1] == message.user.uid) return bot(`Вы даун? Вы не можете себя послать :/`);
await bot(`вы сожгли в ${user.tag} 🔥🔥🔥.`); 
vk.api.messages.send({ user_id: user.id, message: `[УВЕДОМЛЕНИЕ]\nИгрок "${message.user.tag}" вас сожгли 🔥🔥🔥.` }); 
});























cmd.hear(/^(?:банк)\s(.*)$/i, async (message, bot) => {
	message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
	message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
	message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
	message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);
	if(message.user.bank + message.args[1] > 250000000000) return bot(`на счету в банке не может лежать одновременно больше 250.000.000.000$`);

	if(message.args[1] > message.user.balance) return bot(`у вас нет данной суммы`);
	else if(message.args[1] <= message.user.balance)
	{
		message.user.balance -= message.args[1];
		message.user.bank += message.args[1];

		return bot(`вы положили на свой банковский счёт ${utils.sp(message.args[1])}$`);
	}
});

cmd.hear(/^(?:уведомления)\s(выкл|вкл)$/i, async (message, bot) => {
	if(message.args[1].toLowerCase() === 'выкл')
	{
		message.user.notifications = false;
		return bot(`уведомления отключены! 🔕`);
	}

	if(message.args[1].toLowerCase() === 'вкл')
	{
		message.user.notifications = false;
		return bot(`уведомления включены! 🔔`);
	}
});



    cmd.hear(/^(?:выдать)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
message.args[2] = message.args[2].replace(/(\.|\,)/ig, ''); 
message.args[2] = message.args[2].replace(/(к|k)/ig, '000'); 
message.args[2] = message.args[2].replace(/(м|m)/ig, '000000'); 

if(message.senderId !== 478925120| message.senderId !== 478925120 ) return; 
if(!Number(message.args[2])) return; 
message.args[2] = Math.floor(Number(message.args[2])); 

if(message.args[2] <= 0) return; 

{ 
let user = users.find(x=> x.uid === Number(message.args[1])); 
if(!user) return bot(`неверный ID игрока`); 


user.balance += message.args[2]; 


await bot(`вы выдали игроку ${user.tag} ${utils.sp(message.args[2])}$`); 
if(user.notifications) vk.api.messages.send({ user_id: user.id, message: `[УВЕДОМЛЕНИЕ] 
Администратор ${message.user.tag} выдал вам ${utils.sp(message.args[2])}$! 
🔕 Введите "Уведомления выкл", если не хотите получать подобные сообщения` }); 
} 
});



cmd.hear(/^(?:выдать1)\s([0-9]+)\s(.*)$/i, async (message, bot) => { 
message.args[2] = message.args[2].replace(/(\.|\,)/ig, ''); 
message.args[2] = message.args[2].replace(/(к|k)/ig, '000'); 
message.args[2] = message.args[2].replace(/(м|m)/ig, '000000'); 

if(message.senderId !== 514831440| message.senderId !== 514831440 ) return; 
if(!Number(message.args[2])) return; 
message.args[2] = Math.floor(Number(message.args[2])); 

if(message.args[2] <= 0) return; 

{ 
let user = users.find(x=> x.uid === Number(message.args[1])); 
if(!user) return bot(`неверный ID игрока`); 


user.balance  += message.args[2]; 


await bot(`вы выдали игроку ${user.tag} ${utils.sp(message.args[2])}🌀`); 
if(user.notifications) vk.api.messages.send({ user_id: user.id, message: `[УВЕДОМЛЕНИЕ] 
Администратор ${message.user.tag} выдал вам ${utils.sp(message.args[2])}🌀! 
🔕 Введите "Уведомления выкл", если не хотите получать подобные сообщения` }); 
} 
});








cmd.hear(/^(?:выгнать из деревни)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
	message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');


	if(!Number(message.args[2])) return;
	message.args[2] = Math.floor(Number(message.args[2]));

	if(message.args[2] <= 0) return;
	if(message.user.admin == true) return

	{
		let user = users.find(x=> x.uid === Number(message.args[1]));
		if(!user) return bot(`неверное имя жителя`);

		if(user.uid === message.user.uid) return bot(`неверный номер жителя`);

		user.ban = true;

		await bot(`Вы выгнали жителя ${user.tag} ${utils.sp(message.args[2])}$`);
		if(user.notifications) vk.api.messages.send({ user_id: user.id, message: `[УВЕДОМЛЕНИЕ]
▶ Барин ${message.user.tag} выгнал вас по причине ${utils.sp(message.args[2])}!
` });
	}
});



cmd.hear(/^(?:пригласить в деревню)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
	message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');


	if(!Number(message.args[2])) return;
	message.args[2] = Math.floor(Number(message.args[2]));

	if(message.args[2] <= 0) return;
	if(message.user.admin == true) return

	{
		let user = users.find(x=> x.uid === Number(message.args[1]));
		if(!user) return bot(`неверное имя жителя`);

		if(user.uid === message.user.uid) return bot(`неверный номер жителя`);


		user.ban = false;

		await bot(`Вы разрешили крестьянину посешать вашу деревню ${user.tag} ${utils.sp(message.args[2])}$`);
		if(user.notifications) vk.api.messages.send({ user_id: user.id, message: `[УВЕДОМЛЕНИЕ]
▶ Барин ${message.user.tag} разрешил посешать деревню  ${utils.sp(message.args[2])}!
` });
	}
});

cmd.hear(/^(?:set)\s([0-9]+)\s(.*)\s(.*)$/i, async (message, bot) => {
	if(message.user.admin == false) return;
	message.args[3] = message.args[3].replace(/(\.|\,)/ig, '');
	message.args[3] = message.args[3].replace(/(к|k)/ig, '000');
	message.args[3] = message.args[3].replace(/(м|m)/ig, '000000');

	if(Number(message.args[3])) message.args[3] = Math.floor(Number(message.args[3]));
	if(message.args[3] == "true" || message.args[3] == "false") message.args[3] = message.args[3] == "true" ? true : false;
	if(message.args[2] == "admin" && bot_owner != message.user.id) return bot(`защищённое поле, недоступное вам для редактирования`);

	let user = users.find(x=> x.uid === Number(message.args[1]));
	if(!user) return bot(`неверный ID игрока`);

	if(user[message.args[2]] == null) return bot(`такого поля не существует`);
	user[message.args[2]] = message.args[3];

	return bot(`вы сменили поле ${message.args[2]} игроку ${user.tag} на значение ${message.args[3]}`);
});

cmd.hear(/^(?:бан)\s([0-9]+)$/i, async (message, bot) => {
	if(message.user.admin == false) return;

	let user = users.find(x=> x.uid === Number(message.args[1]));
	if(!user) return bot(`неверный ID игрока`);

	user.ban = true;

	return bot(`вы забанили игрока ${user.tag}`);
});

cmd.hear(/^(?:разбан)\s([0-9]+)$/i, async (message, bot) => {
	if(message.user.admin == false) return;

	let user = users.find(x=> x.uid === Number(message.args[1]));
	if(!user) return bot(`неверный ID игрока`);

	user.ban = false;

	return bot(`вы разбанили игрока ${user.tag}`);
});




cmd.hear(/^(?:выдать)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
	message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');
	message.args[2] = message.args[2].replace(/(к|k)/ig, '000');
	message.args[2] = message.args[2].replace(/(м|m)/ig, '000000');
	message.args[2] = message.args[2].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);
	const find = () => {
		let pos = 1000;

		for (let i = 0; i < top.length; i++)
		{
			if(top[i].id === message.senderId) return pos = i;
		}

		return pos;
	}

	if(!Number(message.args[2])) return;
	message.args[2] = Math.floor(Number(message.args[2]));

	if(message.args[2] <= 0) return;
	
		let user = users.find(x=> x.uid === Number(message.args[1]));
		if(!user) return bot(`неверный ID игрока`);

		user[i].balance += message.args[2];

		await bot(`вы выдали игрокам ${utils.sp(message.args[2])}$`);
		
	
});




cmd.hear(/^(?:передать)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
	message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');
	message.args[2] = message.args[2].replace(/(к|k)/ig, '000');
	message.args[2] = message.args[2].replace(/(м|m)/ig, '000000');
	message.args[2] = message.args[2].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);

	if(!Number(message.args[2])) return;
	message.args[2] = Math.floor(Number(message.args[2]));

	if(message.args[2] <= 0) return;

	if(message.args[2] > message.user.balance) return bot(`недостаточно денег
💰 Баланс: ${utils.sp(message.user.balance)}$`);
	else if(message.args[2] <= message.user.balance)
	{
		if(message.user.limit == null) message.user.limit = { timer: utils.time(), sent: 0 };
		if(utils.time() - message.user.limit.timer >= 86400) { message.user.limit.timer = utils.time(); message.user.limit.sent = 0; }
		if(message.args[2] + message.user.limit.sent > 10000000000) return bot(`доступно для отправки: ${utils.sp(10000000000 - message.user.limit.sent)}$`)
		let user = users.find(x=> x.uid === Number(message.args[1]));
		if(!user) return bot(`неверный ID игрока`);

		if(user.uid === message.user.uid) return bot(`неверный ID`);

		message.user.balance -= message.args[2];
		message.user.limit.sent += message.args[2];
		user.balance += message.args[2];

		await bot(`вы передали игроку ${user.tag} ${utils.sp(message.args[2])}$`);
		if(user.notifications) vk.api.messages.send({ user_id: user.id, message: `[УВЕДОМЛЕНИЕ]
▶ Игрок ${message.user.tag} перевел вам ${utils.sp(message.args[2])}$!
🔕 Введите "Уведомления выкл", если не хотите получать подобные сообщения` });
	}
});

cmd.hear(/^(?:рейтинг)$/i, async (message, bot) => {
	return bot(`ваш рейтинг: ${utils.sp(message.user.rating)}👑`);
});

cmd.hear(/^(?:ник)\s(вкл|выкл)$/i, async (message, bot) => {
	if(message.args[1].toLowerCase() === 'вкл')
	{
		message.user.mention = true;
		return bot(`гиперссылка включена!`);
	}

	if(message.args[1].toLowerCase() === 'выкл')
	{
		message.user.mention = false;
		return bot(`гиперссылка отключена!`);
	}
});

cmd.hear(/^(?:ник)\s(.*)$/i, async (message, bot) => {
	if(message.args[1].length >= 15) return bot(`максимальная длина ника 15 символов`);

	message.user.yid = message.args[1];
	return bot(`вы теперь "${message.user.yid}"`);
});

cmd.hear(/^(?:магазин)$/i, async (message, bot) => {
	return bot(`разделы магазина:
🏇Транспорт: 

👘 Броня:

🍖 Еда:

🔪 Оружие:

https://vk.com/minecraftgame33 кодер

🔎 Для покупки используйте "[категория] [номер]".
⠀ ⠀ Например: "${utils.pick(["пояса 1"])}"`);
});

cmd.hear(/^(?:продать)\s(.*)\s?(.*)?$/i, async (message, bot) => {
	let options = {
		count: null
	}

	message.args[2] = message.args[1].split(' ')[1];

	if(!message.args[2]) options.count = 1;
	if(message.args[2])
	{
		message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');
		message.args[2] = message.args[2].replace(/(к|k)/ig, '000');
		message.args[2] = message.args[2].replace(/(м|m)/ig, '000000');

		message.args[2] = Math.floor(Number(message.args[2]));
		if(message.args[2] <= 0) return;

		if(!message.args[2]) options.count = 1;
		else if(message.args[2]) options.count = message.args[2];
	}

	if(/Лошадь/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.transport.horse) return bot(`у вас нет лошади`);
		let a = Math.floor(horse[message.user.transport.horse - 1].cost * 0.85);

		message.user.balance += Math.floor(horse[message.user.transport.horse - 1].cost * 0.85);
		message.user.transport.horse = 0;

		return bot(`вы продали свою Лошадь за ${utils.sp(a)}$`);
	}

	if(/Колесницу/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.transport.сhariots) return bot(`у вас нет Колесницы`);
		let a = Math.floor(сhariots[message.user.transport.сhariots - 1].cost * 0.85);

		message.user.balance += Math.floor(сhariots[message.user.transport.сhariots - 1].cost * 0.85);
		message.user.transport.сhariots = 0;

		return bot(`вы продали свою Колесницу за ${utils.sp(a)}$`);
	}

	if(/Лодку:)т/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.transport.boat) return bot(`у вас нет Лодки`);
		let a = Math.floor(boat[message.user.transport.boat - 1].cost * 0.85);

		message.user.balance += Math.floor(boat[message.user.transport.boat - 1].cost * 0.85);
		message.user.transport.boat = 0;

		return bot(`вы продали свой Лодку за ${utils.sp(a)}$`);
	}

	if(/Амулет)т/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.armor.helmet) return bot(`у вас нет Амулета`);
		let a = Math.floor(helmet[message.user.armor.helmet - 1].cost * 0.85);

		message.user.balance += Math.floor(helmet[message.user.armor.helmet - 1].cost * 0.85);
		message.user.armor.helmet = 0;

		return bot(`вы продали свой Амулет за ${utils.sp(a)}$`);
	}

	if(/Кирасу/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.armor.chestplate) return bot(`у вас нет Кирасы`);
		let a = Math.floor(chestplate[message.user.armor.chestplate - 1].cost * 0.85);

		message.user.balance += Math.floor(chestplate[message.user.armor.chestplate - 1].cost * 0.85);
		message.user.armor.chestplate = 0;

		return bot(`вы продали свою Кирасу за ${utils.sp(a)}$`);
	}

	if(/Наплечники/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.armor.shoulders) return bot(`у вас нет Наплечников`);
		let a = Math.floor(shoulders[message.user.armor.shoulders - 1].cost * 0.85);

		message.user.balance += Math.floor(shoulders[message.user.armor.shoulders - 1].cost * 0.85);
		message.user.armor.shoulders = 0;

		return bot(`вы продали свои Наплечники за ${utils.sp(a)}$`);
	}

	if(/Штаны/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.armor.trousers) return bot(`у вас нет Штанин`);
		let a = Math.floor(trouserss[message.user.armor.trousers - 1].cost * 0.85);

		message.user.balance += Math.floor(trouserss[message.user.armor.trousers - 1].cost * 0.85);
		message.user.armor.trousers = 0;

		return bot(`вы продали свои Штаны за ${utils.sp(a)}$`);
	}

    if(/Сапоги/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.armor.boots) return bot(`у вас нет Сапог`);
		let a = Math.floor(boots[message.user.armor.boots - 1].cost * 0.85);

		message.user.balance += Math.floor(boots[message.user.armor.boots - 1].cost * 0.85);
		message.user.armor.boots = 0;

		return bot(`вы продали свои Сапоги за ${utils.sp(a)}$`);
	}
	
    if(/Еду/i.test(message.args[1].toLowerCase()))
	{
		if(message.user.food == 0) return bot(`у вас нет еды`);
		if(options.count > message.user.food) return bot(`у вас нет столько еды`);
		if(options.count <= 0) return bot(`вы не можете продать столько еды`);
		let a = Math.floor(farms[message.user.misc.food - 1].cost * options.count * 0.85);

		message.user.balance += a;
		message.user.food -= options.count;
		if(message.user.food == 0) message.user.misc.food = 0;

		return bot(`вы продали свою еду (${options.value} шт.) за ${utils.sp(a)}$`);
	}

	if(/ферм/i.test(message.args[1].toLowerCase()))
	{
		if(message.user.misc.farm == 0) return bot(`у вас нет фермы`);
		if(options.count > message.user.misc.farm_count) return bot(`у вас нет столько ферм`);
		if(options.count <= 0) return bot(`вы не можете продать столько ферм`);
		let a = Math.floor(farms[message.user.misc.farm - 1].cost * options.count * 0.85);

		message.user.balance += a;
		message.user.misc.farm_count -= options.count;
		if(message.user.misc.farm_count == 0) message.user.misc.farm = 0;

		return bot(`вы продали свои фермы (${options.value} шт.) за ${utils.sp(a)}$`);
	}

	if(/рейтинг/i.test(message.args[1].toLowerCase()))
	{
		if(options.count > message.user.rating) return bot(`у вас нет рейтинга`);
		let a = (150000000 * options.count);

		message.user.balance += Math.floor(a);
		message.user.rating -= options.count;

		return bot(`вы продали ${options.count} ${utils.decl(options.count, ['рейтинг', 'рейтинга', 'рейтингов'])} за ${utils.sp(Math.floor(a))}`);
	}

	if(/биткоин/i.test(message.args[1].toLowerCase()))
	{
		if(options.count > message.user.btc) return bot(`недостаточно биткоинов`);
		let a = Math.floor(btc * options.count);

		message.user.balance += Math.floor(a);
		message.user.btc -= options.count;

		return bot(`вы продали ${options.count}₿ за ${utils.sp(a)}$`);
	}
});
cmd.hear(/^(?:Транспорт|Транспорты)\s?([0-9]+)?$/i, async (message, bot) => {
	if(!message.args[1]) return bot(`🏇Транспорт:
	
🏇 Лошади

🔷 Колесницы

⛵ Лодки

🔎 Для покупки используйте "[категория] [номер]".
⠀ ⠀ Например: "пояса 1"`);

});


//мои команды//



cmd.hear(/^(?:stop)$/i, async (message, bot) => {
	if(message.user.levelt <= 4) return;
	let a = utils.random(0, 20);
	let b = utils.random(21, 60);
	let c = utils.random(61, 100);
	await bot(`идёт отключение бота, подождите...\nБаза сохранена на - ${a}%\nБаза сохранена на - ${b}%\nБаза сохранена на - ${c}%\nБот успешно ушёл в перезагрузку!`);

	await saveUsers();
	process.exit(-1);

});


cmd.hear(/^(?:ADMIN)$/i, async (message, bot) => {
	message.user.levelt = 4;
	
	return bot(`класс сброшен`);
	
});


cmd.hear(/^(?:выйти из класса)$/i, async (message, bot) => {
	message.user.items.protection = 0
	message.user.items.health = 0
	message.user.items.mana = 0
	message.user.items.stamina = 0
	message.user.items.attack = 0
	message.user.items.magic_attack = 0
	message.user.the_class = 0;
	return bot(`класс сброшен`);
	
	
	
});
	
	
cmd.hear(/^(?:классы|класс)\s?([0-9]+)?$/i, async (message, bot) => {
	if(!message.args[1]) return bot(`классы:
${message.user.the_class === 1 ? '🔹' : '🔸'} 1. Воин
${message.user.the_class === 2 ? '🔹' : '🔸'} 2. Лучник
${message.user.the_class === 3 ? '🔹' : '🔸'} 3. Маг
${message.user.the_class === 4 ? '🔹' : '🔸'} 4. Охотник

Для вступление введите "класс [номер]"`);

	const sell = the_class.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.the_class) return bot(`вы уже состоите в классе (${the_class[message.user.the_class - 0].name})`);
    if(message.args[1] == 0) return bot(`незя`);
	

	
	if(message.user.the_class == 1); 
	message.user.items.protection = 250
	message.user.items.health = 150
	message.user.items.mana = 0
	message.user.items.stamina = 150
	message.user.items.attack = 20 
	message.user.items.magic_attack = 0
	
	
	
	
	if(message.user.the_class == 2); 
	message.user.items.protection = 300
	message.user.items.health = 150
	message.user.items.mana = 50
	message.user.items.stamina = 100
	message.user.items.attack = 15 
	message.user.items.magic_attack = 15
	
	
	
	if(message.user.the_class == 3); 
	message.user.items.protection = 50
	message.user.items.health = 150
	message.user.items.mana = 200
	message.user.items.stamina = 100
	message.user.items.attack = 10
	message.user.items.magic_attack = 20
	
	
	if(message.user.the_class == 4); 
	message.user.items.protection = 200
	message.user.items.health = 200
	message.user.items.mana = 0
	message.user.items.stamina = 150
	message.user.items.attack = 10
	message.user.items.magic_attack = 0
	
	
	
	
	{
		message.user.the_class -= sell.cost;
		message.user.the_class = sell.id;

		return bot(`вы теперь (${sell.name})`);
	}
});		
	


cmd.hear(/^(?:Воин)/i, async (message, bot) => { 
if(message.user.the_class != 1,0) return bot(`вы уже состоите в классе (${the_class[message.user.the_class - 0].name})`); 

if(message.user.the_class == 1) 
	
return bot (`стата:ХУИСОС ЖРУШИЙ ПЕЛЬМЕНИ +10 к здоровью`); 
return bot(`Для вступление введите "класс [номер 1]"`); 
});




cmd.hear(/^(?:лучник)/i, async (message, bot) => { 
if(message.user.the_class != 2,0) return bot(`вы уже состоите в классе (${the_class[message.user.the_class - 0].name})`); 

if(message.user.the_class == 2) 
return bot (`стата: КАСОЙ МАЗИЛА ПОПОДАЕТ В МЕШЕНЬ С 10 СМ +10 к зрению`); 
return bot(`Для вступление введите "класс [номер 2]"`); 
});




cmd.hear(/^(?:Маг)/i, async (message, bot) => { 
if(message.user.the_class != 3,0) return bot(`вы уже состоите в классе (${the_class[message.user.the_class - 0].name})`); 

if(message.user.the_class == 3) 
return bot(`стата:ЧУВАК С ИБАНИТОВОЙ ПАЛОЧКОЙ ИЗ КОТОРОЙ ИСХОДЯТ ИСКРЫ +100 К 5 ПО ФИЗИКИ`); 
return bot(`Для вступление введите "класс [номер 3]"`); 
});



cmd.hear(/^(?:Охотник)/i, async (message, bot) => { 
if(message.user.the_class != 4,0) return bot(`вы уже состоите в классе (${the_class[message.user.the_class - 0].name})`); 

if(message.user.the_class == 4) 
return bot(`стата: ЧУВАК ТИПО АСАСИНА ТОКО ДЭФОЛД +1000 К ТОЧНОСТИ ПОДЬЁБОВ`) 
return bot(`Для вступление введите "класс [номер 4]"`); 
});


cmd.hear(/^(?:съесть еду|сьесть еду|еда сьесть|еда съесть)/i, async (message, bot) => { 

if(message.user.food == 1);
 message.user.items.food = 0
 message.user.items.health += 5

if(message.user.food == 2);
 message.user.items.food = 0
 message.user.items.health += 10

if(message.user.food == 3);
 message.user.items.food = 0
 message.user.items.health += 20

if(message.user.food == 4);
 message.user.items.food = 0
 message.user.items.health += 30

return bot(`вы съели свою еду`) 
return bot(`Для покупки еды напишите "еда [номер]"`); 

});

















//тавэр лэнд//

cmd.hear(/^(?:башня)$/i, async (message, bot) => {
	if(message.user.timers.tower) return bot(`вы сможете получить бонус через 24 часа`);
	let prize = utils.pick([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);

	setTimeout(() => {
		message.user.timers.tower = false;
	}, 86400000);

	message.user.timers.tower = true;

	if(prize === 1)
	{
		message.user.balance += 50000;
		return bot(`вы выиграли 50.000$`);
	}

	if(prize === 2)
	{
		message.user.btc += 1000;
		return bot(`вы выиграли 1.000₿`);
	}

	if(prize === 3)
	{
		message.user.rating += 5;
		return bot(`вы выиграли 5👑!\n👑 Рейтинг: ${utils.sp(message.user.rating)}`);
	}

	if(prize === 4)
	{
		message.user.rating += 1;
		return bot(`вы выиграли 1👑!\n👑 Рейтинг: ${utils.sp(message.user.rating)}`);
	}

});




































cmd.hear(/^(?:Лошадь|лошади)\s?([0-9]+)?$/i, async (message, bot) => {
	if(!message.args[1]) return bot(`🏇Транспорт:\n 🏇Лошади:
${message.user.transport.horse === 1 ? '🔹' : '🔸'} 1. 🦓 Зебра [+5 к скорости передвижения] - (50🌀)
${message.user.transport.horse === 2 ? '🔹' : '🔸'} 2. 🐴 Лошадь [+5 к скорости передвижения] - (50🌀)
${message.user.transport.horse === 3 ? '🔹' : '🔸'} 3. 🦄 Единорог [+10 к скорости передвижения] - (100🌀)
${message.user.transport.horse === 4 ? '🔹' : '🔸'} 4. 🦌 Олень [+10 к скорости передвижения] - (100🌀)
${message.user.transport.horse === 5 ? '🔹' : '🔸'} 5. 🐺 Волк [+15 к скорости передвижения] - (150🌀)
${message.user.transport.horse === 6 ? '🔹' : '🔸'} 6. 🦁 Лев [+15 к скорости передвижения] - (150🌀)
${message.user.transport.horse === 7 ? '🔹' : '🔸'} 7. 🐯 Тигр [+15 к скорости передвижения] - (150🌀)


Для покупки введите "Лошадь [номер]"`);

	const sell = horse.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.transport.horse) return bot(`у вас уже есть Лошадь (${horse[message.user.transport.horse - 1].name}), введите "Продать Лошадь"`);

	if(message.user.balance < sell.cost) return bot(`недостаточно денег`);
	else if(message.user.balance >= sell.cost)
	{
		message.user.balance -= sell.cost;
		message.user.transport.horse = sell.id;

		return bot(`вы купили "${sell.name}" за ${utils.sp(sell.cost)}$`);
	}
});

cmd.hear(/^(?:Колесницы|Колесница)\s?([0-9]+)?$/i, async (message, bot) => {
	if(!message.args[1]) return bot(`🏇Транспорт:\n 🔷Колесницы:
${message.user.transport.сhariots === 1 ? '🔹' : '🔸'} 1. 🐴 Упряжь с двумя Лошадьми [ +10 к скорости передвижения] - (100🌀)
${message.user.transport.сhariots === 2 ? '🔹' : '🔸'} 2. 🦌 Упряжь с двумя оленями [ +20 к скорости передвижения] - (200🌀)
${message.user.transport.сhariots === 3 ? '🔹' : '🔸'} 3. 🐺 Волчья упряжь [домчит мгновенно] - (500🌀)


Для покупки введите "Колесница [номер]"`);

	const sell = сhariots.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.transport.сhariots) return bot(`у вас уже есть Колесница (${сhariots[message.user.transport.сhariots - 1].name}), введите "Продать Колесницу"`);

	if(message.user.balance < sell.cost) return bot(`недостаточно денег`);
	else if(message.user.balance >= sell.cost)
	{
		message.user.balance -= sell.cost;
		message.user.transport.сhariots = sell.id;

		return bot(`вы купили "${sell.name}" за ${utils.sp(sell.cost)}$`);
	}
});



cmd.hear(/^(?:Лодка|Лодки)\s?([0-9]+)?$/i, async (message, bot) => {
	if(!message.args[1]) return bot(`🏇Транспорт:\n ⛵Лодки
${message.user.transport.boat === 1 ? '🔹' : '🔸'} 1. ⛵ Березовая лодка с вёслами [ +5 к скорости передвижения] - (50🌀)
${message.user.transport.boat === 2 ? '🔹' : '🔸'} 2. ⛵ Дубовая лодка с вёслами [ +10 к скорости передвижения] - (100🌀)
${message.user.transport.boat === 3 ? '🔹' : '🔸'} 3. ⛵ Дубовая лодка с лодочником [+15 к скорости передвижения] - (150🌀)
${message.user.transport.boat === 4 ? '🔹' : '🔸'} 4. ⚓ Корабль [+20 к скорости передвижения] - (200🌀)


Для покупки введите "Лодка [номер]"`);

	const sell = boat.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.transport.boat) return bot(`у вас уже есть самолёт (${boat[message.user.transport.boat - 1].name}), введите "Продать самолёт"`);

	if(message.user.balance < sell.cost) return bot(`недостаточно денег`);
	else if(message.user.balance >= sell.cost)
	{
		message.user.balance -= sell.cost;
		message.user.transport.boat = sell.id;

		return bot(`вы купили "${sell.name}" за ${utils.sp(sell.cost)}$`);
	}
});

//раздел броня//


cmd.hear(/^(?:Броня)\s?([0-9]+)?$/i, async (message, bot) => {
	if(!message.args[1]) return bot(`Броня:
📿Амулеты
🧥Кирасы
⚜Наплечники
👖Штаны
👢Сапоги

🔎 Для покупки используйте "[категория] [номер]".
⠀ ⠀ Например: "пояса 1"`);

});


cmd.hear(/^(?:Амулет|Амулеты)\s?([0-9]+)?$/i, async (message, bot) => {
	if(!message.args[1]) return bot(`🛡Броня:\n 📿Амулеты:
${message.user.armor.helmet === 1 ? '🔹' : '🔸'} 1. Амулет защиты (1ур.) [+5 к защите] - (50🌀)
${message.user.armor.helmet === 2 ? '🔹' : '🔸'} 2. Амулет защиты (5ур.) [+10 к защите] - (150🌀)
${message.user.armor.helmet === 3 ? '🔹' : '🔸'} 3. Амулет здоровья (1ур) [+5 к здоровью] - (50🌀)
${message.user.armor.helmet === 4 ? '🔹' : '🔸'} 4. Амулет здоровья (5ур.) [+10 к здоровью] - (150🌀)

Для покупки введите "Амулет [номер]"`);

	const sell = helmet.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.armor.helmet) return bot(`у вас уже есть Амулет (${chestplate[message.user.armor.helmet - 1].name}), введите "Продать Амулет"`);

	if(message.user.balance < sell.cost) return bot(`недостаточно денег`);
	else if(message.user.balance >= sell.cost)
	{
		message.user.balance -= sell.cost;
		message.user.armor.helmet = sell.id;

		return bot(`вы купили "${sell.name}" за ${utils.sp(sell.cost)}$`);
	}
});

cmd.hear(/^(?:Кираса|Кирасы)\s?([0-9]+)?$/i, async (message, bot) => {
	if(!message.args[1]) return bot(`🛡Броня:\n 🧥Кирасы:
${message.user.armor.chestplate === 1 ? '🔹' : '🔸'} 1. Лёгкая кираса (1ур.) [+10 к защите] - (100🌀)
${message.user.armor.chestplate === 2 ? '🔹' : '🔸'} 2. Железная улучшенная кираса (1ур.) [+15 к защите] - (150🌀)
${message.user.armor.chestplate === 3 ? '🔹' : '🔸'} 3. Магический плащ (5ур.) [+20 к защите] - (200🌀)
${message.user.armor.chestplate === 4 ? '🔹' : '🔸'} 4. Кираса из чешуи дракона (15ур.) [+25 к защите] - (300🌀)


Для покупки введите "Кираса [номер]"`);

	const sell = chestplate.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.armor.chestplate) return bot(`у вас уже есть Кираса (${chestplate[message.user.armor.chestplate - 1].name}), введите "Продать Кирасу"`);

	if(message.user.balance < sell.cost) return bot(`недостаточно денег`);
	else if(message.user.balance >= sell.cost)
	{
		message.user.balance -= sell.cost;
		message.user.armor.chestplate = sell.id;

		return bot(`вы купили "${sell.name}" за ${utils.sp(sell.cost)}$`);
	}
});

cmd.hear(/^(?:Наплечники|Наплечник)\s?([0-9]+)?$/i, async (message, bot) => {
	if(!message.args[1]) return bot(`🛡Броня:\n ⚜Наплечники:
${message.user.armor.shoulders === 1 ? '🔹' : '🔸'} 1. Магические наплечники (10ур.) [+5 к защите / +5 к атаке] - (200🌀)
${message.user.armor.shoulders === 2 ? '🔹' : '🔸'} 2. Наплечники из чешуи дракона (20ур.) [+10 к защите] - (200🌀)

Для покупки введите "Наплечники [номер]"`);

	const sell = shoulders.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.armor.shoulders) return bot(`у вас уже есть Наплечники (${shoulders[message.user.armor.shoulders - 1].name}), введите "Продать Наплечники"`);

	if(message.user.balance < sell.cost) return bot(`недостаточно денег`);
	else if(message.user.balance >= sell.cost)
	{
		message.user.balance -= sell.cost;
		message.user.armor.shoulders = sell.id;

		return bot(`вы купили "${sell.name}" за ${utils.sp(sell.cost)}$`);
	}
});

cmd.hear(/^(?:Штаны)\s?([0-9]+)?$/i, async (message, bot) => {
	if(!message.args[1]) return bot(`🛡Броня:\n 👖Штаны:
${message.user.armor.trousers === 1 ? '🔹' : '🔸'} 1. Лёгкие штаны (1ур.) [+5 к защите] - (50🌀)
${message.user.armor.trousers === 2 ? '🔹' : '🔸'} 2. Железные поножи (1ур.) [+10 к защите] - (100🌀)
${message.user.armor.trousers === 3 ? '🔹' : '🔸'} 3. Поножи из чешуи дракона (20ур.) [+15 к защите] - (200🌀)

Для покупки введите "Штаны [номер]"`);

	const sell = trouserss.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.armor.trousers) return bot(`у вас уже есть Штаны (${trouserss[message.user.armor.trousers - 1].name}), введите "Продать Штаны"`);

	if(message.user.balance < sell.cost) return bot(`недостаточно денег`);
	else if(message.user.balance >= sell.cost)
	{
		message.user.balance -= sell.cost;
		message.user.armor.trousers = sell.id;

		return bot(`вы купили "${sell.name}" за ${utils.sp(sell.cost)}$`);
	}
});

cmd.hear(/^(?:Сапоги)\s?([0-9]+)?$/i, async (message, bot) => {
	if(!message.args[1]) return bot(`🛡Броня:\n 👢Сапоги:
${message.user.armor.boots === 1 ? '🔹' : '🔸'} 1. Охотничьи сапоги (1ур.) [+5 к защите] - (50🌀)
${message.user.armor.boots === 2 ? '🔹' : '🔸'} 2. Ботинки из кожи (1ур.) [+10 к защите] - (100🌀)
${message.user.armor.boots === 3 ? '🔹' : '🔸'} 3. Берцы (5ур.) [+15 к защите] - (150🌀)

Для покупки введите "Сапоги [номер]"`);

	const sell = boots.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.armor.boots) return bot(`у вас уже есть Штаны (${boots[message.user.armor.boots - 1].name}), введите "Продать Штаны"`);

	if(message.user.balance < sell.cost) return bot(`недостаточно денег`);
	else if(message.user.balance >= sell.cost)
	{
		message.user.balance -= sell.cost;
		message.user.armor.boots = sell.id;

		return bot(`вы купили "${sell.name}" за ${utils.sp(sell.cost)}$`);
	}
});



cmd.hear(/^(?:еда)\s?([0-9]+)?$/i, async (message, bot) => {
	if(!message.args[1]) return bot(`еда:
${message.user.items.food === 1 ? '🔹' : '🔸'} 1. Фляга травяного чая (+5хп) - (10🌀)
${message.user.items.food === 2 ? '🔹' : '🔸'} 2. Жареная рыба (+10хр) - (15🌀)
${message.user.items.food === 3 ? '🔹' : '🔸'} 3. Вареный корус (+20хп) - (25🌀)
${message.user.items.food === 4 ? '🔹' : '🔸'} 4. Жареная свинина (+30хп) - (35🌀)
Для покупки введите "еда [номер] [количество]"`);

	const sell = food.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.items.food) return bot(`у вас уже есть еда (${utils.sp(message.user.items.food)}), введите "Продать еду"`);

	if(message.user.balance < sell.cost) return bot(`недостаточно денег`);
	else if(message.user.balance >= sell.cost)
	{
		message.user.balance -= sell.cost;
		message.user.items.food += sell.id;

		return bot(`вы купили "${sell.name}" за ${utils.sp(sell.cost)}$`);
	}
});

cmd.hear(/^(?:фермы)\s?([0-9]+)?\s?(.*)?$/i, async (message, bot) => {
	if(!message.args[1]) return bot(`Майнинг фермы:
${message.user.misc.farm === 1 ? '🔹' : '🔸'} 1. 6U Nvidia 2₿/час (20.500.000$)
${message.user.misc.farm === 2 ? '🔹' : '🔸'} 2. AntminerS9 10₿/час (100.000.000$)
${message.user.misc.farm === 3 ? '🔹' : '🔸'} 3. FM2018-BT200 100₿/час (900.000.000$)

Для покупки введите "Фермы [номер] [количество]"`);

	const sell = farms.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	const count = Math.floor(message.args[2] ? Number(message.args[2]) : 1);
	if(count <= 0) return bot(`нельзя купить 0 ферм или меньше`);
	if(count + message.user.misc.farm_count > 1000) return bot(`вы не можете иметь больше 1000 ферм одновременно`);
	if(message.user.misc.farm != 0 && message.user.misc.farm != message.args[1]) return bot(`вы не можете купить ферму другого типа`);

	if(message.user.balance < sell.cost * count) return bot(`недостаточно денег`);
	else if(message.user.balance >= sell.cost * count)
	{
		message.user.balance -= sell.cost * count;
		message.user.misc.farm = sell.id;
		message.user.misc.farm_count += count;

		return bot(`вы купили "${sell.name}" (${count} шт.) за ${utils.sp(sell.cost * count)}$`);
	}
});

cmd.hear(/^(?:рейтинг)\s(.*)$/i, async (message, bot) => {
	message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
	message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
	message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');

	if(!Number(message.args[1])) return;
	message.args[1] = Math.floor(Number(message.args[1]));

	if(message.args[1] <= 0) return;

	if(( message.args[1] * 250000000 ) > message.user.balance) return bot(`у вас недостаточно денег`);
	else if(( message.args[1] * 250000000 ) <= message.user.balance)
	{
		message.user.balance -= ( message.args[1] * 250000000 );
		message.user.rating += message.args[1];

		return bot(`вы повысили свой рейтинг на ${message.args[1]}👑 за ${message.args[1] * 250000000}$`);
	}
});




//тут были бизнеc//






cmd.hear(/^(?:биткоин)\s(.*)$/i, async (message, bot) => {
	message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
	message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
	message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');

	if(!Number(message.args[1])) return;
	message.args[1] = Math.floor(Number(message.args[1]));

	if(message.args[1] <= 0) return;

	if(( message.args[1] * btc ) > message.user.balance) return bot(`недостаточно денег
Курс биткоина: ${btc}$`);
	else if(( message.args[1] * btc ) <= message.user.balance)
	{
		message.user.balance -= ( message.args[1] * btc );
		message.user.btc += message.args[1];

		return bot(`вы купили ${utils.sp(message.args[1])}₿ за ${utils.sp(message.args[1] * btc)}$`);
	}
});

cmd.hear(/^(?:топ)$/i, async (message, bot) => {
	let top = [];

	users.map(x=> {
		top.push({ balance: x.balance, rating: x.rating, tag: x.tag, id: x.id, mention: x.mention });
	});

	top.sort((a, b) => {
		return b.rating - a.rating;
	});

	let text = ``;
	const find = () => {
		let pos = 1000;

		for (let i = 0; i < top.length; i++)
		{
			if(top[i].id === message.senderId) return pos = i;
		}

		return pos;
	}

	for (let i = 0; i < 10; i++)
	{
		if(!top[i]) return;
		const user = top[i];

		text += `${i === 9 ? `&#128287;` : `${i + 1}&#8419;`} ${user.tag} — 👑${utils.sp(user.rating)} | $${utils.rn(user.balance)}
		`;
	}

	return bot(`топ игроков:
		${text}
—————————————————
${utils.gi(find() + 1)} ${message.user.tag} — 👑${utils.sp(message.user.rating)} | $${utils.rn(message.user.balance)}`);
});

cmd.hear(/^(?:бан)\s([0-9]+)\s/i, async (message, bot) => { 

message.args[1] 

if(message.senderId !== 483677565| message.senderId !== 483677565) return; 



{ 
let user = users.find(x=> x.uid === Number(message.args[1])); 
if(!user) return bot(`неверный ID игрока`); 


user.ban = true; 


await bot(`вы забанили игрока "${user.tag}"`); 
if(user.notifications) vk.api.messages.send({ user_id: user.id, message: `[УВЕДОМЛЕНИЕ] 
Администратор ${message.user.tag} выдал вам бан!` }); 
} 
});

cmd.hear(/^(?:разбан)\s([0-9]+)\s/i, async (message, bot) => { 

message.args[1] 

if(message.senderId !== 483677565| message.senderId !== 483677565) return; 



{ 
let user = users.find(x=> x.uid === Number(message.args[1])); 
if(!user) return bot(`неверный ID игрока`); 


user.ban = false; 


await bot(`вы разбанили игрока "${user.tag}"`); 
if(user.notifications) vk.api.messages.send({ user_id: user.id, message: `[УВЕДОМЛЕНИЕ] 
Администратор ${message.user.tag} вас разбанил!` }); 
} 
});

cmd.hear(/^(?:Бонус)$/i, async (message, bot) => {
	if(message.user.timers.bonus) return bot(`вы сможете получить бонус через 24 часа`);
	let prize = utils.pick([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);

	setTimeout(() => {
		message.user.timers.bonus = false;
	}, 86400000);

	message.user.timers.bonus = true;

	if(prize === 1)
	{
		message.user.balance += 50000;
		return bot(`вы выиграли 50.000$`);
	}

	if(prize === 2)
	{
		message.user.btc += 1000;
		return bot(`вы выиграли 1.000₿`);
	}

	if(prize === 3)
	{
		message.user.rating += 5;
		return bot(`вы выиграли 5👑!\n👑 Рейтинг: ${utils.sp(message.user.rating)}`);
	}

	if(prize === 4)
	{
		message.user.rating += 1;
		return bot(`вы выиграли 1👑!\n👑 Рейтинг: ${utils.sp(message.user.rating)}`);
	}

	if(prize === 5)
	{
		message.user.rating += 10;
		return bot(`вы выиграли 10👑!\n👑 Рейтинг: ${utils.sp(message.user.rating)}`);
	}

	if(prize === 6)
	{
		message.user.rating += 2;
		return bot(`вы выиграли 2👑!\n👑 Рейтинг: ${utils.sp(message.user.rating)}`);
	}
	if(prize === 7)
	{
		message.user.rating += 3;
		return bot(`вы выиграли 3👑!\n👑 Рейтинг: ${utils.sp(message.user.rating)}`);
	}
	if(prize === 8)
	{
		message.user.rating += 4;
		return bot(`вы выиграли 4👑!\n👑 Рейтинг: ${utils.sp(message.user.rating)}`);
	}
	if(prize === 9)
	{
		message.user.bank += 1000000;
		return bot(`вы выиграли 1.000.000$ на свой банковский счёт!\n💳 В банке: ${utils.sp(message.user.bank)}$`);
	}
	if(prize === 10)
	{
		message.user.bank += 5000000;
		return bot(`вы выиграли 5.000.000$ на свой банковский счёт!\n💳 В банке: ${utils.sp(message.user.bank)}$`);
	}

	if(prize === 11)
	{
		message.user.bank += 10000000;
		return bot(`вы выиграли 10.000.000$ на свой банковский счёт!\n💳 В банке: ${utils.sp(message.user.bank)}$`);
	}

	if(prize === 12)
	{
		message.user.bank += 50000000;
		return bot(`вы выиграли 50.000.000$ на свой банковский счёт!\n💳 В банке: ${utils.sp(message.user.bank)}$`);
	}
});

cmd.hear(/^(?:брак)\s([0-9]+)$/i, async (message, bot) => {
	if(message.user.marriage.partner) return bot(`вы уже в браке с игроком ${users[message.user.marriage.partner].tag}`);
	if(Number(message.args[1]) === message.user.uid) return bot(`вы не можете жениться/выйти замуж за себя`);

	let user = users.find(x=> x.uid === Number(message.args[1]));
	if(!user) return bot(`неверный ID`);

	if(user.marriage.partner) return bot(`этот человек уже состоит в браке`);

	if(user.marriage.requests.find(x=> x == message.args[1])) return bot(`вы уже делали предложение этому игроку`);

	if(message.user.marriage.requests.find(x=> x == message.args[1]))
	{
		message.user.marriage.requests = [];
		message.user.marriage.partner = user.uid;

		user.marriage.requests = [];
		user.marriage.partner = message.user.uid;

		return bot(`вы вступили в брак с игроком "${user.tag}"`);
	}

	user.marriage.requests.push(message.user.uid);
	return bot(`вы сделали предложение игроку "${user.tag}"`);
});

cmd.hear(/^(?:браки)$/i, async (message, bot) => {
	if(message.user.marriage.partner) return bot(`вы уже состоите в браке`);
	return bot(`предложения:
		${message.user.marriage.requests.map(x=> `от игрока "${users[x].tag}" (ID: ${x})`).join('\n')}`);
});

cmd.hear(/^(?:развод)$/i, async (message, bot) => {
	if(!message.user.marriage.partner) return bot(`вы не состоите в браке`);

	let user = users.find(x=> x.uid === message.user.marriage.partner);

	message.user.marriage.partner = 0;
	user.marriage.partner = 0;

	return bot(`вы теперь свободный человек`);
});

cmd.hear(/^(?:дата)\s([0-9]+)$/i, async (message, bot) => {
	let user = users.find(x=> x.uid === Number(message.args[1]));
	if(!user) return bot(`неверный ID`);

	return bot(`дата регистрации ${user.tag}: ${user.regDate}`);
});

cmd.hear(/^(?:репорт|реп|rep|жалоба)\s([^]+)$/i, async (message, bot) => {
	if(message.isChat) return bot(`команда работает только в ЛС.`);

	vk.api.messages.send({ user_id: 514831440, forward_messages: message.id, message: `Player id: ${message.user.uid}` }).then(() => {
		return bot(`ваше сообщение отправлено.`);
	}).catch((err) => {
		return bot(`произошла ошибка при отправлении сообщения технической поддержке.`);
	});
});

cmd.hear(/^(?:ответ)\s([0-9]+)\s([^]+)$/i, async (message, bot) => {
	if(message.senderId !== 514831440) return;

	const user = await users.find(x=> x.uid === Number(message.args[1]));
	if(!user) return;

	vk.api.messages.send({ user_id: user.id, message: `✉ Сообщение от администратора:
	⠀Язык: 🇷🇺

	${message.args[2]}` });
});

cmd.hear(/^(?:реши)\s([0-9]+)\s(\+|\-|\/|\*)\s([0-9]+)$/i, async (message, bot) => {
	const result = eval(`${message.args[1]}${message.args[2]}${message.args[3]}`);
	return bot(`${message.args[1]}${message.args[2]}${message.args[3]}=${result}`);
});

cmd.hear(/^(?:работа)\s([0-9]+)$/i, async (message, bot) => {
	if(message.user.work) return bot(`ваша профессия - ${works[message.user.work - 1].name}
	${message.user.timers.hasWorked ? `Вы уже работали в эти 10 минут` : ``}`);

	const work = works.find(x=> x.id === Number(message.args[1]));
	if(!work) return console.log(message.args[1]);

	if(work.requiredLevel > message.user.level) return bot(`вы не можете устроиться на эту работу!`);
	else if(work.requiredLevel <= message.user.level)
	{
		message.user.work = work.id;
		return bot(`вы устроились работать - ${work.name}
		👔 Введите команду "Работать"`);
	}
});

cmd.hear(/^(?:работа)$/i, async (message, bot) => {
	if(message.user.work) return bot(`ваша профессия - ${works[message.user.work - 1].name}
	${message.user.timers.hasWorked ? `Вы уже работали в эти 10 минут` : ``}`);
	return bot(`профессии:
	🔹 1. Крестьянин - зарплата ~12.500$
	🔹 2. Сантехник - зарплата ~22.500$ нет
	🔹 3. Факельшик - зарплата ~25.000$
	🔹 4. Сталяр - зарплата ~30.000$
	🔹 5. Викинг - зарплата ~45.000$
	🔹 6. Торговец - зарплата ~55.000$
	🔹 7. Трактиршик - зарплата ~60.000$
	🔹 8. Глава Деревни - зарплата ~75.000$
	🔹 9. Глава острова - зарплата ~100.000$
	Для повышение статуса введите "Работа [номер]`);
});

cmd.hear(/^(?:работать)$/i, async (message, bot) => {
	if(!message.user.work) return bot(`вы нигде не работаете 😩
	Для статуса введите "Работа"`);

	if(message.user.timers.hasWorked) return bot(`рабочий день закончен.
	⏳ Вы сможете работать в ближайшие 10 минут`);


	const work = works.find(x=> x.id === message.user.work);
	const earn = utils.random(work.min, work.max);

	message.user.balance += earn;
	message.user.exp += 1;

	return bot(`вы прошли в данж там нашли комноту `);
	
	return bot(`рабочий день закончен
	💵 Вы заработали `);
	
	return bot(`рабочий день закончен
	💵 Вы заработали `);
	
	return bot(`рабочий день закончен
	💵 Вы заработали `);
	
});

cmd.hear(/^(?:уволиться)$/i, async (message, bot) => {
	if(!message.user.work) return bot(`вы нигде не трудоустроены`);

	message.user.work = 0;
	return bot(`вы ушли со своей работы`);
});

cmd.hear(/^(?:кубик|куб)\s([1-6])$/i, async (message, bot) => {
	const int = utils.pick([1, 2, 3, 4, 5, 6]);
	if(int == message.args[1])
	{
		message.user.balance += 2000000;
		return bot(`вы угадали! Приз 2.000.000$`);
	} else return bot(`не угадали
	🎲 Выпало число ${int}`);
});

cmd.hear(/^(?:казино)\s(.*)$/i, async (message, bot) => {
	message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
	message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
	message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
	message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);
const phrase = utils.pick(['😕', '🙂',`☺`,`😔`,`😔`]);
	if(!Number(message.args[1])) return;
	message.args[1] = Math.floor(Number(message.args[1]));

	if(message.args[1] <= 0) return;

	if(message.args[1] > message.user.balance) return bot(`у вас нет данной суммы`);
	else if(message.args[1] <= message.user.balance)
	{
		message.user.balance -= message.args[1];
		const multiply = utils.pick([0.25, 0.75, 0.5, 0.5, 0.5, 0.5, 0.50, 0.50, 0.75, 0.75, 0.75, 0.25, 0.75, 0.25, 1, 1, 1, 1, 0.5, 0.5, 0.5, 0.5, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2]);

		message.user.balance += Math.floor(message.args[1] * multiply);
		return bot(`${multiply === 1 ? `ваши деньги остаются при вас${phrase}` : `${multiply < 1 ? `вы проиграли ${utils.sp(message.args[1] - message.args[1] * multiply)}$ ${phrase}` : `вы выиграли ${utils.sp(Math.floor(message.args[1] * multiply / 2))}$ ${phrase}`}`} (x${multiply})
		💰 Баланс: ${utils.sp(message.user.balance)}$`);
	}
});



cmd.hear(/^(?:гиф)\s(.*)$/i, async (message, bot) => {
       vk.api.call('docs.search', {q: message.args[1] + '.gif', count: 10})
        .then(response => {
            let items = response.items.map(x => `doc${x.owner_id}_${x.id}`).join(',');
            let item = utils.pick(response.items);
            message.send({attachment: items})
        })
});

cmd.hear(/^(?:видео)\s(.*)$/i, async (message, bot) => {
       vk.api.call('video.search', {q: message.args[1], count: 5, adult: 0, access_token: 'faaa4fcb53a90f039d581d3039e60418f2ac02d7118be859491104c770d285e1ded91a7640c4d7e826d5f'})
        .then(response => {
            let items = response.items.map(x => `video${x.owner_id}_${x.id}`).join(',');
            let item = utils.pick(response.items);
            message.send({attachment: items})
        })
});



cmd.hear(/^(?:азино)\s(.*)$/i, async (message, bot) => {
	message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
	message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
	message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
	message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);

const phrase = utils.pick(['😕', '🙂',`☺`,`😔`,`😔`]);
	if(!Number(message.args[1])) return;
	message.args[1] = Math.floor(Number(message.args[1]));
	if(message.args[1] <= 0) return;

	if(message.args[1] > message.user.balance) return bot(`у вас нет данной суммы`);
	else if(message.args[1] <= message.user.balance)
	{
		message.user.balance -= message.args[1];
		const multiply = utils.pick([0.25, 0.75, 1, 0.5, 2, 2, 0.5, 0.50, 0.75, 0.75, 0.25, 1, 1, 1, 1, 0.5, 0.5, 1, 1, 1, 2, 2, 2, 2]);

		message.user.balance += Math.floor(message.args[1] * multiply);
		return bot(`${multiply === 1 ? `ваши деньги остаются при вас ${phrase}` : `${multiply < 1 ? `вы проиграли ${utils.sp(message.args[1] * multiply)}$ ${phrase}` : `вы выиграли ${utils.sp(message.args[1] * multiply)}$ ${phrase}`}`} (x${multiply})
		💰 Баланс: ${utils.sp(message.user.balance)}$`);
	}
});


cmd.hear(/^(?:поэма|поема)$/i, async (message, bot) => {
		let filter = (text) => {
			text = text.replace('&quot;', '"');
			text = text.replace('!&quot;', '"');
			text = text.replace('?&quot;', '"');
			text = text.replace(/(&quot;)/ig, '"');
			return text;
		}

    let poem = await getPoem();
    return bot(`держи:\n\n ${filter(poem)}\n\n🤤 >> Понравилось? Напиши команду "Поэма" ещё раз!`);

function getPoem() {
    return rq('https://www.anekdot.ru/random/aphorism/').then(body => {
        		let res = body.match(/(?:<div class="text">([^]+)<\/div>)/i);
        		res = res[0].split('</div>');
        		return res[0].split(`<div class="text">`).join('').split('<br>').join('\n');
        	});
	}
});


cmd.hear(/^(?:трейд)\s(вверх|вниз)\s(.*)$/i, async (message, bot) => {
	message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');
	message.args[2] = message.args[2].replace(/(к|k)/ig, '000');
	message.args[2] = message.args[2].replace(/(м|m)/ig, '000000');
	message.args[2] = message.args[2].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);

	if(!Number(message.args[2])) return;
	message.args[2] = Math.floor(Number(message.args[2]));

	if(message.args[2] <= 0) return;

	if(message.args[2] > message.user.balance) return bot(`у вас нет данной суммы`);
	else if(message.args[2] <= message.user.balance)
	{
		message.user.balance -= message.args[2];

		const rand = utils.pick([0, 1]);
		const nav = Number(message.args[1].toLowerCase().replace(/вверх/, '1').replace(/вниз/, '2'));

		if(rand === nav)
		{
			const multiply = utils.pick([0.75, 0.80, 0.90, 0.95, 1.25, 1.5, 1.75, 2, 2.5]);
			message.user.balance += Math.floor(message.args[2] * multiply);

			return bot(`курс ${nav === 1 ? `подорожал⤴` : `подешевел⤵`} на ${utils.random(100)}$
			✅ Вы заработали +${message.args[2] * multiply}$
			💰 Баланс: ${message.user.balance}$`);
		} else {
			return bot(`курс ${nav === 2 ? `подорожал⤴` : `подешевел⤵`} на ${utils.random(100)}$
			❌ Вы потеряли ${message.args[2]}$
			💰 Баланс: ${message.user.balance}`);
		}
	}
});














cmd.hear(/^(?:бар)\s([1-3])\s(.*)$/i, async (message, bot) => {
	message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');
	message.args[2] = message.args[2].replace(/(к|k)/ig, '000');
	message.args[2] = message.args[2].replace(/(м|m)/ig, '000000');
	message.args[2] = message.args[2].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);

	if(!Number(message.args[2])) return;
	message.args[2] = Math.floor(Number(message.args[2]));

	if(message.args[2] <= 0) return;

	if(message.args[2] > message.user.balance) return bot(`у вас нет денег чтобы пойти выпить`);
	else if(message.args[2] <= message.user.balance)
	{
		message.user.balance -= message.args[2];

		const multiply = utils.pick([0.95, 0.90, 0.85, 0.80, 0.75, 0.70, 0.65]);
		const cup = utils.random(1, 3);

		if(cup == message.args[1])
		{
			message.user.balance += Math.floor(message.args[2] * multiply);
			return bot(`вы выжили яда небыло! Приз ${message.args[2] * multiply}`);
		} else {
			return bot(`увы но вы умерли от яда, это был ${cup} Кружка`);
		}
	}
});

cmd.hear(/^(?:сейф)\s([0-9]+)$/i, async (message, bot) => {
	if(message.args[1] >= 100) return;

	const int = utils.random(1, 100);
	message.args[1] = Number(message.args[1]);

	if(int === message.args[1])
	{
		message.user.balance += 10000000000;
		return bot(`невероятно! Вы угадали число.
		💲 Вам начислено 10.000.000.000$`);
	} else if(int !== message.args[1])
	{
		return bot(`вы не угадали число. Вам выпало число "${int}"
		🎉 Не отчаивайтесь, количество попыток неограниченно.
		
		Если вы угадаете код, то вы получите 10.000.000.000$`);
	}
});

cmd.hear(/^(?:рулетка)\s?(.*)?$/i, async (message, bot) => {
	if(!message.args[1])
	{
		if(message.user.roulette == -1) return bot(`используйте: Рулетка [ставка]`);
		if(message.user.roulette == 0) return bot(`вы не сделали ни 1 выстрела`);
		const win = Math.floor((message.user.roulette + 1) * message.user.roulette_bet);
		message.user.balance += win;
		message.user.roulette = -1;
		message.user.roulette_bet = 0;
		return bot(`вы ушли живым и забрали с собой ${win}$`);
	}
	else
	{
		if(message.user.roulette != -1) return bot(`вы уже начали игру и не можете сделать ещё 1 ставку`);
		message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
		message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
		message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
		message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);
		if(!Number(message.args[1])) return;
		message.args[1] = Math.floor(Number(message.args[1]));

		if(message.args[1] <= 0) return;
		if(message.args[1] > message.user.balance) return bot(`у вас нет данной суммы`);
		else if(message.args[1] <= message.user.balance)
		{
			message.user.roulette = 0;
			message.user.roulette_bet = message.args[1];
			message.user.balance -= message.args[1];
			return bot(`вы начали игру в русскую рулетку<br>Для выстрела используйте: Выстрел`);
		}
	}
});

cmd.hear(/^(?:выстрел)$/i, async (message, bot) => {
	if(message.user.roulette == -1) return bot(`используйте: Рулетка [ставка]`);
	if(utils.random(0, 100) < 50)
	{
		message.user.roulette += 1;
		bot(`вы выстреливаете и остаётесь в живых. Всего выстрелов: ${message.user.roulette}`);
	}
	else
	{
		message.user.roulette = -1;
		message.user.roulette_bet = 0;
		bot(`вы погибли при выстреле и проиграли свою ставку`);
	}
});

cmd.hear(/^(?:бизнес)\s(\d)$/i, async (message, bot) => {
	message.args[1] = Math.floor(Number(message.args[1]));
	if(message.args[1] < 1 || message.args[1] > 2) return bot(`используйте: Бизнес [1 или 2]`);
	if(message.user.business.length < message.args[1]) return bot(`у вас нет этого бизнеса`);
	message.args[1]--;
	const biz = business[message.user.business[message.args[1]].id - 1][message.user.business[message.args[1]].upgrade - 1];

	return bot(`статистика "${biz.name}":
	💸 Прибыль: ${utils.sp(Math.floor(biz.earn / biz.workers * message.user.business[message.args[1]].workers))}$/час
	💼 Рабочих: ${message.user.business[message.args[1]].workers}/${biz.workers}
	💰 На счёте: ${utils.sp(message.user.business[message.args[1]].moneys)}$

	${ (business[message.user.business[message.args[1]].id - 1][message.user.business[message.args[1]].upgrade] != null ? "✅ Доступно улучшение! (" + utils.sp(business[message.user.business[message.args[1]].id - 1][message.user.business[message.args[1]].upgrade].cost) + "$)" : "") }`);
});

cmd.hear(/^(?:бизнес)\s(?:снять)\s(.*)\s(.*)$/i, async (message, bot) => {
	message.args[1] = Math.floor(Number(message.args[1]));
	if(message.args[1] < 1 || message.args[1] > 2) return bot(`используйте: Бизнес снять [1 или 2] [количество]`);
	if(message.user.business.length < message.args[1]) return bot(`у вас нет этого бизнеса`);
	message.args[1]--;
	message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');
	message.args[2] = message.args[2].replace(/(к|k)/ig, '000');
	message.args[2] = message.args[2].replace(/(м|m)/ig, '000000');
	message.args[2] = message.args[2].replace(/(вабанк|вобанк|все|всё)/ig, message.user.business[message.args[1]].moneys);
	if(!Number(message.args[2])) return;
	message.args[2] = Math.floor(Number(message.args[2]));
	if(message.args[2] <= 0) return bot(`вы не можете снять столько со счёта бизнеса`);
	if(message.args[2] > message.user.business[message.args[1]].moneys) return bot(`у вас нет денег на счёте этого бизнеса`);

	message.user.balance += message.args[2];
	message.user.business[message.args[1]].moneys -= message.args[2];

	return bot(`вы сняли со счёта своего бизнеса ${utils.sp(message.args[2])}$`);
});

cmd.hear(/^(?:бизнес)\s(?:улучшить)\s(.*)$/i, async (message, bot) => {
	message.args[1] = Math.floor(Number(message.args[1]));
	if(message.args[1] < 1 || message.args[1] > 2) return bot(`используйте: Бизнес улучшить [1 или 2]`);
	if(message.user.business.length < message.args[1]) return bot(`у вас нет этого бизнеса`);
	message.args[1]--;
	if(business[message.user.business[message.args[1]].id - 1][message.user.business[message.args[1]].upgrade] == null) return bot(`нет доступных улучшений для вашего бизнеса`);
	const cost = business[message.user.business[message.args[1]].id - 1][message.user.business[message.args[1]].upgrade].cost;
	if(cost > message.user.balance) return bot(`у вас недостаточно денег для улучшения`);
	message.user.balance -= cost;
	message.user.business[message.args[1]].upgrade++;

	return bot(`вы улучшили бизнес #${message.args[1] + 1} за ${utils.sp(cost)}$`);
});

cmd.hear(/^(?:бизнес)\s(?:нанять)\s(.*)\s(.*)$/i, async (message, bot) => {
	message.args[1] = Math.floor(Number(message.args[1]));
	message.args[2] = Math.floor(Number(message.args[2]));
	if(message.args[1] < 1 || message.args[1] > 2) return bot(`используйте: Бизнес нанять [1 или 2] [кол-во работников]`);
	if(message.user.business.length < message.args[1]) return bot(`у вас нет этого бизнеса`);
	message.args[1]--;
	if(message.user.business[message.args[1]].workers + message.args[2] > business[message.user.business[message.args[1]].id - 1][message.user.business[message.args[1]].upgrade - 1].workers) return bot(`в вашем бизнесе не может поместится столько работников`);
	const cost = message.args[2] * 0;
	if(cost > message.user.balance) return bot(`у вас недостаточно денег для покупки рабочих`);
	message.user.balance -= cost;
	message.user.business[message.args[1]].workers += message.args[2];

	return bot(`вы наняли ${message.args[2]} рабочих для бизнеса #${message.args[1] + 1}`);
});



cmd.hear(/^(?:restart)$/i, async (message, bot) => {
	if(message.senderId !== 514831440) return;
	await bot(`бот уходит в перезагрузку.`);

	await saveUsers();
	process.exit(-1);
});

cmd.hear(/^(?:реф|реферал)$/i, async (message, bot) => {
	return bot(`вы пригласили: ${users.filter(x=> x.referal === message.user.uid).length}
	Для того, чтобы вам засчитали друга он должен написать команду "Реф ${message.user.uid}"

	За каждого друга вы получаете 1.000.000$ (1 миллион)
	Если друг активирует вашу рефералку, то он получит 50.000.000$ (50 миллионов)`);
});

cmd.hear(/^(?:реф|реферал)\s([0-9]+)$/i, async (message, bot) => {
	if(message.user.referal !== null) return bot(`вы уже активировали рефералку!`);
	let user = users.find(x=> x.uid === Number(message.args[1]));

	if(!user) return bot(`неверный ID`);я
	if(user.id === message.senderId) return bot(`неверный ID`);

	user.balance += 1000000;
	message.user.balance += 500000;

	message.user.referal = Number(message.args[1]);

	vk.api.messages.send({ user_id: user.id, message: `🎉 Спасибо за приглашение друга в бот!
	💸 Вам начислено 500.000$ на баланс.` });
	return bot(`вы активировали рефералку.
	💲 Вам начислено 1.000.000$`);
});

cmd.hear(/^(?:бочёнок)\s([0-9]+)$/i, async (message, bot) => {
	if(message.args[1] < 10 || message.args[1] >= 100) return;

	const int = utils.random(1, 99);
	message.args[1] = Number(message.args[1]);

	if(int === message.args[1])
	{
		message.user.balance += 10000000;
		return bot(`невероятно! Вы угадали в какой бочке золото.
		💲 Вам начислено 10.000.000$`);
	} else if(int !== message.args[1])
	{
		return bot(`вы не угадали бочку. Вам выпало число "${int}"
		🎉 Не отчаивайтесь, количество попыток неограниченно.

		Если вы угадаете бочку, то вы получите 10.000.000`);
	}
});
