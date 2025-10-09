import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Upload resource type.
 */
export type CreateUploadRequestDataType = typeof UPLOAD | UnparsedObject;
export const UPLOAD = "upload";
