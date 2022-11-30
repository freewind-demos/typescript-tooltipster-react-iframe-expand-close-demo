import type {FC} from "react";
import React, {useState} from "react";

interface Props {
    iframe: {
        url: string;
        initWidth: string;
        initHeight: string;
    };
    onExpand: (expand: boolean) => void;
    onClose: () => void;
}

export const TooltipContent: FC<Props> = React.memo(({iframe: {url, initWidth, initHeight}, onClose, onExpand}) => {
    const [expand, setExpand] = useState(false);
    return <div style={{position: 'relative'}}>
        <iframe src={url} style={
            expand
                ? {minWidth: '80vw', minHeight: '80vh'}
                : {minWidth: initWidth, minHeight: initHeight}
        }/>
        <div style={{position: 'absolute', top: 0, right: 0}}>
            <button onClick={() => {
                setExpand(v => !v)
                onExpand(!expand)
            }}>{expand ? 'Collapse' : 'Expand'}</button>
            <button onClick={onClose}>Close</button>
        </div>
    </div>
})
