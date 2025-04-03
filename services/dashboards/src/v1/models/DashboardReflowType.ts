import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Reflow type for a **new dashboard layout** dashboard. Set this only when layout type is 'ordered'.
 * If set to 'fixed', the dashboard expects all widgets to have a layout, and if it's set to 'auto',
 * widgets should not have layouts.
 */
export type DashboardReflowType = typeof AUTO | typeof FIXED | UnparsedObject;
export const AUTO = "auto";
export const FIXED = "fixed";
