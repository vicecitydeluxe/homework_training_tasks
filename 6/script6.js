let parseURL = () => new URL("http://tutu.ru:8080/do/any.php?a=1&b[]=a&b[]=b#foo");
console.log(parseURL());
