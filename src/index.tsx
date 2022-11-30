import $ from 'jquery';
import 'tooltipster';
import 'tooltipster/dist/js/tooltipster.bundle';
import 'tooltipster/dist/css/tooltipster.bundle.min.css';
import ReactDOM from 'react-dom';
import React from 'react';
import {TooltipContent} from "./TooltipContent";
import './index.css'

$('#button').tooltipster({
    animationDuration: 100,
    content: '<div></div>',
    contentAsHTML: true,
    interactive: true,
    arrow: true,
    trigger: 'click',
    side: ['right', 'left', 'bottom', 'top'],
    functionReady: (instance, helper) => {
        console.log("### helper.tooltip", helper.tooltip);
        if (helper.tooltip) {
            helper.tooltip.style.width = 'fit-content';
            helper.tooltip.style.height = 'fit-content';
        }
        const container = helper.tooltip?.querySelector('.tooltipster-content');
        if (container) {

            ReactDOM.render(<TooltipContent
                iframe={{
                    url: 'https://www.heteroclito.fr/modules/tooltipster/',
                    initWidth: '600px',
                    initHeight: '400px',
                }}
                onClose={() => instance.close()}
                onExpand={(v) => console.log("### onExpand", v)}
            />, container);
        }
    },
});
