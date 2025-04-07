import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The app definition type.
 */
export type AppDefinitionType = typeof APPDEFINITIONS | UnparsedObject;
export const APPDEFINITIONS = "appDefinitions";
