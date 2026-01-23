/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Request type
 */

export type RevertCustomRuleRevisionDataType =
  | typeof REVERT_CUSTOM_RULE_REVISION_REQUEST
  | UnparsedObject;
export const REVERT_CUSTOM_RULE_REVISION_REQUEST =
  "revert_custom_rule_revision_request";
