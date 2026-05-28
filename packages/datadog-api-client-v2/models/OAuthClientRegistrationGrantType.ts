/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * OAuth 2.0 grant type that a registered client may use.
 */

export type OAuthClientRegistrationGrantType =
  | typeof AUTHORIZATION_CODE
  | typeof REFRESH_TOKEN
  | UnparsedObject;
export const AUTHORIZATION_CODE = "authorization_code";
export const REFRESH_TOKEN = "refresh_token";
