// ==UserScript==
// @name              PagePrintableView
// @author            SpyDeX
// @namespace         PSVScripts
// @description       Открытие некоторых страниц в режиме "очищенного текста" в отдельном окне, набросок скрипта для "PrintFriendly" очистки вручуню.
// @match             https*
// @match             http*
// @version           0.0.0.1
// @grant             GM_xmlhttpRequest
// @grant             GM_openInTab
// @grant             GM_registerMenuCommand
// @contributionURL   https://www.paypal.me/GreasyScripts/1.5usd
// @supportURL        https://phantomcity.github.io/GS/AF/
// @icon              data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBVcGxvYWRlZCB0bzogU1ZHIFJlcG8sIHd3dy5zdmdyZXBvLmNvbSwgR2VuZXJhdG9yOiBTVkcgUmVwbyBNaXhlciBUb29scyAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgDQoJIHZpZXdCb3g9IjAgMCA1MDggNTA4IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIHN0eWxlPSJmaWxsOiNGNEVGRUY7IiBkPSJNNDUyLDQ5NGMwLDQuNC0zLjYsOC04LDhINjhjLTQuNCwwLTgtMy42LTgtOFYxNGMwLTQuNCwzLjYtOCw4LThoMzc2YzQuNCwwLDgsMy42LDgsOFY0OTR6Ii8+DQo8cmVjdCB4PSIxMDAiIHk9IjQ2IiBzdHlsZT0iZmlsbDojQUVCMUI0OyIgd2lkdGg9IjMxMiIgaGVpZ2h0PSI4OCIvPg0KPHJlY3QgeD0iMTAwIiB5PSIzMzQiIHN0eWxlPSJmaWxsOiM3RDhCOTU7IiB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIvPg0KPHBhdGggZD0iTTMxMiwxODBIMTAwYy0yLjQsMC00LTEuNi00LTRzMS42LTQsNC00aDIxMmMyLjQsMCw0LDEuNiw0LDRTMzE0LjQsMTgwLDMxMiwxODB6Ii8+DQo8cGF0aCBkPSJNMzEyLDIyMEgxMDBjLTIuNCwwLTQtMS42LTQtNHMxLjYtNCw0LTRoMjEyYzIuNCwwLDQsMS42LDQsNFMzMTQuNCwyMjAsMzEyLDIyMHoiLz4NCjxwYXRoIGQ9Ik0zMTIsMjYwSDEwMGMtMi40LDAtNC0xLjYtNC00czEuNi00LDQtNGgyMTJjMi40LDAsNCwxLjYsNCw0UzMxNC40LDI2MCwzMTIsMjYweiIvPg0KPHBhdGggZD0iTTMxMiwzMDBIMTAwYy0yLjQsMC00LTEuNi00LTRzMS42LTQsNC00aDIxMmMyLjQsMCw0LDEuNiw0LDRTMzE0LjQsMzAwLDMxMiwzMDB6Ii8+DQo8cGF0aCBkPSJNNDEyLDM0MEgyNjRjLTIuNCwwLTQtMS42LTQtNHMxLjYtNCw0LTRoMTQ4YzIuNCwwLDQsMS42LDQsNFM0MTQuNCwzNDAsNDEyLDM0MHoiLz4NCjxwYXRoIGQ9Ik00MTIsMzgwSDI2NGMtMi40LDAtNC0xLjYtNC00czEuNi00LDQtNGgxNDhjMi40LDAsNCwxLjYsNCw0UzQxNC40LDM4MCw0MTIsMzgweiIvPg0KPHBhdGggZD0iTTQxMiw0MjBIMjY0Yy0yLjQsMC00LTEuNi00LTRzMS42LTQsNC00aDE0OGMyLjQsMCw0LDEuNiw0LDRTNDE0LjQsNDIwLDQxMiw0MjB6Ii8+DQo8cGF0aCBkPSJNNDEyLDQ2MEgyNjRjLTIuNCwwLTQtMS42LTQtNHMxLjYtNCw0LTRoMTQ4YzIuNCwwLDQsMS42LDQsNFM0MTQuNCw0NjAsNDEyLDQ2MHoiLz4NCjxwYXRoIGQ9Ik00MTIsMTgwaC02NGMtMi40LDAtNC0xLjYtNC00czEuNi00LDQtNGg2NGMyLjQsMCw0LDEuNiw0LDRTNDE0LjQsMTgwLDQxMiwxODB6Ii8+DQo8cGF0aCBkPSJNNDEyLDIyMGgtNjRjLTIuNCwwLTQtMS42LTQtNHMxLjYtNCw0LTRoNjRjMi40LDAsNCwxLjYsNCw0UzQxNC40LDIyMCw0MTIsMjIweiIvPg0KPHBhdGggZD0iTTQxMiwyNjBoLTY0Yy0yLjQsMC00LTEuNi00LTRzMS42LTQsNC00aDY0YzIuNCwwLDQsMS42LDQsNFM0MTQuNCwyNjAsNDEyLDI2MHoiLz4NCjxwYXRoIGQ9Ik00MTIsMzAwaC02NGMtMi40LDAtNC0xLjYtNC00czEuNi00LDQtNGg2NGMyLjQsMCw0LDEuNiw0LDRTNDE0LjQsMzAwLDQxMiwzMDB6Ii8+DQo8cGF0aCBkPSJNNDQyLDUwOEg2NmMtNi44LDAtMTItNS4yLTEyLTEyVjEyYzAtNi44LDUuMi0xMiwxMi0xMmgzNzZjNi44LDAsMTIsNS4yLDEyLDEydjQ4NEM0NTQsNTAyLjgsNDQ4LjgsNTA4LDQ0Miw1MDh6IE02Niw4DQoJYy0yLjQsMC00LDEuNi00LDR2NDg0YzAsMi40LDEuNiw0LDQsNGgzNzZjMi40LDAsNC0xLjYsNC00VjEyYzAtMi40LTEuNi00LTQtNEg2NnoiLz4NCjxwYXRoIGQ9Ik00MTAsMTQwSDk4Yy0yLjQsMC00LTEuNi00LTRWNDhjMC0yLjQsMS42LTQsNC00aDMxMmMyLjQsMCw0LDEuNiw0LDR2ODhDNDE0LDEzOC40LDQxMi40LDE0MCw0MTAsMTQweiBNMTAyLDEzMmgzMDRWNTJIMTAyDQoJVjEzMnoiLz4NCjxwYXRoIGQ9Ik0yMTgsNDYwSDk4Yy0yLjQsMC00LTEuNi00LTRWMzM2YzAtMi40LDEuNi00LDQtNGgxMjBjMi40LDAsNCwxLjYsNCw0djEyMEMyMjIsNDU4LjQsMjIwLjQsNDYwLDIxOCw0NjB6IE0xMDIsNDUyaDExMlYzNDANCglIMTAyVjQ1MnoiLz4NCjwvc3ZnPg==
// ==/UserScript==
