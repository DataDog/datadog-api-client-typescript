import { UnparsedObject } from "@datadog/datadog-api-client";

import { EntityResponseIncludedIncident } from "./EntityResponseIncludedIncident";
import { EntityResponseIncludedOncall } from "./EntityResponseIncludedOncall";
import { EntityResponseIncludedRawSchema } from "./EntityResponseIncludedRawSchema";
import { EntityResponseIncludedRelatedEntity } from "./EntityResponseIncludedRelatedEntity";
import { EntityResponseIncludedSchema } from "./EntityResponseIncludedSchema";

/**
 * List entity response included item.
 */
export type ListEntityCatalogResponseIncludedItem =
  | EntityResponseIncludedSchema
  | EntityResponseIncludedRawSchema
  | EntityResponseIncludedRelatedEntity
  | EntityResponseIncludedOncall
  | EntityResponseIncludedIncident
  | UnparsedObject;
