import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * JSON:API type for DORA deployment patch request.
 */
export type DORADeploymentPatchRequestDataType =
  | typeof DORA_DEPLOYMENT_PATCH_REQUEST
  | UnparsedObject;
export const DORA_DEPLOYMENT_PATCH_REQUEST = "dora_deployment_patch_request";
