import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Whether to run this query. If specified, the query will only run if this condition evaluates to `true` in JavaScript and all other conditions are also met.
 */
export type ActionQueryCondition = boolean | string | UnparsedObject;
