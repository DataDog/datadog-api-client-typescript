import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Service account resource type.
 */
export type ServiceAccountType = typeof SERVICE_ACCOUNT | UnparsedObject;
export const SERVICE_ACCOUNT = "service_account";
