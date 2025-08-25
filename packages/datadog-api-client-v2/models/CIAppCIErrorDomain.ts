/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Error category used to differentiate between issues related to the developer or provider environments.
 */

export type CIAppCIErrorDomain =
  | typeof PROVIDER
  | typeof USER
  | typeof UNKNOWN
  | UnparsedObject;
export const PROVIDER = "provider";
export const USER = "user";
export const UNKNOWN = "unknown";
