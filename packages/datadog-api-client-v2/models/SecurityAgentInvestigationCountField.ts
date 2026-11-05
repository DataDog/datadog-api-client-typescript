/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Field to count completed investigations by.
 */

export type SecurityAgentInvestigationCountField =
  | typeof VERDICT
  | typeof RULE_TYPE
  | typeof SIGNAL_SOURCE
  | typeof ENTITY
  | UnparsedObject;
export const VERDICT = "verdict";
export const RULE_TYPE = "rule_type";
export const SIGNAL_SOURCE = "signal_source";
export const ENTITY = "entity";
