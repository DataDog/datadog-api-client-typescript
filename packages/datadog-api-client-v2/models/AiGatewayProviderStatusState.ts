/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Whether the provider is working. `checking` means no observation has been recorded yet, not that a
 * check is running.
 */

export type AiGatewayProviderStatusState =
  | typeof OK
  | typeof INVALID
  | typeof CHECKING
  | UnparsedObject;
export const OK = "ok";
export const INVALID = "invalid";
export const CHECKING = "checking";
