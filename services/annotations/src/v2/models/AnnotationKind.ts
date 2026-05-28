import { UnparsedObject } from "@datadog/datadog-api-client";

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
