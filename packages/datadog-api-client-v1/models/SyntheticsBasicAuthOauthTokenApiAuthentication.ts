/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

/**
 * Type of token to use when performing the authentication.
 */

export type SyntheticsBasicAuthOauthTokenApiAuthentication =
  | typeof HEADER
  | typeof BODY;
export const HEADER = "header";
export const BODY = "body";
