import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Determines when this query is executed. If set to `false`, the query will run when the app loads and whenever any query arguments change. If set to `true`, the query will only run when manually triggered from elsewhere in the app.
 */
export type ActionQueryOnlyTriggerManually = boolean | string | UnparsedObject;
