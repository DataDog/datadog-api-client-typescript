import { UnparsedObject } from "@datadog/datadog-api-client";

import { StatusPageAsIncluded } from "./StatusPageAsIncluded";
import { StatusPagesUser } from "./StatusPagesUser";
export type DegradationArrayIncluded =
  | StatusPagesUser
  | StatusPageAsIncluded
  | UnparsedObject;
