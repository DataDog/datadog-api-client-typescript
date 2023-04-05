/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ServiceDefinitionV2Email } from "./ServiceDefinitionV2Email";
import { ServiceDefinitionV2MSTeams } from "./ServiceDefinitionV2MSTeams";
import { ServiceDefinitionV2Slack } from "./ServiceDefinitionV2Slack";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Service owner's contacts information.
 */

export type ServiceDefinitionV2Contact =
  | ServiceDefinitionV2Email
  | ServiceDefinitionV2Slack
  | ServiceDefinitionV2MSTeams
  | UnparsedObject;
