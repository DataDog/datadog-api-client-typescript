import { UnparsedObject } from "@datadog/datadog-api-client";

import { StatusPageAsIncluded } from "./StatusPageAsIncluded";
import { StatusPagesUser } from "./StatusPagesUser";
export type DegradationIncluded =
  | StatusPagesUser
  | StatusPageAsIncluded
  | UnparsedObject;
