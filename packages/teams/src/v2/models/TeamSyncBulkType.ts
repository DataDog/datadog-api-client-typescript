import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Team sync bulk type.
 */
export type TeamSyncBulkType = typeof TEAM_SYNC_BULK | UnparsedObject;
export const TEAM_SYNC_BULK = "team_sync_bulk";
