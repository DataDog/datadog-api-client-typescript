import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * RUM application update type.
 */
export type RUMApplicationUpdateType =
  | typeof RUM_APPLICATION_UPDATE
  | UnparsedObject;
export const RUM_APPLICATION_UPDATE = "rum_application_update";
