/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The visibility of the notification rule.
 */

export type IncidentNotificationRuleCreateAttributesVisibility =
  | typeof ALL
  | typeof ORGANIZATION
  | typeof PRIVATE
  | UnparsedObject;
export const ALL = "all";
export const ORGANIZATION = "organization";
export const PRIVATE = "private";
