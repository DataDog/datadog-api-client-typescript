import { UnparsedObject } from "@datadog/datadog-api-client-core";

import { StatusPageAsIncluded } from "./StatusPageAsIncluded";
import { StatusPagesComponentGroup } from "./StatusPagesComponentGroup";
import { StatusPagesUser } from "./StatusPagesUser";

/**
 * An included resource related to a component.
 */
export type StatusPagesComponentArrayIncluded =
  | StatusPagesUser
  | StatusPageAsIncluded
  | StatusPagesComponentGroup
  | UnparsedObject;
