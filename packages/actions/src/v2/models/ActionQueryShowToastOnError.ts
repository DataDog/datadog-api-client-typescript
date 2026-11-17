import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Whether to display a toast to the user when the query returns an error.
 */
export type ActionQueryShowToastOnError = boolean | string | UnparsedObject;
