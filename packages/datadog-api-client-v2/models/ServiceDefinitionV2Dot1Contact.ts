/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ServiceDefinitionV2Dot1Email } from "./ServiceDefinitionV2Dot1Email";
import { ServiceDefinitionV2Dot1MSTeams } from "./ServiceDefinitionV2Dot1MSTeams";
import { ServiceDefinitionV2Dot1Slack } from "./ServiceDefinitionV2Dot1Slack";

import { HttpFile } from "../../datadog-api-client-common/http/http";



import { UnparsedObject } from "../../datadog-api-client-common/util";


/**
 * Service owner's contacts information.
*/

export type ServiceDefinitionV2Dot1Contact = ServiceDefinitionV2Dot1Email | ServiceDefinitionV2Dot1Slack | ServiceDefinitionV2Dot1MSTeams | UnparsedObject;