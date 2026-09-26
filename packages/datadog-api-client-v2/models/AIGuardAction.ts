/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The action recommendation from the AI Guard evaluation.
 */

export type AIGuardAction =
  | typeof ALLOW
  | typeof DENY
  | typeof ABORT
  | UnparsedObject;
export const ALLOW = "ALLOW";
export const DENY = "DENY";
export const ABORT = "ABORT";
