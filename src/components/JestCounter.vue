<template>
    <div>
        <div class="jc__label">{{ count }}</div>
        <button @click="doInc">+</button>
        <button @click="doDec">-</button>
    </div>
</template>

<script>
export default {
    name: "JestCounter",
    data() {
        return {
            count: 0
        };
    },
    methods: {
        checkAboveZero() {
            return this.count > 0;
        },
        doInc() {
            this.count += 1;
        },
        doDec() {
            if (this.checkAboveZero()) {
                this.count -= 1;
            }
        }
    }
};
</script>

<style scoped lang="scss">
    button {
        width: 25px;
        &:last-of-type {
            margin-left: 10px;
        }
    }
</style>