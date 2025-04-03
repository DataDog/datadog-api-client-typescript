import { UnparsedObject } from "@datadog/datadog-api-client";


/**
 * The value to use for logs that don't have the facet used to group-by.
 */
export type CIAppGroupByMissing = string | number | UnparsedObject;
