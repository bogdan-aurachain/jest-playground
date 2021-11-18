import { mount } from "@vue/test-utils";
import JestParent from "@/components/JestParent.vue";

describe("testing Jest Parent component", () => {
    test("check html method", () => {
        const wrapper = mount(JestParent);
        expect(wrapper.element).toMatchSnapshot();
    });
});