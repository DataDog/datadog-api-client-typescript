/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */

export type SloMeasureEvents =
  | typeof GOOD_EVENTS
  | typeof BAD_EVENTS
  | UnparsedObject;
export const GOOD_EVENTS = "good_events";
export const BAD_EVENTS = "bad_events";
