import { UnparsedObject } from "@datadog/datadog-api-client";

import { EntityV3 } from "./EntityV3";

/**
 * Create or update entity request.
 */
export type UpsertCatalogEntityRequest = EntityV3 | string | UnparsedObject;
