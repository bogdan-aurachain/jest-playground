<template>
    <q-page class="flex flex-center row content-center q-gutter-y-xl">
        <img alt="Quasar logo" src="../assets/logo.svg" style="width: 200px; height: 200px;">
        <div class="col-12 row justify-center text-center">
            <jest-counter></jest-counter>
            <jest-parent class="full-width"/>
        </div>
    </q-page>
</template>

<script>
import JestCounter from "@/components/JestCounter.vue";
import JestParent from "@/components/JestParent.vue";

export default {
    name: "HelloWorld",
    components: { JestParent, JestCounter }
};
</script>

<style>
</style>