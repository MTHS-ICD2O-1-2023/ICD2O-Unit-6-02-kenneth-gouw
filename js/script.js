// Copyright (c) 2020 Kenneth All rights reserved
//
// Created by: May  2024
// This file contains the JS functions for index.html

"use strict"

let clicks = parseInt(localStorage.getItem("click-counter")) || 0

function updateCookieCount() {

  document.getElementById("click-count").innerHTML = clicks
}

function myButtonClicked() {
  clicks += 1

  // Update the HTML element with the updated clicks value
  document.getElementById("click-count").innerHTML = clicks

  // Update the clicks value in local storage
  localStorage.setItem("click-counter", clicks)
}