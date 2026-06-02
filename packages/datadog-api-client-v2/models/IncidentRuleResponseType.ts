/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Incident rule response resource type.
 */

export type IncidentRuleResponseType = typeof INCIDENTS_RULES | UnparsedObject;
export const INCIDENTS_RULES = "incidents_rules";
