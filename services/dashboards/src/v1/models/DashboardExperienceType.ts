import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The experience type of the dashboard.
 */
export type DashboardExperienceType =
  | typeof DEFAULT
  | typeof PRODUCT_ANALYTICS
  | UnparsedObject;
export const DEFAULT = "default";
export const PRODUCT_ANALYTICS = "product_analytics";
