import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Components resource type.
 */
export type StatusPagesComponentGroupType = typeof COMPONENTS | UnparsedObject;
export const COMPONENTS = "components";
