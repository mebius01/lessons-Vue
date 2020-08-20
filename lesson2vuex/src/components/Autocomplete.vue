<template>
  <div class="covid-block">

    <h1 class="h1">covid19</h1>

    <div class="input-block">
      <input type="text" placeholder="search..." v-model="search"
              @input="onChangeInput"
              @keyup.38="keyArrowUp"
              @keyup.40="keyArrowDown" 
              @keyup.13="keyEnter"
      />
      <div class="btn-block">
        <span class="btn-down"
              :class="{'btn-up': btnShowListCountries }"
              @click="showList">
        </span>
        <span class="btn-closse"
              v-if="search"
              @click="clossSearch">
        </span>
      </div>
    </div>

    <template v-if="objOneCountry">
      <div class="country">
        <p v-for="(value, key) of objOneCountry" :key="key">{{key}}: {{value}}</p>
        <span class="btn-closse" @click="closseCountry"></span>
      </div>
    </template>

    <template v-if="search || btnShowListCountries">
      <ul class="results-list">
        <li v-for="(item, index) in results" :key="index" 
            :class="{ 'is-active': index === arrowCounter }">
          <a @click.self.prevent="showObjOneCountry(item, index)">
              {{item.Country}}
          </a>
          <div class="btn-block">
            <span class="btn-closse"
                  @click.self.prevent="removeItem(item, index)">
            </span>
          </div>
        </li>
      </ul>
    </template>

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
    watch: {
      focusedElBeforeOpen: function() {
        console.log(this.focusedElBeforeOpen);
      }
    },
    methods: {
      keyArrowUp() {
        if (this.arrowCounter > 0) {
          this.arrowCounter = this.arrowCounter - 1;
        }
        console.log(this.results[this.arrowCounter], this.arrowCounter);
      },
      keyArrowDown() {
        if (this.arrowCounter < this.results.length) {
          this.arrowCounter = this.arrowCounter + 1;
        }
        console.log(this.results[this.arrowCounter], this.arrowCounter);
      },
      keyEnter() {
        console.log("Enter", this.results[this.arrowCounter]);
        this.showObjOneCountry(this.results[this.arrowCounter])
      },
      showList() {
        console.log(this.btnShowListCountries);
        this.btnShowListCountries = !this.btnShowListCountries
        if (this.btnShowListCountries) {
          this.filterResults()
        } else this.results = []
      },
      // remove item from the results
      removeItem(item, index) {
        if (index === 0) {
          this.results.splice(0, 1);
        }
        else this.results.splice(index, index);
      },
      closseCountry() {
        this.objOneCountry = null
      },
      clossSearch() {
        this.search = ''
        this.filterResults()
      },
      // calls the filter function on input
      onChangeInput() {
        this.filterResults()
      },
      // display data of one country
      showObjOneCountry(value) {
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

  .grid {
    display: grid;
    grid-template-columns: 30% auto;
    gap: 40px;
    grid-template-areas: "h1 h1"
                          "input-block input-block"
                          "country results-list"
  }
  
  .h1 {
    grid-area: h1;
  }
  .covid-block {
    @extend .grid;
    width: 80vw;
    margin: 20px auto;

    .input-block {
      grid-area: input-block;
      position: relative;

      .btn-block {
        position: absolute;
        top: 8px;
        right: -1px;
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
    }
    .country {
      grid-area: country;
      margin: 12px 0;
      padding: 10px;
      position: relative;

      span {
        position: absolute;
        top: 30px;
        right: 1px;
      }
    }
    .results-list {
      grid-area: results-list;
      height: 100%;
      list-style: none;
      padding-inline-start: 0;
      overflow-y: scroll;
      height: 50vh;
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