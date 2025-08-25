/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Indicates whether the monitor is in a draft or published state.
 *
 * `draft`: The monitor appears as Draft and does not send notifications.
 * `published`: The monitor is active and evaluates conditions and notify as configured.
 *
 * This field is in preview. The draft value is only available to customers with the feature enabled.
 */

export type MonitorDraftStatus =
  | typeof DRAFT
  | typeof PUBLISHED
  | UnparsedObject;
export const DRAFT = "draft";
export const PUBLISHED = "published";
