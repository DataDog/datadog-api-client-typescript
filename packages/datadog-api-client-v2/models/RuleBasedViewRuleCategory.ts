/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The category of the security rule.
 */

export type RuleBasedViewRuleCategory =
  | typeof CLOUD_CONFIGURATION
  | typeof INFRASTRUCTURE_CONFIGURATION
  | typeof API_SECURITY
  | UnparsedObject;
export const CLOUD_CONFIGURATION = "cloud_configuration";
export const INFRASTRUCTURE_CONFIGURATION = "infrastructure_configuration";
export const API_SECURITY = "api_security";
