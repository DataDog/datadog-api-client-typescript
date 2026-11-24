/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The organization's outreach mode. `off` disables user outreach. `manual` only sends outreach an analyst
 * triggers. `automated` auto-sends automated interviews for rules with outreach enabled, to users whose email
 * domain is allowed.
 */

export type SecurityAgentOutreachMode =
  | typeof OFF
  | typeof MANUAL
  | typeof AUTOMATED
  | UnparsedObject;
export const OFF = "off";
export const MANUAL = "manual";
export const AUTOMATED = "automated";
