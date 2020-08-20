<template>
  <div class="covid-block">
    <h1>covid19</h1>
    <!-- <div id="myDropdown" class="dropdown-content">
    <input type="text" placeholder="Search.." id="myInput" onkeyup="filterFunction()">
    <a href="#about">About</a>
    <a href="#base">Base</a>
    <a href="#blog">Blog</a>
    <a href="#contact">Contact</a>
    <a href="#custom">Custom</a>
    <a href="#support">Support</a>
    <a href="#tools">Tools</a>
  </div> -->
    <div class="input-block">
      <input type="text" v-model="search" @input="onChange"/>
      <div class="btn-block">
        <span :class="{'btn-up': btnShowListCountries }" class="btn-down" @click="showList"></span>
        <span class="btn-closse" v-if="search" @click="clossSearch"></span>
      </div>
    </div>
    <template v-if="objOneCountry">
      <div class="country">
        <h3>Country: {{objOneCountry.Country}}</h3>
        <p>New Confirmed: {{objOneCountry.NewConfirmed}}</p>
        <p>New Deaths: {{objOneCountry.NewDeaths}}</p>
        <p>New Recovered: {{objOneCountry.NewRecovered}}</p>
        <p>Total Confirmed: {{objOneCountry.TotalConfirmed}}</p>
        <p>Total Deaths: {{objOneCountry.TotalDeaths}}</p>
        <p>Total Recovered: {{objOneCountry.TotalRecovered}}</p>
        <span class="btn-closse" @click.self.prevent="closseCountry(objOneCountry)"></span>
      </div>
    </template>
    <ul class="autocomplete-results">
      <li v-for="(item, index) in results" 
      :key="index"
      >
        <a @click.self.prevent="getC(item, index)" href=""
        @keydown.down="onArrowDown"
        @keydown.up="onArrowUp"
        :class="{ 'is-active': index === arrowCounter }"
        >{{item.Country}}</a>
        <div class="btn-block">
          <span class="btn-closse" @click.self.prevent="dellItem(item, index)"></span>
        </div>
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
        search: '',
        results: [],
        btnShowListCountries: false,
        arrDataCountries: null,
        objOneCountry: null,
        arrowCounter: -1,
      };
    },

    methods: {
      onArrowDown() {
        if (this.arrowCounter < this.results.length) {
          this.arrowCounter = this.arrowCounter + 1;
        }
      },
      onArrowUp() {
        if (this.arrowCounter > 0) {
          this.arrowCounter = this.arrowCounter - 1;
        }
      },
      showList() {
        this.btnShowListCountries = !this.btnShowListCountries
        if (this.btnShowListCountries) {
          this.filterResults()
        } else this.results = []
      },
      dellItem(item, index) {
        console.log(item, index);
        if (index === 0) {
          this.results.splice(0, 1);
        }
        else this.results.splice(index, index);
      },
      closseCountry(value) {
        console.log(value);
        this.objOneCountry = null
      },
      clossSearch() {
        this.search = ''
        this.filterResults()
      },
      onChange() {
        console.log(this.results);
        this.filterResults()
      },
      getC(value) {
        console.log(value);
        this.search = value.Country
        this.filterResults()
        this.objOneCountry = value
      },
      filterResults() {
        this.results = this.arrDataCountries.filter(item => item.Country.toLowerCase().indexOf(this.search.toLowerCase()) > -1);
      },
    },
    mounted() {
      axios
        .get('https://api.covid19api.com/summary')
        .then(response => (this.arrDataCountries = response.data.Countries))
    } 
  };
</script>
<style lang="scss" scope>
  .is-active {
    border-bottom: 2px solid #3e8e41;
  }

  .btn-down {
    font-size: 20px;
    margin: 0 5px;
    padding: 0 5px;
    color: #0088f8;
    &:after {
      content: "\2193";
    }
    &:hover {
      border: 1px solid;
    }
  }

  .btn-up {
    @extend .btn-down;
    &:after {
      content: "\2191";
    }
  }
  .btn-closse {
    @extend .btn-down;
    color: #f80000;
    &:after {
      content: "\00D7";
    }
  }

  .covid-block {
    width: 80vw;
    margin: 20px auto;

    .input-block {
      position: relative;

      .btn-block {
        position: absolute;
        top: 8px;
        right: -1px;
      }
    }

    input {
      outline: none;
      width: 100%;
      height: 30px;
      padding: 2px;
      font-size: 24px;
      color: #122436;
      border: none;
      border-bottom: 1px #3e8e41 solid;
      &:focus {
        border-bottom: 2px solid #3e8e41;
      }
    }
    .country {
      margin: 12px 0;
      padding: 10px;
      position: relative;

      span {
        position: absolute;
        top: 30px;
        right: 1px;
      }
    }
    ul {
      height: 100%;
      list-style: none;
      padding-inline-start: 0;
      li {
        margin: 24px 0;
        position: relative;
        a {
          font-size: 20px;
          outline: none;
          cursor: pointer;
          display: block;
          color: #006fdd;
          text-decoration: none;
          border-bottom: 1px solid #dddddd;

          &:hover, &:focus {
            @extend .is-active;
          }
        }
        .btn-block {
          position: absolute;
          bottom: 5px;
          right: 1px;
        }
      }
    }
  }
</style>