import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Resource type of an LLM Observability dataset draft state.
 */
export type LLMObsDatasetDraftStateType =
  | typeof DRAFT_STATE_DATA
  | UnparsedObject;
export const DRAFT_STATE_DATA = "draft_state_data";
