import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Resource type.
 */
export type IDPConfigType = typeof IDP_CONFIG | UnparsedObject;
export const IDP_CONFIG = "idp_config";
