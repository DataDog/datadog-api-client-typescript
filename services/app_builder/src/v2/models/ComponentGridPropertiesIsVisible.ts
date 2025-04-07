import { UnparsedObject } from "@datadog/datadog-api-client";


/**
 * Whether the grid component and its children are visible. If a string, it must be a valid JavaScript expression that evaluates to a boolean.
 */
export type ComponentGridPropertiesIsVisible = string | boolean | UnparsedObject;
