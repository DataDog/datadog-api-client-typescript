import { UnparsedObject } from "@datadog/datadog-api-client";

import { StatusPageAsIncluded } from "./StatusPageAsIncluded";
import { StatusPagesUser } from "./StatusPagesUser";

/**
 * An included resource related to a status page email access policy.
 */
export type StatusPageEmailAccessPolicyIncluded =
  | StatusPagesUser
  | StatusPageAsIncluded
  | UnparsedObject;
