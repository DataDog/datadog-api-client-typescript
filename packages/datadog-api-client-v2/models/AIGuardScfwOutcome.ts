/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The Supply Chain Firewall outcome for a package, a matched rule, or the whole request.
 */

export type AIGuardScfwOutcome =
  | typeof ALLOW
  | typeof WARN
  | typeof BLOCK
  | UnparsedObject;
export const ALLOW = "ALLOW";
export const WARN = "WARN";
export const BLOCK = "BLOCK";
