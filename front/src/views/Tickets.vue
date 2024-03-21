
  <template>
 <div class="form-container">
  <form>
    <div class="form-group">
      <label for="imePrezime">Ime i prezime:</label>
      <input type="text" id="imePrezime" name="imePrezime" v-model="name">
    </div>
    <div class="form-group">
      <label for="adresa">Adresa:</label>
      <input type="text" id="adresa" name="adresa" v-model="address">
    </div>
    <div class="form-group">
      <label for="telefon">Broj telefona:</label>
      <input type="tel" id="telefon" name="telefon" v-model="phone">
    </div>
    <div class="form-group">
      <label for="mjestoPolijetanja">Mjesto polijetanja:</label>
      <input type="text" id="mjestoPolijetanja" name="mjestoPolijetanja" v-model="fromLocation">
    </div>
    <div class="form-group">
      <label for="mjestoSlijetanja">Mjesto slijetanja:</label>
      <input type="text" id="mjestoSlijetanja" name="mjestoSlijetanja" v-model="toLocation">
    </div>
    <div class="checkbox-group">
      <label>
        <input type="checkbox" name="uObaPravca" v-model="bothDirection"> U oba pravca
      </label>
      <label>
        <input type="checkbox" name="uJednomPravcu" v-model="singlDirection"> U jednom pravcu
      </label>
    </div>
    <div class="form-group">
      <label for="datumPolijetanja">Datum polijetanja:</label>
      <input type="date" id="datumPolijetanja" name="datumPolijetanja" v-model="firstDate">
    </div>
    <div class="form-group">
      <label for="datumPovratka">Datum povratka:</label>
      <input type="date" id="datumPovratka" name="datumPovratka" v-model="lasetDate">
    </div>
    <button @click="search()">Traži let</button>
  </form>
</div>

</template>

<script>

export default ({
  name: 'YourComponent',
  data(){
    return{
     name:'',
     address:'',
     phone:'',
     fromLocation:'',
     toLocation:'',
     bothDirection:'',
     singlDirection:'',
     firstDate:'',
     lasetDate:'',



    }
  },
  methods: {

    search() {
  console.log('test');
  console.log(this.name, this.address, this.phone, this.fromLocation, this.toLocation);
  console.log(this.bothDirection, this.singlDirection, this.firstDate, this.lasetDate);
},
  },
});
</script>

<style>
.form-container {
  width: 50%;
  margin: auto;
}

.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  display: block;
}

.form-group input[type="text"],
.form-group input[type="tel"],
.form-group input[type="date"] {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.checkbox-group {
  margin-bottom: 1rem;
}

.checkbox-group label {
  display: block;
}

button {
  padding: 0.5rem 1rem;
  background-color: burlywood;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color:burlywood;
}

</style>