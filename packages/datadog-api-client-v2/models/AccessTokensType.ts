/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Resource type returned by the access tokens list endpoint. Includes both personal and service access tokens.
 */

export type AccessTokensType =
  | typeof PERSONAL_ACCESS_TOKENS
  | typeof SERVICE_ACCESS_TOKENS
  | UnparsedObject;
export const PERSONAL_ACCESS_TOKENS = "personal_access_tokens";
export const SERVICE_ACCESS_TOKENS = "service_access_tokens";
