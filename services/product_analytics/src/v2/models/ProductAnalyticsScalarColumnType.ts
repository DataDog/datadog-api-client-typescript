import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Column type.
 */
export type ProductAnalyticsScalarColumnType =
  | typeof NUMBER
  | typeof GROUP
  | UnparsedObject;
export const NUMBER = "number";
export const GROUP = "group";
