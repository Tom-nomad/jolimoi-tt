<template>
  <div class="d-flex flex-column justify-center align-center">
    <h3 class="my-3">Convert a number to a roman numeral</h3>
    <v-form class="conversion-form d-flex justify-center" v-model="valid" onSubmit="return false;">
      <v-text-field
        class="mr-3"
        v-model="numberToConvert"
        outlined filled dense
        placeholder="Put a number between 0 and 100"
        :rules="rules.numberRule"
        @keyup.enter="convertNumberToRoman"
      />
      <v-btn
        height=40
        :disabled="!valid || btnLoading"
        :loading="btnLoading"
        @click="convertNumberToRoman"
      >
        Convert
      </v-btn>
    </v-form>
    <div v-if="canDisplayResult " class="d-flex justify-center">
      <h4>Result: <span>{{result}}</span></h4>
    </div>
    <ErrorMessage v-if="errorMessage && !result" :error="errorMessage"/>
  </div>
</template>

<script>
import ErrorMessage from "~/components/TechTest/ErrorMessage";

export default {
  components: {
    ErrorMessage
  },
  computed: {
    canDisplayResult () {
      if (this.result && (this.numberToConvert === this.convertedNumber)) return true;
      return false;
    }
  },
  data () {
    return {
      numberToConvert: "",
      convertedNumber: "",
      result: "",
      rules: {
        numberRule: [
          v => Boolean(v) || "This field is empty !",
          v => v >= 0 && v <= 100 || "Choose a number between 0 and 100",
          v => !isNaN(parseFloat(v)) || "Choose a number"
        ],
          },
      valid: false,
      btnLoading: false,
      errorMessage: ""
    };  
  },
  methods: {
    async convertNumberToRoman () {
      try {
        this.btnLoading = true;
        const fetchConversionResult =   await this.$axios.post("/convertNumberToRoman", {
          numberToConvert: this.numberToConvert
        });
        if(fetchConversionResult?.data) {
          this.result = fetchConversionResult.data.result;
          this.convertedNumber = fetchConversionResult.data.convertedNumber
        }
        this.btnLoading = false;
      } catch (err) {
        this.btnLoading = false;
        if (err.response && err.response.data && err.response.data.summary) {
          this.errorMessage = err.response.data.summary;
        } else {
          this.errorMessage = "An error occured, please try again at a later time";
        }
      }
    },
  },
}

</script>

<style lang="scss" scoped>
.conversion-form {
  width: 40%;
}
</style>
