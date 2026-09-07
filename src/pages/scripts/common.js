/**!
 * 
 * YDITS Policies Website
 * 
 * Copyright (C) 2023-2026 よね/Yone
 * 
 * https://github.com/YDITS/policies.ydits.net
 * 
 */

import { Render } from "https://cdn.yoneyo.com/scripts/render@1.0.0/render.js";

class Page {
    /**
     * @param {{ render: Render }} options
     */
    constructor({ render }) {
        this.render = render;
    }

    /**
     * @return {void}
     */
    initialize() {
        this.#headerElement = document.querySelector("header");
        this.#footerElement = document.querySelector("footer");
        this.#loadCommonElements();
    }

    /**
     * @type {HTMLElement | null}
     */
    #headerElement = null;

    /**
     * @type {HTMLElement | null}
     */
    #footerElement = null;

    /**
     * @type {HTMLElement | null}
     */
    #headerMenuButtonElement = null;

    /**
     * @type {HTMLElement | null}
     */
    #headerMenuElement = null;

    /**
     * @returns {void}
     */
    #loadCommonElements() {
        this.render.build({
            target: this.#headerElement,
            children: this.#header(),
        });

        this.render.build({
            target: this.#footerElement,
            children: this.#footer(),
        });

        this.#headerMenuButtonElement = document.getElementById("headerMenuButton");
        this.#headerMenuElement = document.getElementById("headerMenu");
    }

    /**
     * @returns {void}
     */
    #onClickHeaderMenuButton() {
        this.#headerMenuButtonElement?.classList.toggle("active");
        this.#headerMenuElement?.classList.toggle("active");
    }

    /**
     * @returns {HTMLElement[]}
     */
    #header() {
        const { $div, $nav, $ul, $a, $span, $button, $img } = this.render;

        return [
            $div({
                className: "header-wrapper",
                children: [
                    $a({
                        id: "headerLogo",
                        className: "header-logo",
                        href: "/",
                        children: [
                            $img({
                                className: "header-logo__image",
                                src: "https://cdn.ydits.net/images/ydits-logos/ydits_logo_transparent.png",
                                alt: "YDITS Logo image",
                            }),
                            $span({
                                className: "header-logo__text",
                                textContent: "ポリシー",
                            }),
                        ],
                    }),
                    $button({
                        id: "headerMenuButton",
                        className: "header-menu-button",
                        onClick: () => this.#onClickHeaderMenuButton(),
                        children: [
                            $span({
                                className: "material-symbols-outlined open",
                                textContent: "menu",
                            }),
                            $span({
                                className: "material-symbols-outlined close",
                                textContent: "close",
                            }),
                        ],
                    }),
                ],
            }),
            $div({
                id: "headerMenu",
                className: "header-menu",
                children: [
                    $nav({
                        className: "header-menu__nav",
                        children: [
                            $ul({
                                className: "header-menu__list",
                                children: [
                                    this.#headerMenuItem("/", "ホーム"),
                                    this.#headerMenuItem("/terms/webapp/", "YDITS for Web 利用規約"),
                                    this.#headerMenuItem("/privacy/website/", "YDITS ウェブサイト プライバシーポリシー"),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        ]
    }

    /**
     * @param {string} href
     * @param {string} title
     * @returns {HTMLElement}
     */
    #headerMenuItem(href, title) {
        const { $li, $a, $span } = this.render;

        return $li({
            className: "header-menu__item",
            children: [
                $a({
                    href: href,
                    children: [
                        $span({
                            textContent: title,
                        }),
                        $span({
                            className: "material-symbols-outlined",
                            textContent: "chevron_forward",
                        }),
                    ],
                }),
            ],
        });
    }

    /**
     * @returns {HTMLElement[]}
     */
    #footer() {
        const { $div, $span } = this.render;

        return [
            $div({
                className: "footer-wrapper",
                children: [
                    $span({
                        textContent: "© よね/Yone",
                    }),
                ],
            }),
        ]
    }
}

/**
 * @type {Render}
 */
const render = new Render();

/**
 * @type {Page}
 */
const page = new Page({ render });

page.initialize();
