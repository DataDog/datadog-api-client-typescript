/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Type of the Synthetic test, either `api` or `browser`.
 */

export type SyntheticsTestDetailsType =
  | typeof API
  | typeof BROWSER
  | UnparsedObject;
export const API = "api";
export const BROWSER = "browser";
