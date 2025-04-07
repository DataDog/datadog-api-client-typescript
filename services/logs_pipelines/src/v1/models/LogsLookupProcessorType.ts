import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of logs lookup processor.
 */
export type LogsLookupProcessorType = typeof LOOKUP_PROCESSOR | UnparsedObject;
export const LOOKUP_PROCESSOR = "lookup-processor";
