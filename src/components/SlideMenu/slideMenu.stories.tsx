import SlideMenu from "./slideMenu";

export default {
    childiren: '',
    title: 'Component/SlideMenu',
    component: SlideMenu
};

const Template = (args: any) => {
    return(
        <SlideMenu {...args} />
    )
};

const props = {
    defaultProps: () => ({}),
};

export const SlideMenuStory: any = Template.bind({});
const defaultProps = props.defaultProps();
SlideMenuStory.storyName = 'SlideMenu';
SlideMenuStory.args = {
    ...defaultProps,
}