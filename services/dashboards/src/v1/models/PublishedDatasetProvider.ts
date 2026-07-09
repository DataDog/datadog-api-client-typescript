import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Product page that published the dataset queried by a `DatasetListQuery`. `ddsql_query` is the only provider currently supported for host map widgets.
 */
export type PublishedDatasetProvider = typeof DDSQL_QUERY | UnparsedObject;
export const DDSQL_QUERY = "ddsql_query";
