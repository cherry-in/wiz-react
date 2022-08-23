
/* WIZ-REACT APP API
 * additional options is refer to 
 * https://developer.mozilla.org/ko/docs/Web/API/Fetch_API/Using_Fetch
 */

const __initLanding__ = () => {
    const defaultOptions = {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    };

    const __onError__ = (err) => {
        console.error(err);
    }

    const URI = (apiName) => {
        return `/app/api/page.landing/${apiName}`;
    }

    const API = async (apiName, options = {}, json = true, errorDefault = null, onError = __onError__) => {
        const opts = {
            ...defaultOptions,
            ...options,
        };
        try {
            let res = await fetch(URI(apiName), opts);
            if (!json) return res;
            const { code, data } = await res.json();
            if(!/^20[0124]$/.test(code)) {
                throw new Error(data);
            }
            return data;
        }
        catch(err) {
            onError(err);
            return errorDefault;
        }
    }

    return {
        API,
        lang: () => {
            return navigator.language;
        },
    };
}
const wiz = __initLanding__();

import { useRecoilState as wizState, useRecoilValue as wizValue } from "recoil";
import Directive from "WizDirective";
import "./view.scss";
import React, { useState, useEffect } from "react";
import { testAtom, valueSelector } from "WizStore";

window.app.controller('test-app', async ($sce, $scope, $timeout) => {
    $scope.hello = "hiiii"
})

const Landing = () => {
    return (<Directive>

<div className="container">
  <div className="card bg-primary">
    <div className="card-header">어서오세요!</div>
    <div class="card-body"><a href="/main" className="display-1">홈페이지 바로가기</a>
    </div>
  </div>
</div>
</Directive>);
}
export default Landing