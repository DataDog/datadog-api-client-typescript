/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The execution mode for an AI rule revision.
 */

export type AiCustomRuleRevisionExecutionMode =
  | typeof AUTO
  | typeof MANUAL
  | typeof ALWAYS
  | UnparsedObject;
export const AUTO = "auto";
export const MANUAL = "manual";
export const ALWAYS = "always";
