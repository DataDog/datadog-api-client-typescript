import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The self-service resource type.
 */
export type AppSelfServiceType = typeof SELFSERVICE | UnparsedObject;
export const SELFSERVICE = "selfService";
