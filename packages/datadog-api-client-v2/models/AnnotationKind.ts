/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Kind of annotation. `pointInTime` annotations mark a single moment in time,
 * while `timeRegion` annotations span a window of time and require an `end_time`.
 */

export type AnnotationKind =
  | typeof POINT_IN_TIME
  | typeof TIME_REGION
  | UnparsedObject;
export const POINT_IN_TIME = "pointInTime";
export const TIME_REGION = "timeRegion";
