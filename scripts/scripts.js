// ui элементы
const ui = [
    /// кнопки
    // язык
    { "ui": "button", "name": "lang", "page": [ 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], "ru": "EN", "en": "RU" },
    // next
    { "ui": "button", "name": "start", "page": 1, "ru": "СТАРТ", "en": "NEW GAME" },
    { "ui": "button", "name": "nextClose", "page": [3, 5, 7, 9, 11], "ru": "ЗАКРЫТЬ", "en": "CLOSE" },
    { "ui": "button", "name": "nextOpen", "page": [2, 4, 6, 8, 10], "ru": "ОТКРЫТЬ", "en": "OPEN" },
    { "ui": "button", "name": "finish", "page": 12, "ru": "НОВАЯ ИГРА", "en": "NEW GAME" },
    // back
    { "ui": "button", "name": "new-game", "page": [2, 3, 4, 5, 6, 7, 8, 9, 10, 11] },
    /// надписи
    // главный заголовок
    { "ui": "title", "name": "big-title1", "page": [2, 3], "ru": "ВЫБОР СЛОВА", "en": "WORD CHOICE" },
    { "ui": "title", "name": "big-title2", "page": [4, 5], "ru": "ВОПРОСЫ ДЛЯ ПЕРВОЙ КОМАНДЫ", "en": "QUESTIONS FOR THE FIRST TEAM" },
    { "ui": "title", "name": "big-title3", "page": [6, 7], "ru": "ВОПРОСЫ ДЛЯ ВТОРОЙ КОМАНДЫ", "en": "QUESTIONS FOR THE SECOND TEAM" },
    { "ui": "title", "name": "big-title4", "page": [8, 9, 10, 11], "ru": "ЗАМЕНИТЬ ВСЕ ВОПРОСЫ?", "en": "REPLACE ALL QUESTIONS?" },
    { "ui": "title", "name": "big-title5", "page": 12, "ru": "НАЧАТЬ ЗАНОВО", "en": "START OVER" },
    // описание
    { "ui": "title", "name": "small-title1", "page": 2, "ru": "откройте карточку со словами", "en": "open this card with words" },
    { "ui": "title", "name": "small-title2", "page": 3, "ru": "совместно выберите одно слово из списка", "en": "choose one word from the list together" },
    { "ui": "title", "name": "small-title3", "page": [4, 6], "ru": "откройте карточку со всеми вопросами", "en": "open the card with all the questions" },
    { "ui": "title", "name": "small-title4", "page": [5, 7], "ru": "запишите все вопросы, затем закройте карточку", "en": "write down all the questions, then close the card" },
    { "ui": "title", "name": "small-title5", "page": [8, 10], "ru": "один раз вы можете заменить все вопросы на новые", "en": "once you can replace all questions with new ones" },
    { "ui": "title", "name": "small-title6", "page": [9, 11], "ru": "вычеркните старые вопросы и запишите новые", "en": "cross out old questions and write new ones" },
    { "ui": "title", "name": "small-title7", "page": 12, "ru": "начните новую игру", "en": "start a new game" },
    // cписки
    { "ui": 'ol', "name": "ol", "page": [3, 5, 7, 9, 11] },
    // фон  карточки
    { "ui": "card-fon", "name": "card-fon", "page": [2, 3, 4, 5, 6, 7, 8, 9, 10, 11] },
    { "ui": "picture", "name": "wordsImg", "page": 2 },
    { "ui": "picture", "name": "quationsImg", "page": [4, 6, 8, 10] },
    { "ui": "picture", "name": "logo", "page": [1] },
]
// база данных карточек
const bdCards = [
    /// Список слов8
    { "card": "words", "cardNumber": 1, "wordNumber": 1, "ru": "Мрамор", "en": "Marble" },
    { "card": "words", "cardNumber": 1, "wordNumber": 2, "ru": "Зонтик", "en": "Umbrella" },
    { "card": "words", "cardNumber": 1, "wordNumber": 3, "ru": "Гусеница", "en": "Caterpillar" },
    { "card": "words", "cardNumber": 1, "wordNumber": 4, "ru": "Чили", "en": "Chile" },
    { "card": "words", "cardNumber": 1, "wordNumber": 5, "ru": "Штопор", "en": "Corkscrew" },
    { "card": "words", "cardNumber": 1, "wordNumber": 6, "ru": "Классная доска", "en": "Chalkboard" },
    { "card": "words", "cardNumber": 2, "wordNumber": 1, "ru": "Кактус", "en": "Cactus" },
    { "card": "words", "cardNumber": 2, "wordNumber": 2, "ru": "Иглу", "en": "Igloo" },
    { "card": "words", "cardNumber": 2, "wordNumber": 3, "ru": "Попкорн", "en": "Popcorn" },
    { "card": "words", "cardNumber": 2, "wordNumber": 4, "ru": "Пингвин", "en": "Penguin" },
    { "card": "words", "cardNumber": 2, "wordNumber": 5, "ru": "Наушники", "en": "Headphones" },
    { "card": "words", "cardNumber": 2, "wordNumber": 6, "ru": "Тигр", "en": "Tiger" },
    { "card": "words", "cardNumber": 3, "wordNumber": 1, "ru": "Печь", "en": "Quill" },
    { "card": "words", "cardNumber": 3, "wordNumber": 2, "ru": "Перо", "en": "Feather" },
    { "card": "words", "cardNumber": 3, "wordNumber": 3, "ru": "Метроном", "en": "Metronome" },
    { "card": "words", "cardNumber": 3, "wordNumber": 4, "ru": "Сыр", "en": "Cheese" },
    { "card": "words", "cardNumber": 3, "wordNumber": 5, "ru": "Палочка", "en": "Wand" },
    { "card": "words", "cardNumber": 3, "wordNumber": 6, "ru": "Утка", "en": "Duck" },
    { "card": "words", "cardNumber": 4, "wordNumber": 1, "ru": "Свинья", "en": "Pig" },
    { "card": "words", "cardNumber": 4, "wordNumber": 2, "ru": "Подушка", "en": "Pillow" },
    { "card": "words", "cardNumber": 4, "wordNumber": 3, "ru": "Подлодка", "en": "Submarine" },
    { "card": "words", "cardNumber": 4, "wordNumber": 4, "ru": "Айсберг", "en": "Iceberg" },
    { "card": "words", "cardNumber": 4, "wordNumber": 5, "ru": "Небоскрёб", "en": "Skyscraper" },
    { "card": "words", "cardNumber": 4, "wordNumber": 6, "ru": "Шляпа", "en": "Hat" },
    { "card": "words", "cardNumber": 5, "wordNumber": 1, "ru": "Монокль", "en": "Monocle " },
    { "card": "words", "cardNumber": 5, "wordNumber": 2, "ru": "Перо", "en": "Feather" },
    { "card": "words", "cardNumber": 5, "wordNumber": 3, "ru": "Книга", "en": "Book" },
    { "card": "words", "cardNumber": 5, "wordNumber": 4, "ru": "Мелок", "en": "Chalk" },
    { "card": "words", "cardNumber": 5, "wordNumber": 5, "ru": "Сани", "en": "Sleigh" },
    { "card": "words", "cardNumber": 5, "wordNumber": 6, "ru": "Морской конёк", "en": "Seahorse" },
    { "card": "words", "cardNumber": 6, "wordNumber": 1, "ru": "Корона", "en": "Crown" },
    { "card": "words", "cardNumber": 6, "wordNumber": 2, "ru": "Воздушный шар", "en": "Balloon" },
    { "card": "words", "cardNumber": 6, "wordNumber": 3, "ru": "Изгородь", "en": "Fence" },
    { "card": "words", "cardNumber": 6, "wordNumber": 4, "ru": "Степлер", "en": "Stapler" },
    { "card": "words", "cardNumber": 6, "wordNumber": 5, "ru": "Молоток", "en": "Hammer" },
    { "card": "words", "cardNumber": 6, "wordNumber": 6, "ru": "Шлем", "en": "Helmet" },
    { "card": "words", "cardNumber": 7, "wordNumber": 1, "ru": "Гриль", "en": "Grill" },
    { "card": "words", "cardNumber": 7, "wordNumber": 2, "ru": "Печь", "en": "Stove" },
    { "card": "words", "cardNumber": 7, "wordNumber": 3, "ru": "Принтер", "en": "Printer" },
    { "card": "words", "cardNumber": 7, "wordNumber": 4, "ru": "Яйцо", "en": "Egg" },
    { "card": "words", "cardNumber": 7, "wordNumber": 5, "ru": "Поводок", "en": "Leash" },
    { "card": "words", "cardNumber": 7, "wordNumber": 6, "ru": "Термос", "en": "Thermos" },
    { "card": "words", "cardNumber": 8, "wordNumber": 1, "ru": "Гидрант", "en": "Hydrant" },
    { "card": "words", "cardNumber": 8, "wordNumber": 2, "ru": "Карандаш", "en": "Pencil" },
    { "card": "words", "cardNumber": 8, "wordNumber": 3, "ru": "Сарай", "en": "Barn" },
    { "card": "words", "cardNumber": 8, "wordNumber": 4, "ru": "Печать", "en": "Seal" },
    { "card": "words", "cardNumber": 8, "wordNumber": 5, "ru": "Утконос", "en": "Platypus" },
    { "card": "words", "cardNumber": 8, "wordNumber": 6, "ru": "Правитель", "en": "Governor" },
    { "card": "words", "cardNumber": 9, "wordNumber": 1, "ru": "Трофей", "en": " Trophy" },
    { "card": "words", "cardNumber": 9, "wordNumber": 2, "ru": "Пума", "en": " Cougar" },
    { "card": "words", "cardNumber": 9, "wordNumber": 3, "ru": "Лиса", "en": " Fox" },
    { "card": "words", "cardNumber": 9, "wordNumber": 4, "ru": "Бумажник", "en": " Wallet" },
    { "card": "words", "cardNumber": 9, "wordNumber": 5, "ru": "Павлин", "en": " Peacock" },
    { "card": "words", "cardNumber": 9, "wordNumber": 6, "ru": "Рубин", "en": " Ruby" },
    { "card": "words", "cardNumber": 10, "wordNumber": 1, "ru": "Пила", "en": " Saw" },
    { "card": "words", "cardNumber": 10, "wordNumber": 2, "ru": "Вишня", "en": " Cherry" },
    { "card": "words", "cardNumber": 10, "wordNumber": 3, "ru": "Живой мертвец", "en": " Living dead" },
    { "card": "words", "cardNumber": 10, "wordNumber": 4, "ru": "Стервятник", "en": " Vulture" },
    { "card": "words", "cardNumber": 10, "wordNumber": 5, "ru": "Нож", "en": " Knife" },
    { "card": "words", "cardNumber": 10, "wordNumber": 6, "ru": "Крыса", "en": " Rat" },
    { "card": "words", "cardNumber": 11, "wordNumber": 1, "ru": "Камера", "en": " Camera" },
    { "card": "words", "cardNumber": 11, "wordNumber": 2, "ru": "Вилка", "en": " Fork" },
    { "card": "words", "cardNumber": 11, "wordNumber": 3, "ru": "Кит", "en": " Whale" },
    { "card": "words", "cardNumber": 11, "wordNumber": 4, "ru": "Спичка", "en": " Match" },
    { "card": "words", "cardNumber": 11, "wordNumber": 5, "ru": "Часы", "en": " Clock" },
    { "card": "words", "cardNumber": 11, "wordNumber": 6, "ru": "Зеркало", "en": " Mirror" },
    { "card": "words", "cardNumber": 12, "wordNumber": 1, "ru": "Гамак", "en": " Hammock" },
    { "card": "words", "cardNumber": 12, "wordNumber": 2, "ru": "Коробка", "en": " Box" },
    { "card": "words", "cardNumber": 12, "wordNumber": 3, "ru": "Keкс", "en": " Cupcake" },
    { "card": "words", "cardNumber": 12, "wordNumber": 4, "ru": "Арфа", "en": " Harp" },
    { "card": "words", "cardNumber": 12, "wordNumber": 5, "ru": "Динозавр", "en": " Dinosaur" },
    { "card": "words", "cardNumber": 12, "wordNumber": 6, "ru": "Гитара", "en": " Guitar" },
    { "card": "words", "cardNumber": 13, "wordNumber": 1, "ru": "Цепь", "en": " Chain " },
    { "card": "words", "cardNumber": 13, "wordNumber": 2, "ru": "Мёд", "en": "Honey" },
    { "card": "words", "cardNumber": 13, "wordNumber": 3, "ru": "Палатка", "en": "Tent" },
    { "card": "words", "cardNumber": 13, "wordNumber": 4, "ru": "Полотенце", "en": "Towel" },
    { "card": "words", "cardNumber": 13, "wordNumber": 5, "ru": "Арахис", "en": "Peanut" },
    { "card": "words", "cardNumber": 13, "wordNumber": 6, "ru": "Пицца", "en": "Pizza" },
    { "card": "words", "cardNumber": 14, "wordNumber": 1, "ru": "Ковш", "en": "Ladle" },
    { "card": "words", "cardNumber": 14, "wordNumber": 2, "ru": "Статуя", "en": "Statue" },
    { "card": "words", "cardNumber": 14, "wordNumber": 3, "ru": "Кошка", "en": "Cat" },
    { "card": "words", "cardNumber": 14, "wordNumber": 4, "ru": "Раковина", "en": "Sink" },
    { "card": "words", "cardNumber": 14, "wordNumber": 5, "ru": "Колбаса", "en": "Sausage" },
    { "card": "words", "cardNumber": 14, "wordNumber": 6, "ru": "Олень", "en": "Deer" },
    { "card": "words", "cardNumber": 15, "wordNumber": 1, "ru": "Гаечный ключ", "en": "Wrench" },
    { "card": "words", "cardNumber": 15, "wordNumber": 2, "ru": "Якорь", "en": "Anchor" },
    { "card": "words", "cardNumber": 15, "wordNumber": 3, "ru": "Лестница", "en": "Ladder" },
    { "card": "words", "cardNumber": 15, "wordNumber": 4, "ru": "Череп", "en": "Skull" },
    { "card": "words", "cardNumber": 15, "wordNumber": 5, "ru": "Свист", "en": "Whistle" },
    { "card": "words", "cardNumber": 15, "wordNumber": 6, "ru": "Скрипка", "en": "Violin" },
    { "card": "words", "cardNumber": 16, "wordNumber": 1, "ru": "Хлеб", "en": "Bread" },
    { "card": "words", "cardNumber": 16, "wordNumber": 2, "ru": "Униформа", "en": "Uniform" },
    { "card": "words", "cardNumber": 16, "wordNumber": 3, "ru": "Палочки", "en": "Chopsticks" },
    { "card": "words", "cardNumber": 16, "wordNumber": 4, "ru": "Вилы", "en": "Pitchfork" },
    { "card": "words", "cardNumber": 16, "wordNumber": 5, "ru": "Инвалидное кресло", "en": "Wheelchair" },
    { "card": "words", "cardNumber": 16, "wordNumber": 6, "ru": "Медуза", "en": "Jellyfish " },
    { "card": "words", "cardNumber": 17, "wordNumber": 1, "ru": "Журнал", "en": "Magazine" },
    { "card": "words", "cardNumber": 17, "wordNumber": 2, "ru": "Солнце", "en": "Sun" },
    { "card": "words", "cardNumber": 17, "wordNumber": 3, "ru": "Лошадь", "en": "Horse" },
    { "card": "words", "cardNumber": 17, "wordNumber": 4, "ru": "Облако", "en": "Cloud" },
    { "card": "words", "cardNumber": 17, "wordNumber": 5, "ru": "Метла", "en": "Broom" },
    { "card": "words", "cardNumber": 17, "wordNumber": 6, "ru": "Морская звезда", "en": "Starfish" },
    { "card": "words", "cardNumber": 18, "wordNumber": 1, "ru": "Ананас", "en": "Pineapple" },
    { "card": "words", "cardNumber": 18, "wordNumber": 2, "ru": "Червь", "en": "Worm" },
    { "card": "words", "cardNumber": 18, "wordNumber": 3, "ru": "Мышь", "en": "Mouse" },
    { "card": "words", "cardNumber": 18, "wordNumber": 4, "ru": "Кокос", "en": "Coconut" },
    { "card": "words", "cardNumber": 18, "wordNumber": 5, "ru": "Единорог", "en": "Unicorn" },
    { "card": "words", "cardNumber": 18, "wordNumber": 6, "ru": "Компас", "en": "Compass" },
    { "card": "words", "cardNumber": 19, "wordNumber": 1, "ru": "Радио", "en": "Radio" },
    { "card": "words", "cardNumber": 19, "wordNumber": 2, "ru": "Шоколад", "en": "Chocolate" },
    { "card": "words", "cardNumber": 19, "wordNumber": 3, "ru": "Карта", "en": "Map" },
    { "card": "words", "cardNumber": 19, "wordNumber": 4, "ru": "Цветок", "en": "Flower" },
    { "card": "words", "cardNumber": 19, "wordNumber": 5, "ru": "Телевидение", "en": "Television" },
    { "card": "words", "cardNumber": 19, "wordNumber": 6, "ru": "Словарь", "en": "Dictionary" },
    { "card": "words", "cardNumber": 20, "wordNumber": 1, "ru": "Плащ", "en": "Cloak" },
    { "card": "words", "cardNumber": 20, "wordNumber": 2, "ru": "Гонг", "en": "Gong" },
    { "card": "words", "cardNumber": 20, "wordNumber": 3, "ru": "Комар", "en": "Mosquito" },
    { "card": "words", "cardNumber": 20, "wordNumber": 4, "ru": "Кофе", "en": "Coffee" },
    { "card": "words", "cardNumber": 20, "wordNumber": 5, "ru": "Велосипед", "en": "Bicycle" },
    { "card": "words", "cardNumber": 20, "wordNumber": 6, "ru": "Душ", "en": "Shower" },
    { "card": "words", "cardNumber": 21, "wordNumber": 1, "ru": "Кровать", "en": " Bed" },
    { "card": "words", "cardNumber": 21, "wordNumber": 2, "ru": "Звонок", "en": "Ring" },
    { "card": "words", "cardNumber": 21, "wordNumber": 3, "ru": "Туалет", "en": "Toilet" },
    { "card": "words", "cardNumber": 21, "wordNumber": 4, "ru": "Глобус", "en": "Globe" },
    { "card": "words", "cardNumber": 21, "wordNumber": 5, "ru": "Дверь", "en": "Door" },
    { "card": "words", "cardNumber": 21, "wordNumber": 6, "ru": "Носок", "en": "Sock" },
    { "card": "words", "cardNumber": 22, "wordNumber": 1, "ru": "Сандалии", "en": "Sandal" },
    { "card": "words", "cardNumber": 22, "wordNumber": 2, "ru": "Ворона", "en": "Crow" },
    { "card": "words", "cardNumber": 22, "wordNumber": 3, "ru": "Батарея", "en": "Battery" },
    { "card": "words", "cardNumber": 22, "wordNumber": 4, "ru": "Тапочка", "en": "Slipper" },
    { "card": "words", "cardNumber": 22, "wordNumber": 5, "ru": "Баскетбол", "en": "Basketball" },
    { "card": "words", "cardNumber": 22, "wordNumber": 6, "ru": "Снежный шар", "en": "Snowball" },
    { "card": "words", "cardNumber": 23, "wordNumber": 1, "ru": "Страус", "en": "Ostrich" },
    { "card": "words", "cardNumber": 23, "wordNumber": 2, "ru": "Панда", "en": "Panda" },
    { "card": "words", "cardNumber": 23, "wordNumber": 3, "ru": "Чек", "en": "Check" },
    { "card": "words", "cardNumber": 23, "wordNumber": 4, "ru": "Горка", "en": "Slide" },
    { "card": "words", "cardNumber": 23, "wordNumber": 5, "ru": "Скелет", "en": "Skeleton" },
    { "card": "words", "cardNumber": 23, "wordNumber": 6, "ru": "Мост", "en": "Bridge" },
    { "card": "words", "cardNumber": 24, "wordNumber": 1, "ru": "Компьютер", "en": "Computer" },
    { "card": "words", "cardNumber": 24, "wordNumber": 2, "ru": "Барабан", "en": "Drum" },
    { "card": "words", "cardNumber": 24, "wordNumber": 3, "ru": "Чемодан", "en": "Suitcase" },
    { "card": "words", "cardNumber": 24, "wordNumber": 4, "ru": "Одеяло", "en": "Blanket" },
    { "card": "words", "cardNumber": 24, "wordNumber": 5, "ru": "Подсолнух", "en": "Sunflower" },
    { "card": "words", "cardNumber": 24, "wordNumber": 6, "ru": "Сэндвич", "en": "Sandwich" },
    { "card": "words", "cardNumber": 25, "wordNumber": 1, "ru": "Верёвка", "en": "Rope " },
    { "card": "words", "cardNumber": 25, "wordNumber": 2, "ru": "Автомобиль", "en": "Car" },
    { "card": "words", "cardNumber": 25, "wordNumber": 3, "ru": "Фартук", "en": "Apron" },
    { "card": "words", "cardNumber": 25, "wordNumber": 4, "ru": "Снорклинг", "en": "Snorkeling" },
    { "card": "words", "cardNumber": 25, "wordNumber": 5, "ru": "Сосулька", "en": "Icicle" },
    { "card": "words", "cardNumber": 25, "wordNumber": 6, "ru": "Рубашка", "en": "Shirt" },
    { "card": "words", "cardNumber": 26, "wordNumber": 1, "ru": "Щит", "en": "Shield" },
    { "card": "words", "cardNumber": 26, "wordNumber": 2, "ru": "Алмаз", "en": "Diamond" },
    { "card": "words", "cardNumber": 26, "wordNumber": 3, "ru": "Гребень", "en": "Comb" },
    { "card": "words", "cardNumber": 26, "wordNumber": 4, "ru": "Черепаха", "en": "Turtle" },
    { "card": "words", "cardNumber": 26, "wordNumber": 5, "ru": "Шина", "en": "Tire" },
    { "card": "words", "cardNumber": 26, "wordNumber": 6, "ru": "Кирпич", "en": "Brick" },
    { "card": "words", "cardNumber": 27, "wordNumber": 1, "ru": "Шпатель", "en": "Spatula" },
    { "card": "words", "cardNumber": 27, "wordNumber": 2, "ru": "Жирафа", "en": "Giraffe" },
    { "card": "words", "cardNumber": 27, "wordNumber": 3, "ru": "Спутник", "en": "Satellite" },
    { "card": "words", "cardNumber": 27, "wordNumber": 4, "ru": "Меч", "en": "Sword" },
    { "card": "words", "cardNumber": 27, "wordNumber": 5, "ru": "Сердце", "en": "Heart" },
    { "card": "words", "cardNumber": 27, "wordNumber": 6, "ru": "Замок", "en": "Castle" },
    { "card": "words", "cardNumber": 28, "wordNumber": 1, "ru": "Ботинок", "en": "Boot" },
    { "card": "words", "cardNumber": 28, "wordNumber": 2, "ru": "Крыша", "en": "Roof" },
    { "card": "words", "cardNumber": 28, "wordNumber": 3, "ru": "Ожерелье", "en": "Necklace" },
    { "card": "words", "cardNumber": 28, "wordNumber": 4, "ru": "Грузовик", "en": "Truck" },
    { "card": "words", "cardNumber": 28, "wordNumber": 5, "ru": "Мельница", "en": "Windmill" },
    { "card": "words", "cardNumber": 28, "wordNumber": 6, "ru": "Фонарь", "en": "Lamp" },
    { "card": "words", "cardNumber": 29, "wordNumber": 1, "ru": "Качели", "en": "Seesaw" },
    { "card": "words", "cardNumber": 29, "wordNumber": 2, "ru": "Дракон", "en": "Dragon " },
    { "card": "words", "cardNumber": 29, "wordNumber": 3, "ru": "Отбойный молоток", "en": "Jackhammer" },
    { "card": "words", "cardNumber": 29, "wordNumber": 4, "ru": "Молния", "en": "Zipper" },
    { "card": "words", "cardNumber": 29, "wordNumber": 5, "ru": "Песок", "en": "Sand" },
    { "card": "words", "cardNumber": 29, "wordNumber": 6, "ru": "Кальмар", "en": "Squid" },
    { "card": "words", "cardNumber": 30, "wordNumber": 1, "ru": "Мозг", "en": "Brain" },
    { "card": "words", "cardNumber": 30, "wordNumber": 2, "ru": "Камин", "en": "Fireplace" },
    { "card": "words", "cardNumber": 30, "wordNumber": 3, "ru": "Газонокосилка", "en": "Lawnmower" },
    { "card": "words", "cardNumber": 30, "wordNumber": 4, "ru": "Ноутбук", "en": "Laptop" },
    { "card": "words", "cardNumber": 30, "wordNumber": 5, "ru": "Стул", "en": "Chair" },
    { "card": "words", "cardNumber": 30, "wordNumber": 6, "ru": "Ворота", "en": "Gate" },
    { "card": "words", "cardNumber": 31, "wordNumber": 1, "ru": "Салфетка", "en": "Tissue" },
    { "card": "words", "cardNumber": 31, "wordNumber": 2, "ru": "Микрофон", "en": "Microphone" },
    { "card": "words", "cardNumber": 31, "wordNumber": 3, "ru": "Жёлудь", "en": "Acorn" },
    { "card": "words", "cardNumber": 31, "wordNumber": 4, "ru": "Контейнер", "en": "Lunchbox" },
    { "card": "words", "cardNumber": 31, "wordNumber": 5, "ru": "Бабочка", "en": "Butterfly" },
    { "card": "words", "cardNumber": 31, "wordNumber": 6, "ru": "Ископаемое", "en": "Fossil" },
    { "card": "words", "cardNumber": 32, "wordNumber": 1, "ru": "Жук", "en": "Beetle" },
    { "card": "words", "cardNumber": 32, "wordNumber": 2, "ru": "Рамен", "en": "Ramen" },
    { "card": "words", "cardNumber": 32, "wordNumber": 3, "ru": "Катапульта", "en": "Catapult" },
    { "card": "words", "cardNumber": 32, "wordNumber": 4, "ru": "Арбуз", "en": "Watermelon" },
    { "card": "words", "cardNumber": 32, "wordNumber": 5, "ru": "Фонарик", "en": "Flashlight" },
    { "card": "words", "cardNumber": 32, "wordNumber": 6, "ru": "Дельфин", "en": "Dolphin" },
    { "card": "words", "cardNumber": 33, "wordNumber": 1, "ru": "Микроволновка", "en": "Microwave " },
    { "card": "words", "cardNumber": 33, "wordNumber": 2, "ru": "Подиум", "en": "Podium" },
    { "card": "words", "cardNumber": 33, "wordNumber": 3, "ru": "Вино", "en": "Wine" },
    { "card": "words", "cardNumber": 33, "wordNumber": 4, "ru": "Яблоко", "en": "Apple" },
    { "card": "words", "cardNumber": 33, "wordNumber": 5, "ru": "Блин", "en": "Pancake" },
    { "card": "words", "cardNumber": 33, "wordNumber": 6, "ru": "Роза", "en": "Rose" },
    { "card": "words", "cardNumber": 34, "wordNumber": 1, "ru": "Голубь", "en": "Pigeon" },
    { "card": "words", "cardNumber": 34, "wordNumber": 2, "ru": "Судно", "en": "Ship" },
    { "card": "words", "cardNumber": 34, "wordNumber": 3, "ru": "Мыло", "en": "Soap" },
    { "card": "words", "cardNumber": 34, "wordNumber": 4, "ru": "Телескоп", "en": "Telescope" },
    { "card": "words", "cardNumber": 34, "wordNumber": 5, "ru": "Зубочистка", "en": "Toothpick" },
    { "card": "words", "cardNumber": 34, "wordNumber": 6, "ru": "Окно", "en": "Window" },
    { "card": "words", "cardNumber": 35, "wordNumber": 1, "ru": "Медведь", "en": "Bear" },
    { "card": "words", "cardNumber": 35, "wordNumber": 2, "ru": "Сейф", "en": "Safe" },
    { "card": "words", "cardNumber": 35, "wordNumber": 3, "ru": "Планета", "en": "Planet" },
    { "card": "words", "cardNumber": 35, "wordNumber": 4, "ru": "Поезд", "en": "Train" },
    { "card": "words", "cardNumber": 35, "wordNumber": 5, "ru": "Ложка", "en": "Spoon" },
    { "card": "words", "cardNumber": 35, "wordNumber": 6, "ru": "Газета", "en": "Newspaper" },
    { "card": "words", "cardNumber": 36, "wordNumber": 1, "ru": "Серьга", "en": "Earring" },
    { "card": "words", "cardNumber": 36, "wordNumber": 2, "ru": "Гриб", "en": "Mushroom" },
    { "card": "words", "cardNumber": 36, "wordNumber": 3, "ru": "Рюкзак", "en": "Backpack" },
    { "card": "words", "cardNumber": 36, "wordNumber": 4, "ru": "Кристалл", "en": "Crystal" },
    { "card": "words", "cardNumber": 36, "wordNumber": 5, "ru": "Зубная паста", "en": "Toothpaste" },
    { "card": "words", "cardNumber": 36, "wordNumber": 6, "ru": "Варенье", "en": "Jam" },
    { "card": "words", "cardNumber": 37, "wordNumber": 1, "ru": "Масло", "en": "Butter" },
    { "card": "words", "cardNumber": 37, "wordNumber": 2, "ru": "Обувь", "en": " Shoe" },
    { "card": "words", "cardNumber": 37, "wordNumber": 3, "ru": "Отвертка", "en": "Screwdriver" },
    { "card": "words", "cardNumber": 37, "wordNumber": 4, "ru": "Верблюд", "en": "Camel" },
    { "card": "words", "cardNumber": 37, "wordNumber": 5, "ru": "Чай", "en": "Tea" },
    { "card": "words", "cardNumber": 37, "wordNumber": 6, "ru": "Стейк", "en": "Steak" },
    { "card": "words", "cardNumber": 38, "wordNumber": 1, "ru": "Кукла", "en": "Doll" },
    { "card": "words", "cardNumber": 38, "wordNumber": 2, "ru": "Дом", "en": "House" },
    { "card": "words", "cardNumber": 38, "wordNumber": 3, "ru": "Кран", "en": "Crane" },
    { "card": "words", "cardNumber": 38, "wordNumber": 4, "ru": "Буррито", "en": "Burrito" },
    { "card": "words", "cardNumber": 38, "wordNumber": 5, "ru": "Улитка", "en": "Snail" },
    { "card": "words", "cardNumber": 38, "wordNumber": 6, "ru": "Скейтборд", "en": "Skateboard" },
    { "card": "words", "cardNumber": 39, "wordNumber": 1, "ru": "Лифт", "en": "Elevator" },
    { "card": "words", "cardNumber": 39, "wordNumber": 2, "ru": "Пирамида", "en": "Pyramid" },
    { "card": "words", "cardNumber": 39, "wordNumber": 3, "ru": "Свая", "en": "Still" },
    { "card": "words", "cardNumber": 39, "wordNumber": 4, "ru": "Осьминог", "en": "Octopus" },
    { "card": "words", "cardNumber": 39, "wordNumber": 5, "ru": "Сотрудники", "en": "Staff" },
    { "card": "words", "cardNumber": 39, "wordNumber": 6, "ru": "Радуга", "en": "Rainbow" },
    { "card": "words", "cardNumber": 40, "wordNumber": 1, "ru": "Ключ", "en": "Key" },
    { "card": "words", "cardNumber": 40, "wordNumber": 2, "ru": "Орёл", "en": "Eagle" },
    { "card": "words", "cardNumber": 40, "wordNumber": 3, "ru": "Русалочка", "en": "Mermaid" },
    { "card": "words", "cardNumber": 40, "wordNumber": 4, "ru": "Зонтик", "en": "Umbrella" },
    { "card": "words", "cardNumber": 40, "wordNumber": 5, "ru": "Картина", "en": "Painting" },
    { "card": "words", "cardNumber": 40, "wordNumber": 6, "ru": "Золотая Рыбка", "en": "Goldfish" },
    { "card": "words", "cardNumber": 41, "wordNumber": 1, "ru": "Лопата", "en": "Shovel" },
    { "card": "words", "cardNumber": 41, "wordNumber": 2, "ru": "Магнит", "en": "Magnet " },
    { "card": "words", "cardNumber": 41, "wordNumber": 3, "ru": "Ножницы", "en": "Scissors" },
    { "card": "words", "cardNumber": 41, "wordNumber": 4, "ru": "Вакуум", "en": "Vacuum" },
    { "card": "words", "cardNumber": 41, "wordNumber": 5, "ru": "Ручка", "en": "Pen" },
    { "card": "words", "cardNumber": 41, "wordNumber": 6, "ru": "Ластик", "en": "Eraser" },
    { "card": "words", "cardNumber": 42, "wordNumber": 1, "ru": "Вертолёт", "en": "Helicopter" },
    { "card": "words", "cardNumber": 42, "wordNumber": 2, "ru": "Тыква", "en": "Pumpkin" },
    { "card": "words", "cardNumber": 42, "wordNumber": 3, "ru": "Дерево", "en": "Tree" },
    { "card": "words", "cardNumber": 42, "wordNumber": 4, "ru": "Муравей", "en": "Ant" },
    { "card": "words", "cardNumber": 42, "wordNumber": 5, "ru": "Зубная щётка", "en": "Toothbrush" },
    { "card": "words", "cardNumber": 42, "wordNumber": 6, "ru": "Ракета", "en": "Missile" },
    { "card": "words", "cardNumber": 43, "wordNumber": 1, "ru": "Пень", "en": "Stump" },
    { "card": "words", "cardNumber": 43, "wordNumber": 2, "ru": "Бинокль", "en": "Binoculars" },
    { "card": "words", "cardNumber": 43, "wordNumber": 3, "ru": "Лыжи", "en": "Ski" },
    { "card": "words", "cardNumber": 43, "wordNumber": 4, "ru": "Золото", "en": "Gold" },
    { "card": "words", "cardNumber": 43, "wordNumber": 5, "ru": "Почтовый ящик", "en": "Mailbox" },
    { "card": "words", "cardNumber": 43, "wordNumber": 6, "ru": "Конверт", "en": "Envelope" },
    { "card": "words", "cardNumber": 44, "wordNumber": 1, "ru": "Орган", "en": "Organ" },
    { "card": "words", "cardNumber": 44, "wordNumber": 2, "ru": "Лом", "en": "Crowbar" },
    { "card": "words", "cardNumber": 44, "wordNumber": 3, "ru": "Робот", "en": "Robot" },
    { "card": "words", "cardNumber": 44, "wordNumber": 4, "ru": "Летающий змей", "en": "Kite" },
    { "card": "words", "cardNumber": 44, "wordNumber": 5, "ru": "Флаг", "en": "Flag" },
    { "card": "words", "cardNumber": 44, "wordNumber": 6, "ru": "Скворечник", "en": "Birdhouse" },
    { "card": "words", "cardNumber": 45, "wordNumber": 1, "ru": "Попугай", "en": "Parrot" },
    { "card": "words", "cardNumber": 45, "wordNumber": 2, "ru": "Губка", "en": " Sponge" },
    { "card": "words", "cardNumber": 45, "wordNumber": 3, "ru": "Иголка", "en": "Needle" },
    { "card": "words", "cardNumber": 45, "wordNumber": 4, "ru": "Корзина", "en": "Basket" },
    { "card": "words", "cardNumber": 45, "wordNumber": 5, "ru": "Маска", "en": "Mask" },
    { "card": "words", "cardNumber": 45, "wordNumber": 6, "ru": "Мел", "en": "Chalk" },
    { "card": "words", "cardNumber": 46, "wordNumber": 1, "ru": "Лампочка", "en": "Lightbulb" },
    { "card": "words", "cardNumber": 46, "wordNumber": 2, "ru": "Жемчуг", "en": "Pearl" },
    { "card": "words", "cardNumber": 46, "wordNumber": 3, "ru": "Головоломка", "en": "Puzzle" },
    { "card": "words", "cardNumber": 46, "wordNumber": 4, "ru": "Бейсбол", "en": "Baseball" },
    { "card": "words", "cardNumber": 46, "wordNumber": 5, "ru": "Колокол", "en": "Bell" },
    { "card": "words", "cardNumber": 46, "wordNumber": 6, "ru": "Слон", "en": "Elephant" },
    { "card": "words", "cardNumber": 47, "wordNumber": 1, "ru": "Собака", "en": "Dog" },
    { "card": "words", "cardNumber": 47, "wordNumber": 2, "ru": "Тост", "en": "Toast" },
    { "card": "words", "cardNumber": 47, "wordNumber": 3, "ru": "Гора", "en": "Mountain" },
    { "card": "words", "cardNumber": 47, "wordNumber": 4, "ru": "Лента", "en": "Tape" },
    { "card": "words", "cardNumber": 47, "wordNumber": 5, "ru": "Банка", "en": "Jar" },
    { "card": "words", "cardNumber": 47, "wordNumber": 6, "ru": "Духи", "en": "Perfume" },
    { "card": "words", "cardNumber": 48, "wordNumber": 1, "ru": "Тротуар", "en": "Sidewalk" },
    { "card": "words", "cardNumber": 48, "wordNumber": 2, "ru": "Сигара", "en": "Cigar" },
    { "card": "words", "cardNumber": 48, "wordNumber": 3, "ru": "Клавиатура", "en": "Keyboard" },
    { "card": "words", "cardNumber": 48, "wordNumber": 4, "ru": "Фортепиано", "en": "Piano" },
    { "card": "words", "cardNumber": 48, "wordNumber": 5, "ru": "Зебра", "en": "Zebra" },
    { "card": "words", "cardNumber": 48, "wordNumber": 6, "ru": "Паровой каток", "en": "Steamroller" },
    { "card": "words", "cardNumber": 49, "wordNumber": 1, "ru": "Молоко", "en": "Milk" },
    { "card": "words", "cardNumber": 49, "wordNumber": 2, "ru": "Вакуум", "en": "Vacuum " },
    { "card": "words", "cardNumber": 49, "wordNumber": 3, "ru": "Буй", "en": "Buoy" },
    { "card": "words", "cardNumber": 49, "wordNumber": 4, "ru": "Свеча", "en": "Candle" },
    { "card": "words", "cardNumber": 49, "wordNumber": 5, "ru": "Капуста", "en": "Cabbage" },
    { "card": "words", "cardNumber": 49, "wordNumber": 6, "ru": "Пирог", "en": "Pie" },
    { "card": "words", "cardNumber": 50, "wordNumber": 1, "ru": "Рыба", "en": "Fish" },
    { "card": "words", "cardNumber": 50, "wordNumber": 2, "ru": "Сахар", "en": "Sugar" },
    { "card": "words", "cardNumber": 50, "wordNumber": 3, "ru": "Луна", "en": "Moon" },
    { "card": "words", "cardNumber": 50, "wordNumber": 4, "ru": "Чаша", "en": "Bowl" },
    { "card": "words", "cardNumber": 50, "wordNumber": 5, "ru": "Беговая дорожка", "en": "Treadmill" },
    { "card": "words", "cardNumber": 50, "wordNumber": 6, "ru": "Снегоступы", "en": "Snowshoes" },
    { "card": "words", "cardNumber": 51, "wordNumber": 1, "ru": "Тостер", "en": "Toaster" },
    { "card": "words", "cardNumber": 51, "wordNumber": 2, "ru": "Бензопила", "en": "Chainsaw" },
    { "card": "words", "cardNumber": 51, "wordNumber": 3, "ru": "Трактор", "en": "Tractor" },
    { "card": "words", "cardNumber": 51, "wordNumber": 4, "ru": "Иглобрюх", "en": "Blowfish" },
    { "card": "words", "cardNumber": 51, "wordNumber": 5, "ru": "Горчица", "en": "Mustard" },
    { "card": "words", "cardNumber": 51, "wordNumber": 6, "ru": "Скорая", "en": "Ambulance" },
    { "card": "words", "cardNumber": 52, "wordNumber": 1, "ru": "Билет", "en": "Ticket" },
    { "card": "words", "cardNumber": 52, "wordNumber": 2, "ru": "Монета", "en": "Coin" },
    { "card": "words", "cardNumber": 52, "wordNumber": 3, "ru": "Скорпион", "en": "Scorpion" },
    { "card": "words", "cardNumber": 52, "wordNumber": 4, "ru": "Очки", "en": "Sunglasses" },
    { "card": "words", "cardNumber": 52, "wordNumber": 5, "ru": "Бутылка", "en": "Bottle" },
    { "card": "words", "cardNumber": 52, "wordNumber": 6, "ru": "Блендер", "en": "Blender" },
    /// Список вопросов
    { "card": "quation", "cardNumber": 1, "ru": "Что стоит примерно столько же?", "en": "What does it costs about the same as?" },
    { "card": "quation", "cardNumber": 2, "ru": "Что примерно такого же размера?", "en": "What`s it about the same size as?" },
    { "card": "quation", "cardNumber": 3, "ru": "Что примерно столько же весит?", "en": "What does it weighs about the same as?" },
    { "card": "quation", "cardNumber": 4, "ru": "Что примерно так же опасно?", "en": "What`s about as dangerous as it?" },
    { "card": "quation", "cardNumber": 5, "ru": "Если бы это было животное, то каким?", "en": "If it were an animal, what animal would it be?" },
    { "card": "quation", "cardNumber": 6, "ru": "Если бы это был музыкальный инструмент, то какой?", "en": "If it were a musical instrument, what woukd it be?" },
    { "card": "quation", "cardNumber": 7, "ru": "Если бы это была еда, то какая?", "en": "If it were a food, what food would it be?" },
    { "card": "quation", "cardNumber": 8, "ru": "Если бы у него была любимая еда, чтобы это было?", "en": "If it had a favorite food, what would it be?" },
    { "card": "quation", "cardNumber": 9, "ru": "Какая научная область изучает это?", "en": "What academic field studies it?" },
    { "card": "quation", "cardNumber": 10, "ru": "Кто из исторических личностей имел или использовал это?", "en": "Whho`s a historical figure that had or used it?" },
    { "card": "quation", "cardNumber": 11, "ru": "Кто из знаменитостей имеет или использует это?", "en": "Who`s a celebrity that has or uses it?" },
    { "card": "quation", "cardNumber": 12, "ru": "Кто из вымышленных персонажей имеет или использует это?", "en": "Who`s a fictional character that has or uses it?" },
    { "card": "quation", "cardNumber": 13, "ru": "Как это сделано?", "en": "How is it made?" },
    { "card": "quation", "cardNumber": 14, "ru": "Как это перевозят?", "en": "How is it transported?" },
    { "card": "quation", "cardNumber": 15, "ru": "Как пользоваться этим в качестве оружия?", "en": "How would you use it as a weapon?" },
    { "card": "quation", "cardNumber": 16, "ru": "С каким абстрактным понятием это ассоциируется?", "en": "What abstract concept is it associated with?" },
    { "card": "quation", "cardNumber": 17, "ru": "К какому несчастному случаю или травме это может привести?", "en": "What accident or injury could it cause?" },
    { "card": "quation", "cardNumber": 18, "ru": "Какое прилагательное лучше всего описывает это?", "en": "What adjective best describes is it?" },
    { "card": "quation", "cardNumber": 19, "ru": "С каким древнегреческим или Римским богом это больше всего ассоциируется?", "en": "Which ancient Greek or Roman god is it most associated with?" },
    { "card": "quation", "cardNumber": 20, "ru": "К какой категории предметов это относится?", "en": "What category of objects does it fall under" },
    { "card": "quation", "cardNumber": 21, "ru": "Какого это цвета?", "en": "What color is it?" },
    { "card": "quation", "cardNumber": 22, "ru": "В каком контейнере это хранить?", "en": "What container would you keep it in?" },
    { "card": "quation", "cardNumber": 23, "ru": "Что вам нужно для того чтобы использовать это?", "en": "What`s something you need in order to use it?" },
    { "card": "quation", "cardNumber": 24, "ru": "Как это пахнет?", "en": "What does it smell like?" },
    { "card": "quation", "cardNumber": 25, "ru": "На что это похоже на вкус?", "en": "What does it taste like?" },
    { "card": "quation", "cardNumber": 26, "ru": "Какая область науки это изучает?", "en": "What field of science studies it?" },
    { "card": "quation", "cardNumber": 27, "ru": "В каком жанре фильма или книги чаще всего встречается это?", "en": "What genre of movie or book is most likely to feature it?" },
    { "card": "quation", "cardNumber": 28, "ru": "Для чего это используется?", "en": "What is it used for?" },
    { "card": "quation", "cardNumber": 29, "ru": "Что заставляет вас использовать это?", "en": "What couses you to use it?" },
    { "card": "quation", "cardNumber": 30, "ru": "Какие люди имеют или используют это?", "en": "What kind of people have or use it?" },
    { "card": "quation", "cardNumber": 31, "ru": "В каком магазине вы скорее всего найдёте это?", "en": "What kind of store are you most likely to find it in?" },
    { "card": "quation", "cardNumber": 32, "ru": "Из какого материала это сделано?", "en": "What material is it made of?" },
    { "card": "quation", "cardNumber": 33, "ru": "Какое у этого прозвище?", "en": "What`s a nickname for it?" },
    { "card": "quation", "cardNumber": 34, "ru": "Какие ономатопеи это издаёт (Бум, Мяу и тд)?", "en": "What onomatopoeia does it make (Boom, Meow, etc.)" },
    { "card": "quation", "cardNumber": 35, "ru": "С какой частью тела вы это используете?", "en": "What part of the body do you use it with?" },
    { "card": "quation", "cardNumber": 36, "ru": "Что это питает?", "en": "What powers it?" },
    { "card": "quation", "cardNumber": 37, "ru": "Какая профессия работает с этим?", "en": "What profession works with this?" },
    { "card": "quation", "cardNumber": 38, "ru": "В какой книге, в фильме или телепередаче это появляется?", "en": "What`s book, movie or TV show that it appears in?" },
    { "card": "quation", "cardNumber": 39, "ru": "Какой распространённый бренд у этого?", "en": "What`s a common brand of it?" },
    { "card": "quation", "cardNumber": 40, "ru": "В каких вариантах это встречается?", "en": "What`s a variety it comes in?" },
    { "card": "quation", "cardNumber": 41, "ru": "Что не имеет НИКАКОГО отношения к этому, просто чтобы запутать другую команду?", "en": "What has NOTHING to do with it, just to confuse the other team?" },
    { "card": "quation", "cardNumber": 42, "ru": "Что находится внутри этого?", "en": "What's inside it?" },
    { "card": "quation", "cardNumber": 43, "ru": "Что похоже на это?", "en": "What's something that is like it?" },
    { "card": "quation", "cardNumber": 44, "ru": "Что можно сделать с помощью этого?", "en": "What`s something you can make using it?" },
    { "card": "quation", "cardNumber": 45, "ru": "Какой ваш любимый вид этого?", "en": "What's your favorite type of it?" },
    { "card": "quation", "cardNumber": 46, "ru": "Где вы это используете?", "en": "Where do you use it?" },
    { "card": "quation", "cardNumber": 47, "ru": "Куда это отправляется когда умирает, ломается или становится бесполезным?", "en": "Where does it go when it dies, breaks, or is no longer useful?" },
    { "card": "quation", "cardNumber": 48, "ru": "Где в доме вы можете это найти?", "en": "Where in a house would you find it?" },
    { "card": "quation", "cardNumber": 49, "ru": "Где это хранится?", "en": "Where is it stored?" },
    { "card": "quation", "cardNumber": 50, "ru": "Где бы вы это нашли?", "en": "Where would you find it?" },
    { "card": "quation", "cardNumber": 51, "ru": "Где бы вы могли это купить или получить?", "en": "Where would you buy or obtain one?" },
    { "card": "quation", "cardNumber": 52, "ru": "Кто или что это производит?", "en": "Who or what makes it?" },
    { "card": "quation", "cardNumber": 53, "ru": "Какой возрастной группе это нравится больше всего?", "en": "What age group likes it the most?" },
    { "card": "quation", "cardNumber": 54, "ru": "Что заставляет людей ссориться из-за этого?", "en": "What causes people fight over it?" },
    { "card": "quation", "cardNumber": 55, "ru": "С каким городом это ассоциируется больше всего?", "en": "What city is it most associated with?" },
    { "card": "quation", "cardNumber": 56, "ru": "На каком континенте или в каком регионе вы найдёте больше всего этого?", "en": "What continent or region would you find the most of these in?" },
    { "card": "quation", "cardNumber": 57, "ru": "Какую одежду вы носите при использовании этого предмета?", "en": "What`s somethinge you wear when using it?" },
    { "card": "quation", "cardNumber": 58, "ru": "К какой сказки или детскому стишку это больше всего относится?", "en": "Which fairy tale or nursery rhyme does it most belong in?" },
    { "card": "quation", "cardNumber": 59, "ru": "Какое первое слово которое приходит вам в голову по этому поводу?", "en": "What`s the first word that pops into your head about it?" },
    { "card": "quation", "cardNumber": 60, "ru": "С каким супергероем это больше всего ассоциируется?", "en": "Which superhero is it most associated with?" },
    { "card": "quation", "cardNumber": 61, "ru": "Кому это не нравится?", "en": "Who dislikes it?" },
    { "card": "quation", "cardNumber": 62, "ru": "В школе на каком предмете преподают об этом?", "en": "What subject in school teach about it?" },
    { "card": "quation", "cardNumber": 63, "ru": "Где находится ближайший?", "en": "Where is the nearest one?" },
    { "card": "quation", "cardNumber": 64, "ru": "Какую геометрическую фигуру это включает в себя?", "en": "What`s geometric shape that it includes?" },
    { "card": "quation", "cardNumber": 65, "ru": "В какой период в вашей жизни это наиболее полезно?", "en": "At what point in your life is it most useful?" },
    { "card": "quation", "cardNumber": 66, "ru": "Что вы чувствуете после его использования?", "en": "How do you feel after using it?" },
    { "card": "quation", "cardNumber": 67, "ru": "Как вы лично относитесь к этому?", "en": "How do you personally feel about it?" },
    { "card": "quation", "cardNumber": 68, "ru": "Что вы чувствуете, когда кто-то дарит вам это?", "en": "How do you feel when someone gifts it to you?" },
    { "card": "quation", "cardNumber": 69, "ru": "Как это влияет на окружающие предметы?", "en": "How does it affect the things around it?" },
    { "card": "quation", "cardNumber": 70, "ru": "Как долго это прослужит, если это оставить в покое?", "en": "How long will it last if left alone?" },
    { "card": "quation", "cardNumber": 71, "ru": "Как это отреагирует, если это столкнуть с холма?", "en": "How would it react to being pushed down a hill?" },
    { "card": "quation", "cardNumber": 72, "ru": "Что это изменит?", "en": "What changes it?" },
    { "card": "quation", "cardNumber": 73, "ru": "С какой страной ассоциируется больше всего?", "en": "What country is most associated with?" },
    { "card": "quation", "cardNumber": 74, "ru": "Что вы сделаете, если у вас есть только половина этого?", "en": "What do you do it if you only have half of it?" },
    { "card": "quation", "cardNumber": 75, "ru": "Каково на ощупь, когда вы это трогаете?", "en": "What does it feel like when you touch it?" },
    { "card": "quation", "cardNumber": 76, "ru": "В какой среде обитания вы, скорее всего, его встретите?", "en": "What habitat would you be most likely to find it in?" },
    { "card": "quation", "cardNumber": 77, "ru": "Что произойдет если поместить это под воду?", "en": "What happens if you put it underwater?" },
    { "card": "quation", "cardNumber": 78, "ru": "Что произойдет с этим, если оставить это под дождём?", "en": "What happens to it when it`s left out in the rain?" },
    { "card": "quation", "cardNumber": 79, "ru": "С каким праздником это ассоциируется больше всего?", "en": "What holiday is it most associated with?" },
    { "card": "quation", "cardNumber": 80, "ru": "Какой шум издаётся при использовании этого?", "en": "What kind noise does make when used?" },
    { "card": "quation", "cardNumber": 81, "ru": "Из какого материала не сделано это?", "en": "What material is it NOT made of?" },
    { "card": "quation", "cardNumber": 82, "ru": "Какой шум это издаёт при падении?", "en": "What noise does it make when dropped?" },
    { "card": "quation", "cardNumber": 83, "ru": "На какой вечеринке это больше всего подошло бы?", "en": "What party theme would fit it best?" },
    { "card": "quation", "cardNumber": 84, "ru": "Какая суперсила нужна этому?", "en": "What superpower would it want?" },
    { "card": "quation", "cardNumber": 85, "ru": "В какое время суток это используется?", "en": "What time of day is it used?" },
    { "card": "quation", "cardNumber": 86, "ru": "Что произойдет если это закопать на год?", "en": "What would happen if it was buried for a year?" },
    { "card": "quation", "cardNumber": 87, "ru": "Чтобы вы использовали, чтобы уничтожить это?", "en": "What would you use to destroy it?" },
    { "card": "quation", "cardNumber": 88, "ru": "В какой игре это проявляется?", "en": "What`s game that it appears in?" },
    { "card": "quation", "cardNumber": 89, "ru": "Как неправильно это использовать?", "en": "What`s an incorrect way to use it?" },
    { "card": "quation", "cardNumber": 90, "ru": "Что является противоположностью этому?", "en": "What`s its opposite?" },
    { "card": "quation", "cardNumber": 91, "ru": "Из какого вторичного материала это сделано?", "en": "What`s the secondary material it`s made of?" },
    { "card": "quation", "cardNumber": 92, "ru": "Кому за этим столом это нравится больше всего?", "en": "Who at this table likes it the most? " },
    { "card": "quation", "cardNumber": 93, "ru": "Кто или что может это поднять?", "en": "Who or what can lift it?" },
    { "card": "quation", "cardNumber": 94, "ru": "Как часто вы это используете?", "en": "How frequently do you use it?" },
    { "card": "quation", "cardNumber": 95, "ru": "Как это перемещается?", "en": "How does it move?" },
    { "card": "quation", "cardNumber": 96, "ru": "Какую проблему это решает?", "en": "What problem does it solve?" },
    { "card": "quation", "cardNumber": 97, "ru": "Как вы держите это?", "en": "How do you hold onto it?" },
    { "card": "quation", "cardNumber": 98, "ru": "В какой церемонии это скорее всего появится?", "en": "What ceremony wpuld it appear in?" },
    { "card": "quation", "cardNumber": 99, "ru": "В каком ресторане это скорее всего подадут?", "en": "What kind of restaurant would be most likely to serve it?" },
    { "card": "quation", "cardNumber": 100, "ru": "В каком туристическом месте скорее всего найдётся это?", "en": "What tourist destination would you most likely find it at?" },
    { "card": "quation", "cardNumber": 101, "ru": "Что произойдет если это съесть?", "en": "What would happen if you ate it?" },
    { "card": "quation", "cardNumber": 102, "ru": "Какое настроение это вызывает?", "en": "What mood does it cause?" }
]

