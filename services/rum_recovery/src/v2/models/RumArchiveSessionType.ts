import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * JSON:API resource type.
 */
export type RumArchiveSessionType = typeof RUM_ARCHIVE_SESSION | UnparsedObject;
export const RUM_ARCHIVE_SESSION = "rum_archive_session";
