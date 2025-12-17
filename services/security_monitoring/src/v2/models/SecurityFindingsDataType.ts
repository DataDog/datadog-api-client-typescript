import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of the security finding resource.
 */
export type SecurityFindingsDataType = typeof FINDING | UnparsedObject;
export const FINDING = "finding";
