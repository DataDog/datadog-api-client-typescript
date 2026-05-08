import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of a data projection request.
 */
export type DataProjectionRequestType = typeof DATA_PROJECTION | UnparsedObject;
export const DATA_PROJECTION = "data_projection";
