/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Incident rule resource type.
 */

export type IncidentRuleType = typeof INCIDENT_RULE | UnparsedObject;
export const INCIDENT_RULE = "incident_rule";
