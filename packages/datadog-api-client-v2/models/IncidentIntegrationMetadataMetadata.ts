/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { JiraIntegrationMetadata } from "./JiraIntegrationMetadata";
import { MSTeamsIntegrationMetadata } from "./MSTeamsIntegrationMetadata";
import { SlackIntegrationMetadata } from "./SlackIntegrationMetadata";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Incident integration metadata's metadata attribute.
 */

export type IncidentIntegrationMetadataMetadata =
  | SlackIntegrationMetadata
  | JiraIntegrationMetadata
  | MSTeamsIntegrationMetadata
  | UnparsedObject;
