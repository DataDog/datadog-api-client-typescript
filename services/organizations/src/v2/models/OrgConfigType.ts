import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Data type of an Org Config.
 */
export type OrgConfigType = typeof ORG_CONFIGS | UnparsedObject;
export const ORG_CONFIGS = "org_configs";
