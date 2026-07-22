import { UnparsedObject } from "@datadog/datadog-api-client";


/**
 * Whether the UI component is visible. If this is a string, it must be a valid JavaScript expression that evaluates to a boolean.
 */
export type ComponentPropertiesIsVisible = boolean | string | UnparsedObject;
