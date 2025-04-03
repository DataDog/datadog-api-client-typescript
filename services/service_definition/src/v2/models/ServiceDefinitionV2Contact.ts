import { UnparsedObject } from "@datadog/datadog-api-client";

import { ServiceDefinitionV2Email } from "./ServiceDefinitionV2Email";
import { ServiceDefinitionV2MSTeams } from "./ServiceDefinitionV2MSTeams";
import { ServiceDefinitionV2Slack } from "./ServiceDefinitionV2Slack";

/**
 * Service owner's contacts information.
 */
export type ServiceDefinitionV2Contact =
  | ServiceDefinitionV2Email
  | ServiceDefinitionV2Slack
  | ServiceDefinitionV2MSTeams
  | UnparsedObject;
