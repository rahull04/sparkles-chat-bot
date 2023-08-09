import './index.scss';
interface MessageProps {
    title: string;
    from?: 'user' | 'bot';
    listLength: number;
    index: number;
    botName: string;
    botImage: string;
}
export declare const Message: ({ title, from, listLength, index, botName, botImage }: MessageProps) => JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map