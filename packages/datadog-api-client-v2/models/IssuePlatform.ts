/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Platform associated with the issue.
 */

export type IssuePlatform =
  | typeof ANDROID
  | typeof BACKEND
  | typeof BROWSER
  | typeof FLUTTER
  | typeof IOS
  | typeof REACT_NATIVE
  | typeof ROKU
  | typeof UNKNOWN
  | UnparsedObject;
export const ANDROID = "ANDROID";
export const BACKEND = "BACKEND";
export const BROWSER = "BROWSER";
export const FLUTTER = "FLUTTER";
export const IOS = "IOS";
export const REACT_NATIVE = "REACT_NATIVE";
export const ROKU = "ROKU";
export const UNKNOWN = "UNKNOWN";
