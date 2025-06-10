import { UnparsedObject } from "@datadog/datadog-api-client";

import { KindObj } from "./KindObj";

/**
 * Create or update kind request.
 */
export type UpsertCatalogKindRequest = KindObj | string | UnparsedObject;
