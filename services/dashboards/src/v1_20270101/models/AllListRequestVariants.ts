import { UnparsedObject } from "@datadog/datadog-api-client";

import { CompositeStreamRequest } from "./CompositeStreamRequest";
import { DatasetListRequest } from "./DatasetListRequest";
import { InfrastructureListRequest } from "./InfrastructureListRequest";
import { ListStreamRequest } from "./ListStreamRequest";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export type AllListRequestVariants =
  | ListStreamRequest
  | CompositeStreamRequest
  | DatasetListRequest
  | InfrastructureListRequest
  | UnparsedObject;
