import { UnparsedObject } from "@datadog/datadog-api-client";

import { ServiceDefinitionV2 } from "./ServiceDefinitionV2";
import { ServiceDefinitionV2Dot1 } from "./ServiceDefinitionV2Dot1";
import { ServiceDefinitionV2Dot2 } from "./ServiceDefinitionV2Dot2";

/**
 * Create service definitions request.
 */
export type ServiceDefinitionsCreateRequest =
  | ServiceDefinitionV2Dot2
  | ServiceDefinitionV2Dot1
  | ServiceDefinitionV2
  | string
  | UnparsedObject;
