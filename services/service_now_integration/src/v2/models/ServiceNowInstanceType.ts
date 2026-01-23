import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type identifier for ServiceNow instance resources
 */
export type ServiceNowInstanceType = typeof INSTANCE | UnparsedObject;
export const INSTANCE = "instance";
