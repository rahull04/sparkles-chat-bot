import { MainContainer } from "./components/MainContainer";
import './index.css';
import { Header } from "./components/Header";
import { TypeSection } from "./components/TypeSection";
import { ToggleButton } from "./components/ToggleButton";
export var ChatBot = function (_a) {
    var wrapperClassName = _a.wrapperClassName, visible = _a.visible, headerWrapperClassName = _a.headerWrapperClassName, setVisible = _a.setVisible;
    if (!visible) {
        return <ToggleButton onClick={setVisible}/>;
    }
    return (<MainContainer wrapperClassName={wrapperClassName}>
            <Header wrapperClassName={headerWrapperClassName}/>
            <h1 className="text-3xl font-bold underline">
                Hello world!
            </h1>
            <TypeSection />
        </MainContainer>);
};
//# sourceMappingURL=ChatBot.js.map