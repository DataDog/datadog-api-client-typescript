/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Subscription preferences resource type.
 */

export type IncidentStatuspagePreferencesType =
  | typeof STATUSPAGE_SUBSCRIPTION_PREFERENCES
  | UnparsedObject;
export const STATUSPAGE_SUBSCRIPTION_PREFERENCES =
  "statuspage_subscription_preferences";
