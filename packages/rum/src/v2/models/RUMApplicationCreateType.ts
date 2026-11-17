import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * RUM application creation type.
 */
export type RUMApplicationCreateType =
  | typeof RUM_APPLICATION_CREATE
  | UnparsedObject;
export const RUM_APPLICATION_CREATE = "rum_application_create";