// Определение переменных
let numberPage = 1;
let currentLanguage = 'en';

// Получение элементов управления
const buttonsNext = document.querySelectorAll('.nextClose, .nextOpen, .start');
const buttonsBack = document.querySelectorAll('.finish, .new-game');
const elementsAll = document.querySelectorAll('.element');
const buttonLang = document.querySelector('.lang');
const buttonNextOpen = document.querySelector('.nextOpen');
const olRu = document.getElementById('olRu');
const olEn = document.getElementById('olEn');

// Массивы случайных уникальных чисел
let uniqueRandomNumbersWord = [];
let uniqueRandomNumbersQ = [];

// Добавление обработчиков событий
buttonsNext.forEach(button => button.addEventListener('click', changePage));
buttonsBack.forEach(button => button.addEventListener('click', newGame));
buttonLang.addEventListener('click', toggleLanguage);
buttonNextOpen.addEventListener('click', changePage);

// Функция для изменения страницы
function changePage() {
    playSound();
    numberPage++;
    showHideElements(numberPage);
    showWords(numberPage, currentLanguage);
    changeLanguageForList(currentLanguage);
}

// Функция для скрытия элементов
function hideElements() {
    elementsAll.forEach(element => element.style.display = 'none');
    const imageElements = document.querySelectorAll('.picture');
    imageElements.forEach(image => {
        image.style.display = 'none';
    });
}

