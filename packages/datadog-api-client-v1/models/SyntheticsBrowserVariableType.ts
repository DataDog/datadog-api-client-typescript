/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

/**
 * Type of browser test variable.
 */

export type SyntheticsBrowserVariableType =
  | typeof ELEMENT
  | typeof EMAIL
  | typeof GLOBAL
  | typeof JAVASCRIPT
  | typeof TEXT
  | UnparsedObject;
export const ELEMENT = "element";
export const EMAIL = "email";
export const GLOBAL = "global";
export const JAVASCRIPT = "javascript";
export const TEXT = "text";
