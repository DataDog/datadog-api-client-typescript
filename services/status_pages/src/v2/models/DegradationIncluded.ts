import { UnparsedObject } from "@datadog/datadog-api-client";

import { StatusPageAsIncluded } from "./StatusPageAsIncluded";
import { StatusPagesUser } from "./StatusPagesUser";

/**
 * An included resource related to a degradation or maintenance.
 */
export type DegradationIncluded =
  | StatusPagesUser
  | StatusPageAsIncluded
  | UnparsedObject;
