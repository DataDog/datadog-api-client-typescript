/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Whether the automation rule is active. Enabled rules trigger on matching case events; disabled rules are inactive but preserve their configuration.
 */

export type CaseAutomationRuleState =
  | typeof ENABLED
  | typeof DISABLED
  | UnparsedObject;
export const ENABLED = "ENABLED";
export const DISABLED = "DISABLED";
