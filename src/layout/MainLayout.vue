<template>
  <div class="main-wrapper">
    <!--  Side nav component  -->
    <HeaderComponent/>
    <!--  Main Content  -->
    <div class="main-content">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>

import HeaderComponent from "@/layout/includes/HeaderComponent.vue";
export default {
  components: {HeaderComponent}
}
</script>
