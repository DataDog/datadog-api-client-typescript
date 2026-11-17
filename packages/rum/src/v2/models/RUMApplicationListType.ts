import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * RUM application list type.
 */
export type RUMApplicationListType = typeof RUM_APPLICATION | UnparsedObject;
export const RUM_APPLICATION = "rum_application";
