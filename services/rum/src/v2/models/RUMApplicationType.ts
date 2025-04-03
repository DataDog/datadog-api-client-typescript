import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * RUM application response type.
 */
export type RUMApplicationType = typeof RUM_APPLICATION | UnparsedObject;
export const RUM_APPLICATION = "rum_application";
