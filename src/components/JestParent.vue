<template>
    <div class="bg-blue-1">
        <div class="col-12 full-width">PARENT</div>
        <div class="col-12 full-width q-ma-md bg-red-1"><jest-child/></div>
    </div>
</template>

<script>
import JestChild from "@/components/JestChild.vue";

export default {
    name: "JestParent",
    components: { JestChild }
};
</script>

<style scoped>

</style>