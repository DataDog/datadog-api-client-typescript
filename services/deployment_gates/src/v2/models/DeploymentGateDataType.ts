import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Deployment gate resource type.
 */
export type DeploymentGateDataType = typeof DEPLOYMENT_GATE | UnparsedObject;
export const DEPLOYMENT_GATE = "deployment_gate";
