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
[class](#class)  
[Передача данных между компонентами](#props_emit)  
[vue-router](#vue-router)  
[filters](#filters)  
[Vuex](#Vuex)


<a name="rendering"><h2>rendering</h2></a>
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
<a name="class"><h3>class</h3></a>  

Динамическое добавление классов с помощью директивы **v-bind**  
**:class="{red: completed}"** - добавить класс **red** при условии **completed = true**  
**@click="byClass"** - функция которая изменяет значение completed на противоположное

```html
<template>
  <div id="app">
    <div class="block" 
      :class="{red: completed}"
      @click="byClass">      
    </div>
  </div>
</template>
```

```javascript
export default {
  name: "App",
  data: () => ({
    completed: false 
  }),
  methods: {
    byClass() {
      this.completed = !this.completed
    }
  }
};
```

```scss
.block{
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 100px;
  height: 100px;
  background: black;
  color: white;
}
.red {
  @extend .block;
  background: red;
}
```

<a name="props_emit"><h3>props_emit</h3></a>

[parent-child](#parent-child)  
[child-parent](#child-parent)  

<a name="parent-child"></a>
<h3>parent-child</h3>   

С помощью директивы **v-bind** создаем атрибут **datalist**  
и как значение этого атрибут передаем массив **dataList**

```html
<template>
  <div id="app">
    <h1>Test Componets</h1>
    <CompList 
      v-bind:datalist="dataList"
      />
  </div>
</template>
```

```javascript
import CompList from './components/CompList'
export default {
  name: "App",
  components: {
    CompList,
  },
  data: () => ({
    dataList: [
      {id:1, task:"task 1", completed: false},
      {id:2, task:"task 2", completed: false},
      {id:3, task:"task 3", completed: false},
      {id:4, task:"task 4", completed: true},
    ] 
  })
};
```

В секции скрип получаем данные через **props**  
Вкомпоненте CompList работаем с **datalist**  

```html
<template>
  <div>
      <ul>
        <li v-for="(item, index) in datalist" :key="index">
          {{ item.task }}
        </li>
      </ul>
  </div>
</template>
```

```javascript
export default {
  props: ['datalist'],
}
```

<a name="child-parent"><h3>child-parent</h3></a>

Передача данных от Ребенка к Родителю осуществляется через **emit**  
На кнопку вешается событие **@click="$emit('remove-item', item.id)**  
* **'remove-item'** - имя события
* **item.id** - данные  

```html
<template>
  <div>
      <ul>
        <li v-for="(item, index) in datalist"
          :key="index">
          {{ item.task }}
          <button @click="$emit('remove-item', item.id)">X</button>
        </li>
      </ul>
  </div>
</template>
```
В родительском App в компоненте CompList слушаем событие **'remove-item'** и обработчик события **removeItem**

```html
<template>
  <div id="app">
    <h1>Test Componets</h1>
    <CompList 
      :datalist="dataList"
      @remove-item="removeItem"
      />
  </div>
</template>
```

**removeItem** это функция в секции **methods**  

```javascript
import CompList from './components/CompList'
export default {
  name: "App",
  components: {
    CompList,
  },
  data: () => ({
    dataList: [
      {id:1, task:"task 1", completed: false},
      {id:2, task:"task 2", completed: false},
      {id:3, task:"task 3", completed: false},
      {id:4, task:"task 4", completed: true},
    ] 
  }),
  methods: {
    removeItem (id) {
      console.log(`App Vue ${id}`)
    }
  }
};
```

<a name="vue-router"><h3>vue-router</h3></a>  

Многостраничные сайты на Vue  


```bash
npm i vue-router
```
Создать файл в корне src **route.js**  
**mode: 'history'** - удаляет решетку в урлах  
**import('./components/Home')** - динамический импорт  

```javascript
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {path: '/',
     component: () => import('./components/Home')
    },
     {
       path: '/i',
       component: () => import('./components/ComponentI')
     },
     {
      path: '/ii',
      component: () => import('./components/ComponentII')
    }
  ]
})
```
В **main.js** импорт и регистрация routera

```javascript
import Vue from "vue";
import App from "./App.vue";
import router from './route'

Vue.config.productionTip = false;
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
```

### App.vue  

**router-link** - это заменяет тег **a** и предотвращает перезагрузку страницы  
**router-view** - это то место куда рендерятся компоненты после перехода по урлу

```html
<template>
  <div id="app">
    <nav>
      <ul>
        <li><router-link to="/">Home Component</router-link></li>
        <li><router-link to="/i">Component I</router-link></li>
        <li><router-link to="/ii">Component II</router-link></li>
      </ul>
    </nav>
    <router-view />
  </div>
</template>
```
### Home.vue

```html
<template>
  <div>
    <h1>Home Component</h1>
  </div>
</template>
```

<a name="filters"><h2>filters</h2></a>

```html
<template>
  <div id="app">
    <h2>{{str | uppercase}}</h2>
  </div>
</template>
```

**uppercase** - имя функции-фильтра  
**{{str | uppercase}}** - uppercase принимает аргумент **str**  

```javascript
export default {
  name: "App",
  data: () => ({
    str: "String"
  }),
  filters: {
    uppercase(value) {
      return value.toUpperCase()
    }
  }
};
```


<a name="Vuex"><h1>Vuex</h1></a>

**Состояние (State)**
Состояние — это данные, хранящиеся в вашем приложении.  
**Хранилище (Store)**
Хранилище управляет состоянием. Оно должно изменяться только изнутри, поэтому внешние компоненты не могут напрямую изменять состояние.  
**Геттеры (Getters)**
Геттеры вычисляют свойства на основе состояния хранилища. Вы можете использовать их в своих действиях (actions) или непосредственно в своем компоненте.  
**Мутации (Mutations)**
Чтобы обновить состояние, вам нужно совершить мутацию. Мутация не заботится о бизнес-логике, ее единственной целью является обновление состояния. Мутация является синхронной.  
**Действия/Экшены (Actions)**
Действие содержит бизнес-логику и не заботится об обновлении состояния напрямую. Причина в том, что действия являются асинхронными  

Структура:  

```bash
├── App.vue
├── assets
├── components
│   └── Counter.vue
├── main.js
└── store
    ├── index.js
    └── modules
        └── covid.js

```

**./store/index.js**  
```javascript
import Vue from "vue";
import Vuex from "vuex";
import covid from "./modules/covid";

Vue.use(Vuex);
export default new Vuex.Store({
  modules: {
    covid
  }
});

```

**./store/modules/covid.js**  
```javascript
export default {
  namespaced: true,
  state: {
    arrowCounter: 0,
  },
  getters: {
    COUNTER(state) {
      return state.arrowCounter
    }
  },
  mutations: {
    CREATE_COUNTER: (state, payload) => {
      state.arrowCounter = payload
    }
  },
  actions: {
    CHANGE_COUNTER_PLUS({commit, getters}) {
      let c = getters.COUNTER+1
      commit("CREATE_COUNTER", c)
    },
    CHANGE_COUNTER_MINUS({commit, getters}) {
      let c = getters.COUNTER-1
      commit("CREATE_COUNTER", c)
    }
  }
}
```
**App.vue**  
```html
<template>
  <div id="app">
    <button @click="CHANGE_COUNTER_PLUS">+ 1</button>
    <Counter />
    <button @click="CHANGE_COUNTER_MINUS">- 1</button>
  </div>
</template>
```

```javascript
import Counter from './components/Counter'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: "App",
  components: {
    Counter
  },
  data() {
    return {}
  },
  computed: {},
  methods: {
    ...mapActions("covid", ["CHANGE_COUNTER_PLUS",
                            "CHANGE_COUNTER_MINUS"
    ]),
  },
};
```

```html
<template>
  <div>
    {{COUNTER}}
  </div>
</template>
```

```javascript
import { mapGetters } from 'vuex'
export default {
  data() {
    return {}
  },
  computed: {
    ...mapGetters("covid", ["COUNTER"]),
  }
}
```
