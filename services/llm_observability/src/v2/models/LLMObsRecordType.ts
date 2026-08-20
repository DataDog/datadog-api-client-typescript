import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Resource type of Agent Observability dataset records.
 */
export type LLMObsRecordType = typeof RECORDS | UnparsedObject;
export const RECORDS = "records";
