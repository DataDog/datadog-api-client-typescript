import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Which revisions to return for each entity: `latest` returns only the latest revision of each entity as of `to`,
 * and `all` returns every revision in the requested time range.
 */
export type EntityContextRevisionsMode =
  | typeof LATEST
  | typeof ALL
  | UnparsedObject;
export const LATEST = "latest";
export const ALL = "all";
