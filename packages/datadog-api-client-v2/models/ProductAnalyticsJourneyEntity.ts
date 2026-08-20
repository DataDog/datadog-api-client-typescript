/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The kind of entity returned by a journey list query.
 */

export type ProductAnalyticsJourneyEntity =
  | typeof SESSION
  | typeof USER
  | typeof ACCOUNT
  | UnparsedObject;
export const SESSION = "session";
export const USER = "user";
export const ACCOUNT = "account";
