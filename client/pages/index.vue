<template>
  <div>
    <Header />
    <RomanConversionForm />    
  </div>
</template>

<script>
import Header from "~/components/TechTest/Header";
import RomanConversionForm from "~/components/TechTest/RomanConversionForm";

export default {
  name: 'home',
  components: {
    Header,
    RomanConversionForm,
  },
}
</script>

.<style lang="scss" scoped>

</style>
