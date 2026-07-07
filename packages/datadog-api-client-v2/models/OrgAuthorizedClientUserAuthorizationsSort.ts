/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Field to sort user authorizations by.
 */

export type OrgAuthorizedClientUserAuthorizationsSort =
  | typeof USER_NAME
  | typeof USER_EMAIL
  | typeof OAUTH2_CLIENT_NAME
  | UnparsedObject;
export const USER_NAME = "user.name";
export const USER_EMAIL = "user.email";
export const OAUTH2_CLIENT_NAME = "oauth2_client.name";
