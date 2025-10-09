import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Upload resource type.
 */
export type CreateUploadResponseDataType = typeof UPLOAD | UnparsedObject;
export const UPLOAD = "upload";
