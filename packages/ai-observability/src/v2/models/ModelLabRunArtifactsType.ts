import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * The JSON:API type for a run artifacts resource.
 */
export type ModelLabRunArtifactsType = typeof ARTIFACTS | UnparsedObject;
export const ARTIFACTS = "artifacts";
