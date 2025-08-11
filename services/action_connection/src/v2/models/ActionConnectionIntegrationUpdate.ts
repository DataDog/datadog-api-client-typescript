import { UnparsedObject } from "@datadog/datadog-api-client";

import { AnthropicIntegrationUpdate } from "./AnthropicIntegrationUpdate";
import { AsanaIntegrationUpdate } from "./AsanaIntegrationUpdate";
import { AWSIntegrationUpdate } from "./AWSIntegrationUpdate";
import { AzureIntegrationUpdate } from "./AzureIntegrationUpdate";
import { CircleCIIntegrationUpdate } from "./CircleCIIntegrationUpdate";
import { ClickupIntegrationUpdate } from "./ClickupIntegrationUpdate";
import { CloudflareIntegrationUpdate } from "./CloudflareIntegrationUpdate";
import { ConfigCatIntegrationUpdate } from "./ConfigCatIntegrationUpdate";
import { DatadogIntegrationUpdate } from "./DatadogIntegrationUpdate";
import { FastlyIntegrationUpdate } from "./FastlyIntegrationUpdate";
import { FreshserviceIntegrationUpdate } from "./FreshserviceIntegrationUpdate";
import { GCPIntegrationUpdate } from "./GCPIntegrationUpdate";
import { GeminiIntegrationUpdate } from "./GeminiIntegrationUpdate";
import { GitlabIntegrationUpdate } from "./GitlabIntegrationUpdate";
import { GreyNoiseIntegrationUpdate } from "./GreyNoiseIntegrationUpdate";
import { HTTPIntegrationUpdate } from "./HTTPIntegrationUpdate";
import { LaunchDarklyIntegrationUpdate } from "./LaunchDarklyIntegrationUpdate";
import { NotionIntegrationUpdate } from "./NotionIntegrationUpdate";
import { OktaIntegrationUpdate } from "./OktaIntegrationUpdate";
import { OpenAIIntegrationUpdate } from "./OpenAIIntegrationUpdate";
import { ServiceNowIntegrationUpdate } from "./ServiceNowIntegrationUpdate";
import { SplitIntegrationUpdate } from "./SplitIntegrationUpdate";
import { StatsigIntegrationUpdate } from "./StatsigIntegrationUpdate";
import { VirusTotalIntegrationUpdate } from "./VirusTotalIntegrationUpdate";

/**
 * The definition of `ActionConnectionIntegrationUpdate` object.
 */
export type ActionConnectionIntegrationUpdate =
  | AWSIntegrationUpdate
  | AnthropicIntegrationUpdate
  | AsanaIntegrationUpdate
  | AzureIntegrationUpdate
  | CircleCIIntegrationUpdate
  | ClickupIntegrationUpdate
  | CloudflareIntegrationUpdate
  | ConfigCatIntegrationUpdate
  | DatadogIntegrationUpdate
  | FastlyIntegrationUpdate
  | FreshserviceIntegrationUpdate
  | GCPIntegrationUpdate
  | GeminiIntegrationUpdate
  | GitlabIntegrationUpdate
  | GreyNoiseIntegrationUpdate
  | HTTPIntegrationUpdate
  | LaunchDarklyIntegrationUpdate
  | NotionIntegrationUpdate
  | OktaIntegrationUpdate
  | OpenAIIntegrationUpdate
  | ServiceNowIntegrationUpdate
  | SplitIntegrationUpdate
  | StatsigIntegrationUpdate
  | VirusTotalIntegrationUpdate
  | UnparsedObject;
