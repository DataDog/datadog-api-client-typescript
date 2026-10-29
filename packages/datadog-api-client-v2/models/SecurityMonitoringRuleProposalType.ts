/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The rule proposal resource type. The value is always `rule_proposals`.
 */

export type SecurityMonitoringRuleProposalType =
  | typeof RULE_PROPOSALS
  | UnparsedObject;
export const RULE_PROPOSALS = "rule_proposals";
