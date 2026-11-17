import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * JSON:API resource type.
 */
export type RumArchiveConfigType = typeof RUM_ARCHIVE_CONFIG | UnparsedObject;
export const RUM_ARCHIVE_CONFIG = "rum_archive_config";
