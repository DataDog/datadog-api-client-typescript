/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The status of the subscription.
 */

export type SampleLogGenerationSubscriptionStatus =
  | typeof SUBSCRIBED
  | typeof RENEWED
  | typeof UNSUBSCRIBED
  | typeof NO_ACTIVE_SUBSCRIPTION
  | typeof NOT_AVAILABLE
  | typeof ACTIVE
  | typeof EXPIRED
  | UnparsedObject;
export const SUBSCRIBED = "subscribed";
export const RENEWED = "renewed";
export const UNSUBSCRIBED = "unsubscribed";
export const NO_ACTIVE_SUBSCRIPTION = "no_active_subscription";
export const NOT_AVAILABLE = "not_available";
export const ACTIVE = "active";
export const EXPIRED = "expired";
