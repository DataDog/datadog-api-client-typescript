import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * The state variable type.
 */
export type StateVariableType = typeof STATEVARIABLE | UnparsedObject;
export const STATEVARIABLE = "stateVariable";
