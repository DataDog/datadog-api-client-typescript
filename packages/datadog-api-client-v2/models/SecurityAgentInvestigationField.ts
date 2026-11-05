/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * An attribute of an investigation that `fields[investigations]` can select.
 */

export type SecurityAgentInvestigationField =
  | typeof SIGNAL_ID
  | typeof RULE_ID
  | typeof STATE
  | typeof VERDICT
  | typeof CONCLUSION
  | typeof SIGNAL
  | typeof KEY_ENTITIES
  | typeof KEY_EVIDENCE
  | typeof STEPS
  | typeof RESPONSE_SUGGESTIONS
  | typeof CREATED_AT
  | typeof UPDATED_AT
  | UnparsedObject;
export const SIGNAL_ID = "signal_id";
export const RULE_ID = "rule_id";
export const STATE = "state";
export const VERDICT = "verdict";
export const CONCLUSION = "conclusion";
export const SIGNAL = "signal";
export const KEY_ENTITIES = "key_entities";
export const KEY_EVIDENCE = "key_evidence";
export const STEPS = "steps";
export const RESPONSE_SUGGESTIONS = "response_suggestions";
export const CREATED_AT = "created_at";
export const UPDATED_AT = "updated_at";
