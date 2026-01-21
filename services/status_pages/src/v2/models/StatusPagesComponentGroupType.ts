import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Components resource type.
 */
export type StatusPagesComponentGroupType = typeof COMPONENTS | UnparsedObject;
export const COMPONENTS = "components";
