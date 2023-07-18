import { MainContainer } from "./components/MainContainer";
import './index.css';
import { Header } from "./components/Header";
import { TypeSection } from "./components/TypeSection";
import { ToggleButton } from "./components/ToggleButton";
import { MessagePanel } from "./components/MessagePanel";
export var ChatBot = function (_a) {
    var wrapperClassName = _a.wrapperClassName, visible = _a.visible, headerWrapperClassName = _a.headerWrapperClassName, setVisible = _a.setVisible, input = _a.input, onChange = _a.onChange;
    if (!visible) {
        return <ToggleButton onClick={setVisible}/>;
    }
    return (<MainContainer wrapperClassName={wrapperClassName} visible={visible}>
            <Header wrapperClassName={headerWrapperClassName} onClose={setVisible}/>
            <MessagePanel messages={["Add the variable font stylesheet request to your head tag and the current variable axes configuration to icons using CSS."]}/>
            <TypeSection input={input} onChange={onChange}/>
        </MainContainer>);
};
//# sourceMappingURL=ChatBot.js.map