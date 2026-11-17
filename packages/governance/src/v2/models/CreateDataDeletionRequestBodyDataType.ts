import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * The deletion request type.
 */
export type CreateDataDeletionRequestBodyDataType =
  | typeof CREATE_DELETION_REQ
  | UnparsedObject;
export const CREATE_DELETION_REQ = "create_deletion_req";
