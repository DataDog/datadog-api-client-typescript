import { UnparsedObject } from "@datadog/datadog-api-client-core";

import { RestrictionQueryRole } from "./RestrictionQueryRole";

/**
 * An object related to a restriction query.
 */
export type RestrictionQueryResponseIncludedItem =
  | RestrictionQueryRole
  | UnparsedObject;
