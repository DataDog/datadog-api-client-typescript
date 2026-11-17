import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Oncall resource type.
 */
export type EntityResponseDataRelationshipsOncallsDataItemsType =
  | typeof ONCALL
  | UnparsedObject;
export const ONCALL = "oncall";
