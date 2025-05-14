/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Whether a monitor is in draft or published state. Draft monitors do not notify recipients. Draft monitors are currently in
 * preview and the field is only processed for enabled customers. This accepts the values `draft`
 * and `published`. Defaults to published.
 */

export type MonitorDraftStatus =
  | typeof DRAFT
  | typeof PUBLISHED
  | UnparsedObject;
export const DRAFT = "draft";
export const PUBLISHED = "published";
