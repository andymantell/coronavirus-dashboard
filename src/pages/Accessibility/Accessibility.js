// @flow

import React, { Component } from 'react';

import toc from "remark-toc";
import slug from "remark-slug";
import html from "remark-html";
import remark from "remark";
import externalLink from "remark-external-links";

import axios from "axios";

import URLs from "common/urls";

import type { AccessibilityState, AccessibilityProps } from './Accessibility.types';
import * as Styles from './Accessibility.styles';



export default class Accessibility extends Component<AccessibilityProps, {}> {

    #url = URLs.accessibility;

    state: AccessibilityState = {
        loading: false,
        data: []
    };

    getData = async () => {

        const
            { data } = await axios.get(this.#url, {responseType: "text"});
            remark()
                .use(toc)
                .use(slug)
                .use(externalLink)
                .use(html).process(data, (err, text) =>
                    this.setState({
                        data: err ? data : String(text),
                        loading: false
                    })
            );

    }; // getData

    componentDidMount() {

        this.setState({ loading: true }, this.getData)

        // ToDo: This should be done for every page in the "app.js".
        const base = document.querySelector("head>base");
        base.href = document.location.pathname;

    } // componentDidMount

    display() {

        const { loading, data } = this.state;

        if ( loading ) return <p>Loading&hellip;</p>

        return <div className={ "markdown" } dangerouslySetInnerHTML={{ __html: data }}/>

    } // display

    render(): React$Node {

        return <Styles.Container className={"govuk-width-container accessibility"}>
            <Styles.Content className="govuk-main-wrapper" role="main">
                <Styles.Container className="govuk-grid-row">
                    <Styles.Container className="govuk-grid-column-two-thirds">
                        { this.display() }
                    </Styles.Container>
                </Styles.Container>
            </Styles.Content>
        </Styles.Container>

    } // render

} // Accessibility
