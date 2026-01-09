import { UnparsedObject } from "@datadog/datadog-api-client";

import { StatusPageAsIncluded } from "./StatusPageAsIncluded";
import { StatusPagesComponentGroup } from "./StatusPagesComponentGroup";
import { StatusPagesUser } from "./StatusPagesUser";
export type StatusPagesComponentArrayIncluded =
  | StatusPagesUser
  | StatusPageAsIncluded
  | StatusPagesComponentGroup
  | UnparsedObject;
