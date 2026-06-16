import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of the resource. The value should always be `service_env`.
 */
export type ApplicationSecurityServiceType =
  | typeof SERVICE_ENV
  | UnparsedObject;
export const SERVICE_ENV = "service_env";
