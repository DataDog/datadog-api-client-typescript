import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type identifier for ServiceNow business service resources
 */
export type ServiceNowBusinessServiceType =
  | typeof BUSINESS_SERVICES
  | UnparsedObject;
export const BUSINESS_SERVICES = "business_services";
