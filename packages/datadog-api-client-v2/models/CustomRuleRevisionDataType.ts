/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Resource type
 */

export type CustomRuleRevisionDataType =
  | typeof CUSTOM_RULE_REVISION
  | UnparsedObject;
export const CUSTOM_RULE_REVISION = "custom_rule_revision";
