/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Statuspage email subscription resource type.
 */

export type IncidentStatuspageSubscriptionType =
  | typeof STATUSPAGE_EMAIL_SUBSCRIPTION
  | UnparsedObject;
export const STATUSPAGE_EMAIL_SUBSCRIPTION = "statuspage_email_subscription";
