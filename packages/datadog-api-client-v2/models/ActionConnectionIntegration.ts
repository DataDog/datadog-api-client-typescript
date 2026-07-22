/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AnthropicIntegration } from "./AnthropicIntegration";
import { AsanaIntegration } from "./AsanaIntegration";
import { AWSIntegration } from "./AWSIntegration";
import { AzureIntegration } from "./AzureIntegration";
import { CircleCIIntegration } from "./CircleCIIntegration";
import { ClickupIntegration } from "./ClickupIntegration";
import { CloudflareIntegration } from "./CloudflareIntegration";
import { ConfigCatIntegration } from "./ConfigCatIntegration";
import { DatadogIntegration } from "./DatadogIntegration";
import { FastlyIntegration } from "./FastlyIntegration";
import { FreshserviceIntegration } from "./FreshserviceIntegration";
import { GCPIntegration } from "./GCPIntegration";
import { GeminiIntegration } from "./GeminiIntegration";
import { GitlabIntegration } from "./GitlabIntegration";
import { GreyNoiseIntegration } from "./GreyNoiseIntegration";
import { HTTPIntegration } from "./HTTPIntegration";
import { LaunchDarklyIntegration } from "./LaunchDarklyIntegration";
import { NotionIntegration } from "./NotionIntegration";
import { OktaIntegration } from "./OktaIntegration";
import { OpenAIIntegration } from "./OpenAIIntegration";
import { ServiceNowIntegration } from "./ServiceNowIntegration";
import { SplitIntegration } from "./SplitIntegration";
import { StatsigIntegration } from "./StatsigIntegration";
import { VirusTotalIntegration } from "./VirusTotalIntegration";

import { HttpFile } from "../../datadog-api-client-common/http/http";



import { UnparsedObject } from "../../datadog-api-client-common/util";


/**
 * The definition of `ActionConnectionIntegration` object.
*/

export type ActionConnectionIntegration = AWSIntegration | AnthropicIntegration | AsanaIntegration | AzureIntegration | CircleCIIntegration | ClickupIntegration | CloudflareIntegration | ConfigCatIntegration | DatadogIntegration | FastlyIntegration | FreshserviceIntegration | GCPIntegration | GeminiIntegration | GitlabIntegration | GreyNoiseIntegration | HTTPIntegration | LaunchDarklyIntegration | NotionIntegration | OktaIntegration | OpenAIIntegration | ServiceNowIntegration | SplitIntegration | StatsigIntegration | VirusTotalIntegration | UnparsedObject;