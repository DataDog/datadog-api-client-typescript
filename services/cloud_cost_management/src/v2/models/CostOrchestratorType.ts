import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of the Cloud Cost Management orchestrator resource.
 */
export type CostOrchestratorType = typeof COST_ORCHESTRATOR | UnparsedObject;
export const COST_ORCHESTRATOR = "cost_orchestrator";
