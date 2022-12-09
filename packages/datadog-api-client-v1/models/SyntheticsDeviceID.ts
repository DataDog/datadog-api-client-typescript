/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

/**
 * The device ID.
 */

export type SyntheticsDeviceID =
  | typeof LAPTOP_LARGE
  | typeof TABLET
  | typeof MOBILE_SMALL
  | typeof CHROME_LAPTOP_LARGE
  | typeof CHROME_TABLET
  | typeof CHROME_MOBILE_SMALL
  | typeof FIREFOX_LAPTOP_LARGE
  | typeof FIREFOX_TABLET
  | typeof FIREFOX_MOBILE_SMALL
  | typeof EDGE_LAPTOP_LARGE
  | typeof EDGE_TABLET
  | typeof EDGE_MOBILE_SMALL
  | UnparsedObject;
export const LAPTOP_LARGE = "laptop_large";
export const TABLET = "tablet";
export const MOBILE_SMALL = "mobile_small";
export const CHROME_LAPTOP_LARGE = "chrome.laptop_large";
export const CHROME_TABLET = "chrome.tablet";
export const CHROME_MOBILE_SMALL = "chrome.mobile_small";
export const FIREFOX_LAPTOP_LARGE = "firefox.laptop_large";
export const FIREFOX_TABLET = "firefox.tablet";
export const FIREFOX_MOBILE_SMALL = "firefox.mobile_small";
export const EDGE_LAPTOP_LARGE = "edge.laptop_large";
export const EDGE_TABLET = "edge.tablet";
export const EDGE_MOBILE_SMALL = "edge.mobile_small";
