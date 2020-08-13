# Vue
# Содержание

[Декларативная отрисовка](#rendering)  
[v-bind](#v-bind)  
[v-if](#v-if)  
[v-show](#v-show)  
[v-for](#v-for)  
[v-model](#v-model)   
[v-on](#v-on)  
[axios](#axios)



<a name="rendering"><h2>Декларативная отрисовка</h2></a>
```html
<div id="app">
  {{ msg }}
  {{ num + num }}
  {{ num == 1 ? "One" : "Do Not One" }}
</div>
```

```javascript
export default {
  name: "App",
    data: () => ({
    msg: "Простой текст",
    num: 1,
  })
}

```

<a name="v-bind"><h2>v-bind</h2></a>
Атрибут **v-bind**, называется директивой. Директивы имеют префикс v-, указывающий на их особую природу.
Сокращенная форма **:**

```html
<div id="app">
  <a v-bind:href="link" target="_blank">Google</a>
  <a :href="link" target="_blank">Google</a>
</div>

```

```javascript
export default {
  name: "App",
    components: {},
    data: () => ({
      link: "https://google.com",
    })
}
```

<a name="v-if"><h2>v-if</h2></a>
Поскольку **v-if** — директива, она должна быть указана в одном конкретном теге. Но что если мы хотим управлять отображением сразу нескольких элементов? В таком случае можно применить **v-if** к псевдоэлементу **template**, который служит невидимой обёрткой и сам в результатах отрисовки не появляется.

```html
<template>
  <div id="app">

    <template v-if="status">
      <h2>Title True</h2>
      <span>Lorem ipsum dolor sit amet consectetur adipisicing elit</span>
    </template>
    <template v-else>
      <h2>Title False</h2>
      <span>Lorem ipsum dolor sit amet consectetur adipisicing elit</span>
    </template>

    <span v-if="num == 1">1</span>
    <span v-else-if="num == 2">2</span>
    <span v-else>3</span>

  </div>
</template>
```

```javascript
export default {
  name: "App",
    components: {},
    data: () => ({
      status: true,
      num: 2
    })
}
```

<a name="v-show"><h2>v-show</h2></a>
**v-show** будет всегда оставаться в DOM, а изменяться будет лишь свойство **display** в его параметрах CSS
**v-show** не работает на элементе <template> и не работает с **v-else**

```html
<template>
  <div id="app">
    <h1 v-show="status">Привет!</h1>
  </div>
</template>

```

```javascript
export default {
  name: "App",
  data: () => ({
    status: true,
  })
}
```

<a name="v-for"><h2>v-for</h2></a>
```html
<template>
  <div id="app">
    <div v-for="(item, index) in todos" :key="index">
      <h1>{{ item.title }}</h1>
      <p>{{ item.id }}: {{ item.text }}</p>
    </div>
    
    <ul>
      <li v-for="(list, index) in lists" :key="index">{{list}}</li>
    </ul>
  </div>
</template>
```

```javascript
export default {
  name: "App",
  data: () => ({
    todos: [
      { id:1, title: "JS", text: 'Изучить JavaScript' },
      { id:2, title: "Vue", text: 'Изучить Vue' },
      { id:3, title: "CSS", text: 'Создать что-нибудь классное с CSS' }
    ],
    lists: [1,2,3,4]
  })
};
```

<a name="v-on"><h2>v-on</h2></a>
## Event v-on
**v-on** для отслеживания событий
**@** - Сокращенная форма

* stop — вызовет event.stopPropagation().
* prevent — вызовет event.preventDefault().
* capture — добавит подписку в режиме capture.
* self — вызовет обработчик только если событие возникло непосредственно на этом элементе.
* {keyCode | keyAlias} — вызывает обработчик только при нажатии определённой клавиши.
* native — подписаться на нативное событие на корневом элементе компонента.
* once — вызовет обработчик не больше одного раза.
* left - (2.2.0) вызов обработчика только по событию нажатия левой кнопки мыши.
* right - (2.2.0) вызов обработчика только по событию нажатия правой кнопки мыши.
* middle - (2.2.0) вызов обработчика только по событию нажатия средней кнопки мыши.
* passive - (2.3.0+) вызов обработчика события DOM с опцией { passive: true }.

```html
<template>
  <div id="app">
    <button @click.prevent="clickMy">Counter</button>
    <p>{{ counter }}</p>
  </div>
</template>
```

```javascript
export default {
  name: "App",
  data: () => ({
    counter: 0
  }),
  methods: {
    clickMy: function () {
      this.counter++
    }
  },
};
```

<a name="v-model"><h2>v-model</h2></a>
Позволяющую легко связывать элементы форм и состояние приложения

Используется только с:
* input
* select
* textarea
* компонентами

Модификаторы:
* lazy — подписаться на события change, а не input
* number — приводить корректную введённую строку к числу
* trim — удалять пробелы в начале и в конце введённой строки

```html
<template>
  <div id="app">
    <input v-model="inputMsg" type="text" name="" id="">
    <p>{{ inputMsg }}</p>
  </div>
</template>
```

```javascript
export default {
  name: "App",
  data: () => ({
     inputMsg: null
  }),
};
```
<a name="axios"><h2>axios</h2></a>

[get](#get)  
[post](#post)  

<a name="get"><h3>get</h3></a>

Извлечём и сохраним данные, используя хук жизненного цикла **mounted**

```html
<template>
  <div id="app">
    <div class="container">
      <div class="card" v-for="(item, index) in posts" :key="index">
        <h3>{{ item.title }}</h3>
        <p>{{ item.body }}</p>
      </div>
    </div>
  </div>
</template>
```

```javascript
import axios from 'axios'
export default {
  name: "App",
  data: () => ({
    posts: null,
    status: null,
    rootUrl: "https://jsonplaceholder.typicode.com"
  }),
  mounted() {
    axios.get(`${this.rootUrl}/posts`)
         .then(response => (this.posts = response.data))
         .catch(error => console.error(error));
  },
};
```

<a name="post"><h3>post</h3></a>

```html
<template>
  <div id="app">
    <div>
      <input type="text" v-model="article.title">
      <br>
      <textarea v-model="article.body"></textarea>
      <br>
      <button @click="sendArticle">Send Article</button>
    </div>
    <div class="container">
      <div class="card" v-if="status">
          <h3>{{ newArticle.title }}</h3>
          <p>{{ newArticle.body }}</p>
      </div>
  </div>
</template>
```

```javascript
import axios from 'axios'
export default {
  name: "App",
  data: () => ({
    status: null,
    newArticle: null,
    article: {
      title: null,
      body: null
    },
    postArticles: "https://jsonplaceholder.typicode.com/posts"
  }),
  methods: {
    sendArticle: function() {
      axios.post(this.postArticles, this.article)
            .then((response) => {
              this.newArticle = response.data
              this.status = response.status
            })
    }
  }
};
```