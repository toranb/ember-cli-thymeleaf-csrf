This addon will dynamically add the csrf headers for thymeleaf


In development/test/server builds you will get the following


```
  <meta name="_csrf_header" content="abc" />
  <meta name="_csrf" content="abc" />
```


In production you will get something that your thymeleaf templates can inject with


```
  <meta name="_csrf_header" th:content="${_csrf.headerName}" />
  <meta name="_csrf" th:content="${_csrf.token}" />
```
