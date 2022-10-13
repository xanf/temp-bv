<template>
  <div>
    <h1>t</h1>
    <b-button-close>test</b-button-close>
    <b-dropdown
      variant="link"
      v-b-tooltip.hover.bottom
      title="My Dropdown"
      id="my-dropdown"
    >
      <template #button-content>My Dropdown</template>
      <b-dropdown-item>Item 1</b-dropdown-item>
      <b-dropdown-item>Item 2</b-dropdown-item>
    </b-dropdown>
  </div>
</template>
<script>
export default {
  data() {
    return;
  },
};
</script>
