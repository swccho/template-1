<template>
  <div class="main-wrapper">
    <!--  Side nav component  -->
    <SideNav />

    <!--  Main Content  -->
    <div class="main-content">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>

import SideNav from "@/layout/includes/SideNav.vue";

export default {
  components: {SideNav}
}
</script>
