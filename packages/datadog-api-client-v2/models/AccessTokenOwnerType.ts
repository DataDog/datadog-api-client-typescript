/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Owner resource type. Either a user or a service account.
 */

export type AccessTokenOwnerType =
  | typeof USERS
  | typeof SERVICE_ACCOUNT
  | UnparsedObject;
export const USERS = "users";
export const SERVICE_ACCOUNT = "service_account";
