/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * OIDC scope a client may be restricted to.
 */

export type OAuthOidcScope =
  | typeof OPENID
  | typeof PROFILE
  | typeof EMAIL
  | typeof OFFLINE_ACCESS
  | UnparsedObject;
export const OPENID = "openid";
export const PROFILE = "profile";
export const EMAIL = "email";
export const OFFLINE_ACCESS = "offline_access";
