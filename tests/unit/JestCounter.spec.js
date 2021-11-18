import { mount } from "@vue/test-utils";
import axios from "axios";
import JestCounter from "@/components/JestCounter.vue";

// jest.mock("axios", () => ({
//     __esModule: true,
//     // default: jest.fn(() => Promise.resolve({ data: { test: "test", yyy: "xxx" } }))
//     default: {
//         get: jest.fn(() => Promise.resolve({ data: { test: "test", yyy: "xxx" } }))
//     }
// }));

describe("JestCounter.vue", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = mount(JestCounter, {
            propsData: {
                test: 1
            }
        });
    });

    it("renders", () => {
        expect(wrapper.exists()).toBe(true);
    });

    it("start to 0", () => {
        // expect(wrapper.find(".jc__label").text()).toBe("0");
        expect(wrapper.vm.count).toBe(0);
    });

    it("update the count", async () => {
        const buttons = wrapper.findAll("button");
        // const dummyInc = jest.fn();

        // wrapper.setMethods({
        //     doInc: dummyInc
        // });

        await buttons.at(0).trigger("click");
        // expect(dummyInc).toBeCalled();
        // expect(wrapper.find(".jc__label").text()).toBe("1");
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