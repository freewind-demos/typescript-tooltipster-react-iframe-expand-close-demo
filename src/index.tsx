import $ from 'jquery';
import 'tooltipster';
import 'tooltipster/dist/js/tooltipster.bundle';
import 'tooltipster/dist/css/tooltipster.bundle.min.css';
import ReactDOM from 'react-dom';
import React from 'react';
import {TooltipContent} from "./TooltipContent";
import './index.css'
import {css} from "@emotion/css";

const center = css`
  top: 50% !important;
  left: 50% !important;
  transform: translate(-50%, -50%) !important;
`

$('#button').tooltipster({
    animationDuration: 100,
    content: '<div></div>',
    contentAsHTML: true,
    interactive: true,
    arrow: true,
    trigger: 'click',
    side: ['right', 'left', 'bottom', 'top'],
    functionReady: (instance, helper) => {
        let tooltipElement = helper.tooltip;
        console.log("### helper.tooltip", tooltipElement);
        if (!tooltipElement) return;

        tooltipElement.style.width = 'fit-content';
        tooltipElement.style.height = 'fit-content';

        const container = tooltipElement.querySelector('.tooltipster-content');
        if (container) {
            ReactDOM.render(<TooltipContent
                iframe={{
                    url: 'https://www.heteroclito.fr/modules/tooltipster/',
                    initWidth: '600px',
                    initHeight: '400px',
                }}
                onClose={() => instance.close()}
                onExpand={(expand) => {
                    if (!tooltipElement) return;
                    if (expand) {
                        tooltipElement.classList.add(center);
                    } else {
                        tooltipElement.classList.remove(center);
                    }
                }}
            />, container);
        }
    },
});
