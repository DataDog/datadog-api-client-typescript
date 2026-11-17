import { UnparsedObject } from "@datadog/datadog-api-client-core";

import { Degradation } from "./Degradation";
import { StatusPageAsIncluded } from "./StatusPageAsIncluded";
import { StatusPagesUser } from "./StatusPagesUser";

/**
 * Resources included in a degradation update response.
 */
export type DegradationUpdateIncluded =
  | StatusPagesUser
  | Degradation
  | StatusPageAsIncluded
  | UnparsedObject;
