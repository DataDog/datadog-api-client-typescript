import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * JSON:API resource type.
 */
export type RUMArchiveConfigType = typeof RUM_ARCHIVE_CONFIG | UnparsedObject;
export const RUM_ARCHIVE_CONFIG = "rum_archive_config";
