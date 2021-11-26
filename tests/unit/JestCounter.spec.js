import { mount, createLocalVue } from "@vue/test-utils";
import axios from "axios";
import Vuex from "vuex";
import JestCounter from "@/components/JestCounter.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

// jest.mock("axios", () => ({
//     __esModule: true,
//     // default: jest.fn(() => Promise.resolve({ data: { test: "test", yyy: "xxx" } }))
//     default: {
//         get: jest.fn(() => Promise.resolve({ data: { test: "test", yyy: "xxx" } }))
//     }
// }));

describe("JestCounter.vue", () => {
    let wrapper, store, mutations;

    beforeEach(() => {
        mutations = {
            incCount: jest.fn(),
            decCount: jest.fn()
        };

        store = new Vuex.Store({ mutations });
        wrapper = mount(JestCounter, { localVue, store });

        // wrapper = mount(JestCounter, {
        //     propsData: {
        //         test: 1
        //     }
        // });
    });

    it("renders", () => {
        expect(wrapper.exists()).toBe(true);
    });

    it("start to 0", () => {
        // expect(wrapper.find(".jc__label").text()).toBe("0");
        expect(wrapper.vm.count).toBe(0);
    });

    it("calls the store mutation", async () => {
        const buttons = wrapper.findAll("button");

        await buttons.at(0).trigger("click");
        // expect(mutations.incCount).toBeCalled();
        expect(mutations.incCount).toBeCalledTimes(1);
    });

    it("emits wasIncremented on click", async () => {
        const buttons = wrapper.findAll("button");

        await buttons.at(0).trigger("click");
        // expect(mutations.incCount).toBeCalled();
        // expect(mutations.incCount).toBeCalledTimes(1);
        // expect(wrapper.emitted().wasIncremented).toBeTruthy();
        // console.log(wrapper.emitted("wasIncremented")[0]).;
        expect(wrapper.emitted("wasIncremented")[0][0]).toEqual(1);
    });

    it("update the count", async () => {
        const buttons = wrapper.findAll("button");
        // const dummyInc = jest.fn();

        // wrapper.setMethods({
        //     doInc: dummyInc
        // });

        await buttons.at(0).trigger("click");

        // expect(dummyInc).toBeCalled();
        expect(wrapper.find(".jc__label").text()).toBe("1");
        expect(wrapper.vm.count).toBe(1);

        await buttons.at(1).trigger("click");
        // expect(wrapper.find(".jc__label").text()).toBe("0");
        expect(wrapper.vm.count).toBe(0);
    });

    it("don't go below 0", async () => {
        const buttons = wrapper.findAll("button");

        await buttons.at(1).trigger("click");
        expect(wrapper.find(".jc__label").text()).toBe("0");
    });

    test("transform object", async () => {
        // axios.get = jest.fn(() => Promise.resolve({ data: { test: "test", yyy: "xxx" } }));

        // jest.spyOn(axios, "default").mockResolvedValue({ data: { test: "test", yyy: "xxx" } });
        const fn = jest.spyOn(axios, "get").mockResolvedValue({ data: { test: "test", yyy: "xxx" } });

        const data = await wrapper.vm.transformObject();
        expect(data).toEqual({ m_test: "test", v_yyy: "xxx" });

        expect(fn).toBeCalled();
    });
});