/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */

export type SloMeasureMinutes =
  | typeof GOOD_MINUTES
  | typeof BAD_MINUTES
  | UnparsedObject;
export const GOOD_MINUTES = "good_minutes";
export const BAD_MINUTES = "bad_minutes";
