/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Error type returned by a browser test.
 */

export type SyntheticsBrowserErrorType =
  | typeof NETWORK
  | typeof JS
  | UnparsedObject;
export const NETWORK = "network";
export const JS = "js";
