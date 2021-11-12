import { mount } from "@vue/test-utils";
import JestCounter from "@/components/JestCounter.vue";

describe("JestCounter.vue", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = mount(JestCounter, {
            propsData: {}
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
        const dummyInc = jest.fn();

        wrapper.setMethods({
            doInc: dummyInc
        });

        await buttons.at(0).trigger("click");
        expect(dummyInc).toBeCalled();
        // expect(wrapper.vm.count).toBe(1);
        // expect(wrapper.find(".jc__label").text()).toBe("1");

        await buttons.at(1).trigger("click");
        expect(wrapper.vm.count).toBe(0);
        // expect(wrapper.find(".jc__label").text()).toBe("0");
    });

    it("don't go below 0", async () => {
        const buttons = wrapper.findAll("button");

        await buttons.at(1).trigger("click");
        expect(wrapper.find(".jc__label").text()).toBe("0");
    });
});