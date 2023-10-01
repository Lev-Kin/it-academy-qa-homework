const fs = require('fs-extra');

async function main() {
    // Создаем папку
    await fs.mkdirs('myFolder1');
    console.log('myFolder1 created');

    // Создаем текстовый файл в созданной папке
    await fs.writeFile('myFolder1/myFile.txt', 'Hello, world!');
    console.log('myFile.txt created in myFolder1');

    // Создаем вторую папку
    await fs.mkdirs('myFolder2');
    console.log('myFolder2 created');

    // Перемещаем файл из первой папки во вторую
    await fs.move('myFolder1/myFile.txt', 'myFolder2/myFile.txt');
    console.log('myFile.txt moved to myFolder2');

    // Создаем третью папку
    await fs.mkdirs('myFolder3');
    console.log('myFolder3 created');

    // Копируем файл из второй в третью папку
    await fs.copy('myFolder2/myFile.txt', 'myFolder3/myFile.txt');
    console.log('myFile.txt copied to myFolder3');

    // Удаляем файлы
    await fs.remove('myFolder2/myFile.txt');
    await fs.remove('myFolder3/myFile.txt');
    console.log('Files removed');

    // Удаляем папки
    await fs.rmdir('myFolder1');
    await fs.rmdir('myFolder2');
    await fs.rmdir('myFolder3');
    console.log('All folders removed');
}

main().catch(error => {
    console.error('Error occurred:', error);
});

// Для запуска решения команда - node index.js