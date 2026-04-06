/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The type of targeting rule (called allocation in the API model).
 */

export type AllocationType =
  | typeof FEATURE_GATE
  | typeof CANARY
  | UnparsedObject;
export const FEATURE_GATE = "FEATURE_GATE";
export const CANARY = "CANARY";
