import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Whether to prompt the user to confirm this query before it runs.
 */
export type ActionQueryRequiresConfirmation = boolean | string | UnparsedObject;
