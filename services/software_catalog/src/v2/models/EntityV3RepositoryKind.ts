import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The definition of Entity V3 Repository Kind object.
 */
export type EntityV3RepositoryKind = typeof REPOSITORY | UnparsedObject;
export const REPOSITORY = "repository";
