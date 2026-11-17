/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Type of an outreach policy rules update request.
 */

export type SecurityAgentOutreachRulesUpdateType =
  | typeof OUTREACH_POLICY_RULES_UPDATE
  | UnparsedObject;
export const OUTREACH_POLICY_RULES_UPDATE = "outreach_policy_rules_update";
