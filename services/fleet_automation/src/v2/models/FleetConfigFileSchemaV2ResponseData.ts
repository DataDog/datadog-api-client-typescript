import { UnparsedObject } from "@datadog/datadog-api-client";

import { FleetConfigFileSchemaV2 } from "./FleetConfigFileSchemaV2";
import { FleetIntegrationSchemaDetailV2 } from "./FleetIntegrationSchemaDetailV2";

/**
 * The schema resolved for the requested configuration file.
 */
export type FleetConfigFileSchemaV2ResponseData =
  | FleetIntegrationSchemaDetailV2
  | FleetConfigFileSchemaV2
  | UnparsedObject;
