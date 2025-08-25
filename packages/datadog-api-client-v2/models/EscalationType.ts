/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";



import { UnparsedObject } from "../../datadog-api-client-common/util";


/**
 * Represents the resource type for individual steps in an escalation policy used during incident response.
*/

export type EscalationType = typeof ESCALATION_POLICY_STEPS | UnparsedObject;
export const ESCALATION_POLICY_STEPS = 'escalation_policy_steps';