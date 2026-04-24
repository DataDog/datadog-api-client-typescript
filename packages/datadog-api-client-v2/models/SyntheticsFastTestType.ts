/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Type of the Synthetic fast test that produced this result.
 */

export type SyntheticsFastTestType =
  | typeof FAST_API
  | typeof FAST_BROWSER
  | UnparsedObject;
export const FAST_API = "fast-api";
export const FAST_BROWSER = "fast-browser";
