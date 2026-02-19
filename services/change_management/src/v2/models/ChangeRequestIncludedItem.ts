import { UnparsedObject } from "@datadog/datadog-api-client";

import { ChangeRequestIncludedDecision } from "./ChangeRequestIncludedDecision";
import { ChangeRequestIncludedUser } from "./ChangeRequestIncludedUser";

/**
 * An included resource item in the change request response.
 */
export type ChangeRequestIncludedItem =
  | ChangeRequestIncludedUser
  | ChangeRequestIncludedDecision
  | UnparsedObject;
