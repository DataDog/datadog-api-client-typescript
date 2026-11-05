/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Sort order for budget instance counters.
 */

export type AiGatewayBudgetInstanceSort =
  | typeof SPEND_DESC
  | typeof SPEND_ASC
  | typeof KEY_ASC
  | UnparsedObject;
export const SPEND_DESC = "spend_desc";
export const SPEND_ASC = "spend_asc";
export const KEY_ASC = "key_asc";
