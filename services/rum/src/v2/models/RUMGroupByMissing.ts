import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The value to use for events that don't have the facet used to group by.
 */
export type RUMGroupByMissing = string | number | UnparsedObject;
