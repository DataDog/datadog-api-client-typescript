/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The type of a segment based on its data query configuration.
 */

export type RumSegmentSegmentType =
  | typeof STATIC
  | typeof EVENT_PLATFORM
  | typeof COMBINATION
  | typeof JOURNEYS
  | typeof REFERENCE_TABLE
  | typeof TEMPLATES
  | UnparsedObject;
export const STATIC = "static";
export const EVENT_PLATFORM = "event_platform";
export const COMBINATION = "combination";
export const JOURNEYS = "journeys";
export const REFERENCE_TABLE = "reference_table";
export const TEMPLATES = "templates";
