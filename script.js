/*
  KESMO Starter Kit
  Version: 1.0.0

  Shared JavaScript enhancements for KESMO web tools.
*/

"use strict";

/**
 * Updates the copyright year in the site footer.
 *
 * The fallback year remains visible in the HTML when JavaScript
 * is unavailable.
 */
function updateCopyrightYear() {
  const currentYearElement = document.getElementById("current-year");

  if (!currentYearElement) {
    return;
  }

  currentYearElement.textContent = String(new Date().getFullYear());
}

/**
 * Initializes shared KESMO page enhancements.
 */
function initializePage() {
  updateCopyrightYear();
}

initializePage();
