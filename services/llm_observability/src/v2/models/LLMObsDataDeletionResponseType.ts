import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Resource type for an LLM Observability data deletion response.
 */
export type LLMObsDataDeletionResponseType =
  | typeof DELETION_REQUEST
  | UnparsedObject;
export const DELETION_REQUEST = "deletion_request";
