import { UnparsedObject } from "@datadog/datadog-api-client";

import { EntityV3API } from "./EntityV3API";
import { EntityV3Datastore } from "./EntityV3Datastore";
import { EntityV3Queue } from "./EntityV3Queue";
import { EntityV3Service } from "./EntityV3Service";
import { EntityV3System } from "./EntityV3System";

/**
 * Entity schema v3.
 */
export type EntityV3 =
  | EntityV3Service
  | EntityV3Datastore
  | EntityV3Queue
  | EntityV3System
  | EntityV3API
  | UnparsedObject;
