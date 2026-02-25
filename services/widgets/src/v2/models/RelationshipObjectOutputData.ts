import { UnparsedObject } from "@datadog/datadog-api-client";

import { ResourceIdentifierObject } from "./ResourceIdentifierObject";
export type RelationshipObjectOutputData =
  | ResourceIdentifierObject
  | Array<ResourceIdentifierObject>
  | UnparsedObject;
