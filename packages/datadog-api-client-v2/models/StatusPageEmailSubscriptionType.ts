/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Status page email subscription resource type.
 */

export type StatusPageEmailSubscriptionType =
  | typeof EMAIL_SUBSCRIPTIONS
  | UnparsedObject;
export const EMAIL_SUBSCRIPTIONS = "email_subscriptions";
