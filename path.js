/*


В Node.js термин "path" используется для работы с путями к файлам и директориям на файловой системе. Он представляет собой встроенный модуль Node.js, который обеспечивает функции для создания, преобразования и управления путями.

Вот некоторые из основных функций, предоставляемых модулем path в Node.js:

path.join([...paths]): Эта функция объединяет переданные ей части пути в один путь. Она автоматически учитывает разделители пути, подходящие для операционной системы (например, слеши "/" для Unix-подобных систем и обратные слеши "" для Windows).

path.resolve([...paths]): Эта функция преобразует переданные ей части пути в абсолютный путь. Она начинает с текущей рабочей директории и добавляет к ней указанные части пути.

path.dirname(path): Возвращает имя директории, содержащей указанный путь.

path.basename(path, [ext]): Возвращает базовое имя файла или директории из указанного пути. При наличии второго аргумента ext она также удаляет указанное расширение из имени файла.

path.extname(path): Возвращает расширение файла из указанного пути.

path.normalize(path): Нормализует путь, удаляя из него избыточные разделители и обрабатывая ".." и ".".

path.parse(path): Разбирает путь на объект с информацией о директории, имени файла, расширении и т. д.

path.isAbsolute(path): Проверяет, является ли указанный путь абсолютным.

Пример использования модуля path:

javascript
Copy code
const path = require('path');

const filePath = '/Users/user/documents/example.txt';

console.log(path.dirname(filePath)); // Выводит: /Users/user/documents
console.log(path.basename(filePath)); // Выводит: example.txt
console.log(path.extname(filePath));  // Выводит: .txt
Модуль path очень полезен при работе с файлами и директориями в Node.js, так как он позволяет корректно обрабатывать пути независимо от операционной системы, на которой выполняется код.

*/