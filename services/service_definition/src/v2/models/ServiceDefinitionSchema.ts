import { UnparsedObject } from "@datadog/datadog-api-client";

import { ServiceDefinitionV1 } from "./ServiceDefinitionV1";
import { ServiceDefinitionV2 } from "./ServiceDefinitionV2";
import { ServiceDefinitionV2Dot1 } from "./ServiceDefinitionV2Dot1";
import { ServiceDefinitionV2Dot2 } from "./ServiceDefinitionV2Dot2";

/**
 * Service definition schema.
 */
export type ServiceDefinitionSchema =
  | ServiceDefinitionV1
  | ServiceDefinitionV2
  | ServiceDefinitionV2Dot1
  | ServiceDefinitionV2Dot2
  | UnparsedObject;
