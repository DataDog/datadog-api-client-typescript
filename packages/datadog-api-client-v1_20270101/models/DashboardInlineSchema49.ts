/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */

export type DashboardInlineSchema49 =
  | typeof CUSTOM_BG
  | typeof CUSTOM_TEXT
  | typeof CUSTOM_IMAGE
  | UnparsedObject;
export const CUSTOM_BG = "custom_bg";
export const CUSTOM_TEXT = "custom_text";
export const CUSTOM_IMAGE = "custom_image";
