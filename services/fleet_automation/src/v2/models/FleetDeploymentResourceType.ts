import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of deployment resource.
 */
export type FleetDeploymentResourceType = typeof DEPLOYMENT | UnparsedObject;
export const DEPLOYMENT = "deployment";
