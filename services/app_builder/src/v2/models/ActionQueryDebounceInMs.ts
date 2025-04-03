import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The minimum time in milliseconds that must pass before the query can be triggered again. This is useful for preventing accidental double-clicks from triggering the query multiple times.
 */
export type ActionQueryDebounceInMs = number | string | UnparsedObject;
