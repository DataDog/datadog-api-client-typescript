import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Resource type for an LLM Observability data deletion request.
 */
export type LLMObsDataDeletionRequestType =
  | typeof CREATE_DELETION_REQ
  | UnparsedObject;
export const CREATE_DELETION_REQ = "create_deletion_req";