// Функция для скрытия и отображения элементов в зависимости от страницы
function showHideElements(pageNumber) {
    hideElements();
    ui.forEach(item => {
        const elements = document.querySelectorAll(`.${item.ui}.${item.name}`);
        elements.forEach(element => {
            const shouldDisplay = Array.isArray(item.page)
                ? item.page.includes(pageNumber)
                : item.page === pageNumber;
            element.style.display = shouldDisplay ? 'block' : 'none';
        });
    });
    updateLanguageElements();
    console.log(`Page №${numberPage}`);
}

// Функция для возврата на начало игры
function newGame() {
    playSound();
    numberPage = 1;
    showHideElements(numberPage);
}

// Функция для воспроизведения звука
function playSound() {
    var audio = document.getElementById("clickSound");
    if (audio.readyState !== 4) {
        audio.load();
    }
    audio.play();
}

// Функция обработчика события для смены языка
function toggleLanguage() {
    playSound();
    currentLanguage = (currentLanguage === 'ru') ? 'en' : 'ru';
    updateLanguageElements();
    changeLanguageForList(currentLanguage);
    console.log(`Language: ${currentLanguage}`);
}

// Функция для обновления языковых элементов на странице
function updateLanguageElements() {
    ui.forEach(item => {
        const elements = document.querySelectorAll(`.${item.ui}.${item.name}`);
        elements.forEach(element => {
            if (item.hasOwnProperty(currentLanguage)) {
                element.innerText = item[currentLanguage];
            }
        });
    });
}

