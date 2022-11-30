import type {FC} from "react";
import React, {useEffect, useMemo, useState} from "react";

interface Props {
    iframe: {
        url: string;
        initWidth: string;
        initHeight: string;
    };
    onExpand: (expand: boolean) => void;
    onClose: () => void;
    onMount: () => void;
}

export const TooltipContent: FC<Props> = React.memo(({
                                                         iframe: {url, initWidth, initHeight},
                                                         onClose,
                                                         onMount,
                                                         onExpand
                                                     }) => {
    console.log("### TooltipContent", TooltipContent);
    const [expand, setExpand] = useState(false);
    const iframeStyle = useMemo(() => {
        return expand
            ? {minWidth: '80vw', minHeight: '80vh'}
            : {minWidth: initWidth, minHeight: initHeight}
    }, [expand, initWidth, initHeight])

    console.log("### iframeStyle", iframeStyle);

    useEffect(() => {
        onMount();
    }, [])

    return <div style={{position: 'relative'}}>
        <iframe src={url} style={iframeStyle}/>
        <div style={{position: 'absolute', top: 0, right: 0}}>
            <button onClick={() => {
                setExpand(v => !v)
                onExpand(!expand)
            }}>{expand ? 'Collapse' : 'Expand'}</button>
            <button onClick={onClose}>Close</button>
        </div>
    </div>
})
