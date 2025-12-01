import { UnparsedObject } from "@datadog/datadog-api-client";

import { RestrictionQueryRole } from "./RestrictionQueryRole";

/**
 * An object related to a restriction query.
 */
export type RestrictionQueryResponseIncludedItem =
  | RestrictionQueryRole
  | UnparsedObject;
