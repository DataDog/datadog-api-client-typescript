import { UnparsedObject } from "@datadog/datadog-api-client";

import { ActionQueryMockedOutputsObject } from "./ActionQueryMockedOutputsObject";

/**
 * The mocked outputs of the action query. This is useful for testing the app without actually running the action.
 */
export type ActionQueryMockedOutputs =
  | string
  | ActionQueryMockedOutputsObject
  | UnparsedObject;
