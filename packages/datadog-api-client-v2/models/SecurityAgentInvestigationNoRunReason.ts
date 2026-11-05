/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Why `filter[signal_id]` returned no investigation. Set only on the first page of an empty result. The reason is
 * based on the organization's current settings. Poll again only on `investigation_not_started`, after the number
 * of seconds in the `Retry-After` header; treat the others as final for this signal.
 * - `investigation_not_started`: no investigation has started yet, but one may still start.
 * - `not_investigated`: no investigation started within an hour of the signal, so none is expected. The signal
 *   was skipped for a reason this API doesn't report, such as its severity or a rate limit.
 * - `rule_not_enabled`: the signal's detection rule doesn't have Bits Security Analyst enabled, so no
 *   investigation starts automatically.
 * - `signal_not_found`: the ID isn't a signal ID, or no signal with this ID exists in the organization.
 * - `org_not_activated`: the organization hasn't activated Bits Security Analyst.
 */

export type SecurityAgentInvestigationNoRunReason =
  | typeof INVESTIGATION_NOT_STARTED
  | typeof NOT_INVESTIGATED
  | typeof RULE_NOT_ENABLED
  | typeof SIGNAL_NOT_FOUND
  | typeof ORG_NOT_ACTIVATED
  | UnparsedObject;
export const INVESTIGATION_NOT_STARTED = "investigation_not_started";
export const NOT_INVESTIGATED = "not_investigated";
export const RULE_NOT_ENABLED = "rule_not_enabled";
export const SIGNAL_NOT_FOUND = "signal_not_found";
export const ORG_NOT_ACTIVATED = "org_not_activated";
