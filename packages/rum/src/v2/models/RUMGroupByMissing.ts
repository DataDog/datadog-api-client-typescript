import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * The value to use for logs that don't have the facet used to group by.
 */
export type RUMGroupByMissing = string | number | UnparsedObject;
