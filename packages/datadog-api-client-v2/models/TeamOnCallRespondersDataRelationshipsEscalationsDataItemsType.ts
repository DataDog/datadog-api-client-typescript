/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Identifies the resource type for escalation policy steps linked to a team's on-call configuration.
 */

export type TeamOnCallRespondersDataRelationshipsEscalationsDataItemsType =
  | typeof ESCALATION_POLICY_STEPS
  | UnparsedObject;
export const ESCALATION_POLICY_STEPS = "escalation_policy_steps";
