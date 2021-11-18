<template>
    <div>
        <div class="jc__label">{{ count }}</div>
        <button @click="doInc">+</button>
        <button @click="doDec">-</button>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "JestCounter",
    props: {
        test: { type: Number, default: 0 }
    },
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
        },
        async transformObject() {
            const transform = (objectData) => {
                const newObject = {};
                Object.entries(objectData).forEach(([key, value]) => {
                    if (value === "xxx") {
                        newObject[`v_${key}`] = value;
                    } else {
                        newObject[`m_${key}`] = value;
                    }
                });

                return newObject;
            };

            const { data } = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
            // const { data } = await axios({ method: "get", url: "https://jsonplaceholder.typicode.com/todos/1" });
            return transform(data);
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