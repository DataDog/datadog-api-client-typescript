import { UnparsedObject } from "@datadog/datadog-api-client";


/**
 * If specified, the app will poll the query at the specified interval in milliseconds. The minimum polling interval is 15 seconds. The query will only poll when the app's browser tab is active.
 */
export type ActionQueryPollingIntervalInMs = number | string | UnparsedObject;