// Функция для генерации случайного числа в диапазоне от min до max
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Функция для перезапуска массива
function restart(array) {
    array.length = 0;
}

// Функция для генерации уникального случайного числа и добавления его в массив
function randomNumber(array, min, max) {
    if (array.length === max) {
        restart(array);
    }
    let randomNum;
    do {
        randomNum = getRandomNumber(min, max);
    } while (array.includes(randomNum));
    array.push(randomNum);
    return randomNum;
}

// Функция для отображения слов или вопросов в зависимости от страницы
function showWords(pageNumber, languageProgram) {
    // Очищаем оба списка перед заполнением
    olRu.innerHTML = '';
    olEn.innerHTML = '';

    if (pageNumber === 3) {
        generateAndFillList("words", 6, languageProgram);
    } else if ([5, 7, 9, 11].includes(pageNumber)) {
        generateAndFillList("quation", 7, languageProgram);
    }
}

// Функция для смены языка списка
function changeLanguageForList(language) {
    if (language === 'ru') {
        olEn.style.display = 'none';
        olRu.style.display = 'block';
    } else {
        olRu.style.display = 'none';
        olEn.style.display = 'block';
    }
}

// Функция для генерации и заполнения списка
function generateAndFillList(cardType, count, language) {
    const uniqueRandomNumbersArray = (cardType === "words") ? uniqueRandomNumbersWord : uniqueRandomNumbersQ;

    for (let i = 0; i < count; i++) {
        const indexCard = randomNumber(uniqueRandomNumbersArray, 1, (cardType === "words") ? 52 : 102);
        const card = bdCards.find(item => item.cardNumber === indexCard && item.card === cardType);

        // Создаем отдельные элементы для каждого списка
        const listItemRu = document.createElement('li');
        const listItemEn = document.createElement('li');

        // Заполняем текстовое содержимое элементов на соответствующем языке
        listItemRu.textContent = card.ru;
        listItemEn.textContent = card.en;

        // Устанавливаем атрибуты id для каждого элемента (если нужно)
        listItemRu.id = (cardType === "words") ? `ru_${card.wordNumber}` : `ru_${i}`;
        listItemEn.id = (cardType === "words") ? `en_${card.wordNumber}` : `en_${i}`;

        // Добавляем элементы в соответствующие списки
        olRu.appendChild(listItemRu);
        olEn.appendChild(listItemEn);
    }
}

// Инициализация отображения элементов на первой странице
showHideElements(1);