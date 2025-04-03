import { UnparsedObject } from "@datadog/datadog-api-client";

import { AuthNMappingTeam } from "./AuthNMappingTeam";
import { Role } from "./Role";
import { SAMLAssertionAttribute } from "./SAMLAssertionAttribute";

/**
 * Included data in the AuthN Mapping response.
 */
export type AuthNMappingIncluded =
  | SAMLAssertionAttribute
  | Role
  | AuthNMappingTeam
  | UnparsedObject;
