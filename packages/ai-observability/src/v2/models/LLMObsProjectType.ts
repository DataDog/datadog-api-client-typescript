import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Resource type of an Agent Observability project.
 */
export type LLMObsProjectType = typeof PROJECTS | UnparsedObject;
export const PROJECTS = "projects";
