import { LOCALES } from "./locales";

export const messages: { [key: string]: { [key: string]: string } } = {
    [LOCALES["ENGLISH"]]: {
        "appName": "Library",
        "englishCode": "EN",
        "russianCode": "RUS",
        "belarusianCode": "BEL",
        "search": "Search...",
        "cancel": "Cancel",
        "commitChanges": "Commit changes",
        "add": "Add",
        "edit": "Edit",
        "dateFormat": "dd/MM/yyyy",
        "books": "Books",
        "addABook": "Add a book",
        "users": "Users",
        "orders": "Orders",
        "myOrders": "My orders",
        "loginLocale": "Login",
        "passwordLocale": "Password",
        "signInLocale": "Sign in",
        "error": "Invalid credentials",
        "signUp": "Sign up",
        "confirmPassword": "Confirm password",
        "errorTitle": "An error occurred | Library",
        "errorOccurred": "A server error occurred:",
        "mainTitle": "Main | Library",
        "greetingsMessage": "Welcome",
        "bookTitle": "Title",
        "authors": "Author(s)",
        "genre": "Genre",
        "publisher": "Publisher",
        "publishmentYear": "Publishment year",
        "inStock": "In stock",
        "delete": "Delete",
        "deleteConfirmation": "Do you really want to delete this book?",
        "commaSeparated": "comma separated",
        "order": "Order",
        "firstName": "First name",
        "lastName": "Last name",
        "role": "Role",
        "blocked": "Blocked",
        "block": "Block",
        "blockConfirmation": "Do you really want to block this user?",
        "unblock": "Unblock",
        "unblockConfirmation": "Do you really want to unblock this user?",
        "startDate": "Start date",
        "endDate": "End date",
        "returnDate": "Return date",
        "rentalType": "Rental type",
        "rentalState": "State",
        "approveOrder": "Approve order",
        "decline": "Decline order",
        "collectOrder": "Collect order",
        "returnOrder": "Return order",
        "days": "Days",
        "READER": "Reader",
        "LIBRARIAN": "Librarian",
        "ADMIN": "Admin",
        "TO_READING_HALL": "to reading hall",
        "OUT_OF_LIBRARY": "out of library",
        "PLACED": "order placed",
        "DECLINED": "order declined",
        "APPROVED": "order approved",
        "BOOK_TAKEN": "book taken",
        "BOOK_RETURNED": "book returned",
        "true": "yes",
        "false": "no"
    },
    [LOCALES["RUSSIAN"]]: {
        "appName": "Библиотека",
        "englishCode": "Англ.",
        "russianCode": "Рус.",
        "belarusianCode": "Бел.",
        "search": "Найти...",
        "cancel": "Отмена",
        "commitChanges": "Внести изменения",
        "add": "Добавить",
        "edit": "Редактировать",
        "dateFormat": "dd.MM.yyyy",
        "books": "Книги",
        "addABook": "Добавить книгу",
        "users": "Пользователи",
        "orders": "Заказы",
        "myOrders": "Мои заказы",
        "loginLocale": "Логин",
        "passwordLocale": "Пароль",
        "signInLocale": "Войти",
        "error": "Недействительные учетные данные",
        "signUp": "Зарегистрироваться",
        "confirmPassword": "Подтвердите пароль",
        "errorTitle": "Произошла ошибка | Библиотека",
        "errorOccurred": "Произошла ошибка сервера:",
        "mainTitle": "Главная | Библиотека",
        "greetingsMessage": "Добро пожаловать",
        "bookTitle": "Название",
        "authors": "Автор(ы)",
        "genre": "Жанр",
        "publisher": "Издатель",
        "publishmentYear": "Год издания",
        "inStock": "В наличии",
        "delete": "Удалить",
        "deleteConfirmation": "Вы действительно хотите удалить эту книгу?",
        "commaSeparated": "разделены запятыми",
        "order": "Заказать",
        "firstName": "Имя",
        "lastName": "Фамилия",
        "role": "Роль",
        "blocked": "Заблокирован",
        "block": "Заблокировать",
        "blockConfirmation": "Вы действительно хотите заблокировать этого пользователя?",
        "unblock": "Разблокировать",
        "unblockConfirmation": "Вы действительно хотите разблокировать этого пользователя?",
        "startDate": "Дата заказа",
        "endDate": "Сдать до",
        "returnDate": "Дата возврата",
        "rentalType": "Тип заказа",
        "rentalState": "Состояние",
        "approveOrder": "Утвердить заказ",
        "decline": "Отклонить заказ",
        "collectOrder": "Забрать заказ",
        "returnOrder": "Возвратить заказ",
        "days": "Дни",
        "READER": "Читатель",
        "LIBRARIAN": "Библиотекарь",
        "ADMIN": "Администратор",
        "TO_READING_HALL": "в читальный зал",
        "OUT_OF_LIBRARY": "на абонемент",
        "PLACED": "заказ сделан",
        "DECLINED": "в заказе отказано",
        "APPROVED": "заказ одобрен",
        "BOOK_TAKEN": "книга забрана",
        "BOOK_RETURNED": "книга возвращена",
        "true": "да",
        "false": "нет"
    },
    [LOCALES["BELARUSIAN"]]: {
        "appName": "Бібліятэка",
        "englishCode": "Англ.",
        "russianCode": "Рус.",
        "belarusianCode": "Бел.",
        "search": "Знайсці...",
        "cancel": "Адмена",
        "add": "Дадаць",
        "edit": "Рэдагаваць",
        "commitChanges": "Унесці змены",
        "dateFormat": "dd.MM.yyyy",
        "books": "Кнігі",
        "addABook": "Дадаць кнігу",
        "users": "Карыстальнікі",
        "orders": "Заказы",
        "myOrders": "Мае заказы",
        "loginLocale": "Лагін",
        "passwordLocale": "Пароль",
        "signInLocale": "Увайсці",
        "error": "Несапраўдныя ўліковыя дадзеныя",
        "signUp": "Зарэгістравацца",
        "confirmPassword": "Пацвердзіце пароль",
        "errorTitle": "Адбылася памылка | Бібліятэка",
        "errorOccurred": "Адбылася памылка сервера:",
        "mainTitle": "Галоўная старонка | Бібліятэка",
        "greetingsMessage": "Прывiтанне",
        "bookTitle": "Назва",
        "authors": "Аўтар(ы)",
        "genre": "Жанр",
        "publisher": "Выдавец",
        "publishmentYear": "Год выдання",
        "inStock": "У наяўнасці",
        "delete": "Выдаліць",
        "deleteConfirmation": "Вы сапраўды хочаце выдаліць гэтую кнігу?",
        "commaSeparated": "падзелены коскамі",
        "order": "Заказаць",
        "firstName": "Імя",
        "lastName": "Прозвішча",
        "role": "Роля",
        "blocked": "Заблакаваны",
        "block": "Заблакаваць",
        "blockConfirmation": "Вы сапраўды хочаце заблакаваць гэтага карыстальніка?",
        "unblock": "Разблакаваць",
        "unblockConfirmation": "Вы сапраўды хочаце разблакаваць гэтага карыстальніка?",
        "startDate": "Дата замовы",
        "endDate": "Здаць да",
        "returnDate": "Дата вяртання",
        "rentalType": "Тып замовы",
        "rentalState": "Стан",
        "approveOrder": "Зацвердзіць замову",
        "decline": "Адхіліць замову",
        "collectOrder": "Забраць замову",
        "returnOrder": "Вярнуць замову",
        "days": "Дни",
        "READER": "Чытач",
        "LIBRARIAN": "Бібліятэкар",
        "ADMIN": "Адміністратар",
        "TO_READING_HALL": "у чытальную залу",
        "OUT_OF_LIBRARY": "на абанемент",
        "PLACED": "заказ зроблены",
        "DECLINED": "у замове адмоўлена",
        "APPROVED": "заказ ухвалены",
        "BOOK_TAKEN": "кніга забрана",
        "BOOK_RETURNED": "кніга вернутая",
        "true": "так",
        "false": "не"
    }
}