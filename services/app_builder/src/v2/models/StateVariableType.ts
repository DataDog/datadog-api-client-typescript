import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The state variable type.
 */
export type StateVariableType = typeof STATEVARIABLE | UnparsedObject;
export const STATEVARIABLE = "stateVariable";
