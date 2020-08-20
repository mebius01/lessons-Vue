<template>
  <div class="covid-block">
    <h1>covid19</h1>
    <div>
      <input type="text"
            v-model="search"
            @input="onChange"
    />
    </div>
    <template v-if="oneEl">
      <div class="country">
        <h3>Country: {{oneEl.Country}}</h3>
        <p>New Confirmed: {{oneEl.NewConfirmed}}</p>
        <p>New Deaths: {{oneEl.NewDeaths}}</p>
        <p>New Recovered: {{oneEl.NewRecovered}}</p>
        <p>Total Confirmed: {{oneEl.TotalConfirmed}}</p>
        <p>Total Deaths: {{oneEl.TotalDeaths}}</p>
        <p>Total Recovered: {{oneEl.TotalRecovered}}</p>
        <button class="cls" @click.self.prevent="closseCountry(oneEl)">x</button>
      </div>
    </template>
    <!-- <select name="" id="">
      <option v-for="(item, index) in results" :key="index" :value="index">
         <a :class="{focus: completed}" @click.self.prevent="getC(item, index)">{{item.Country}}</a>
      </option>
    </select> -->
    <ul class="autocomplete-results">
      <li class="autocomplete-result" v-for="(item, index) in results" :key="index">
        <a @click.self.prevent="getC(item, index)">{{item.Country}}
          <span @click.self.prevent="dellItem(item, index)">x</span>
        </a>
        
      </li>
    </ul>

  </div>
</template>
<script>
import axios from 'axios'
  export default {
    name: 'autocomplete',
    data() {
      return {
        currentItem: 1,
        search: '',
        results: [],
        dataArr: null,
        oneEl: null,
        completed: false
      };
    },
    watch: {
      search: function() {
        if (!this.search) {
          this.oneEl = null
          this.results = []
        }
      }
    },
    methods: {
      dellItem(item, index) {
        console.log(item, index);
        if (index === 0) {
          this.results.splice(0, 1);
        }
        else this.results.splice(index, index);
      },
      closseCountry(value) {
        console.log(value);
        this.oneEl = null
      },
      onChange() {
        console.log(this.results);
        this.filterResults()
      },
      getC(value) {
        this.oneEl = value
      },
      filterResults() {
        this.results = this.dataArr.filter(item => item.Country.toLowerCase().indexOf(this.search.toLowerCase()) > -1);
      },
    },
    mounted() {
      axios
        .get('https://api.covid19api.com/summary')
        .then(response => (this.dataArr = response.data.Countries))
    } 
  };
</script>
<style lang="scss" scope>
.focus {
  border: red 1px solid;
}
.covid-block {
  width: 80vw;
  margin: 20px auto;

  input {
    width: 100%;
    height: 30px;
    padding: 2px;
    font-size: 24px;
    color: #122436;
    border: 1px gray solid;
  }
  .country {
    margin: 12px 0;
    padding: 10px;
    position: relative;

    .cls {
      cursor: pointer;
      width: 24px;
      height: 24px;
      border: none;
      color: #f80000;
      background: none;
      position: absolute;
      top: 29px;
      right: 9px;
    }
  }
  ul {
    height: 100%;
    list-style: none;
    padding-inline-start: 0;
    li {
      margin: 24px 0;
      a {
        cursor: pointer;
        display: block;
        color: #006fdd;
        text-decoration: none;
        border-bottom: 1px solid #dddddd;

        span {
          display: inline-block;
          float: right;
          color: #f80000;
          padding: 0 12px;
        }
      }
    }
  }
}
</style>

a .autocomplete {
//     position: relative;
//     width: 130px;
//   }

//   .autocomplete-results {
//     padding: 0;
//     margin: 0;
//     border: 1px solid #eeeeee;
//     height: 120px;
//     overflow: auto;
//   }

//   .autocomplete-result {
//     list-style: none;
//     text-align: left;
//     padding: 4px 2px;
//     cursor: pointer;
//   }

//   .autocomplete-result:hover {
//     background-color: #4AAE9B;
//     color: white;
//   }