/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Get multiple rulesets request resource type.
 */

export type GetMultipleRulesetsRequestDataType =
  | typeof GET_MULTIPLE_RULESETS_REQUEST
  | UnparsedObject;
export const GET_MULTIPLE_RULESETS_REQUEST = "get_multiple_rulesets_request";
