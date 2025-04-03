import { UnparsedObject } from "@datadog/datadog-api-client";

import { ServiceDefinitionV2Dot1Email } from "./ServiceDefinitionV2Dot1Email";
import { ServiceDefinitionV2Dot1MSTeams } from "./ServiceDefinitionV2Dot1MSTeams";
import { ServiceDefinitionV2Dot1Slack } from "./ServiceDefinitionV2Dot1Slack";

/**
 * Service owner's contacts information.
 */
export type ServiceDefinitionV2Dot1Contact =
  | ServiceDefinitionV2Dot1Email
  | ServiceDefinitionV2Dot1Slack
  | ServiceDefinitionV2Dot1MSTeams
  | UnparsedObject;
