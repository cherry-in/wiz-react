import React, { useState, useEffect } from "react";
import { testAtom, valueSelector } from "WizStore";

window.app.controller('test-app', async ($sce, $scope, $timeout) => {
    $scope.hello = "hiiii"
})

const WizComponent = () => {
    return WizView;
}