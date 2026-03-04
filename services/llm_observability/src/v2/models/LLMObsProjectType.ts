import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Resource type of an LLM Observability project.
 */
export type LLMObsProjectType = typeof PROJECTS | UnparsedObject;
export const PROJECTS = "projects";
