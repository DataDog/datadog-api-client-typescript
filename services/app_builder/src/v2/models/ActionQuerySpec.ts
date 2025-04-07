import { UnparsedObject } from "@datadog/datadog-api-client";

import { ActionQuerySpecObject } from "./ActionQuerySpecObject";

/**
 * The definition of the action query.
 */
export type ActionQuerySpec = string | ActionQuerySpecObject | UnparsedObject;
