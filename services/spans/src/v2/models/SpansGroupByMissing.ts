import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The value to use for spans that don't have the facet used to group by.
 */
export type SpansGroupByMissing = string | number | UnparsedObject;
