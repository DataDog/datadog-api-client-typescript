import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { ServiceDefinitionCreateResponse } from "./ServiceDefinitionCreateResponse";
import { ServiceDefinitionData } from "./ServiceDefinitionData";
import { ServiceDefinitionDataAttributes } from "./ServiceDefinitionDataAttributes";
import { ServiceDefinitionGetResponse } from "./ServiceDefinitionGetResponse";
import { ServiceDefinitionMeta } from "./ServiceDefinitionMeta";
import { ServiceDefinitionMetaWarnings } from "./ServiceDefinitionMetaWarnings";
import { ServiceDefinitionV1 } from "./ServiceDefinitionV1";
import { ServiceDefinitionV1Contact } from "./ServiceDefinitionV1Contact";
import { ServiceDefinitionV1Info } from "./ServiceDefinitionV1Info";
import { ServiceDefinitionV1Integrations } from "./ServiceDefinitionV1Integrations";
import { ServiceDefinitionV1Org } from "./ServiceDefinitionV1Org";
import { ServiceDefinitionV1Resource } from "./ServiceDefinitionV1Resource";
import { ServiceDefinitionV2 } from "./ServiceDefinitionV2";
import { ServiceDefinitionV2Doc } from "./ServiceDefinitionV2Doc";
import { ServiceDefinitionV2Dot1 } from "./ServiceDefinitionV2Dot1";
import { ServiceDefinitionV2Dot1Email } from "./ServiceDefinitionV2Dot1Email";
import { ServiceDefinitionV2Dot1Integrations } from "./ServiceDefinitionV2Dot1Integrations";
import { ServiceDefinitionV2Dot1Link } from "./ServiceDefinitionV2Dot1Link";
import { ServiceDefinitionV2Dot1MSTeams } from "./ServiceDefinitionV2Dot1MSTeams";
import { ServiceDefinitionV2Dot1Opsgenie } from "./ServiceDefinitionV2Dot1Opsgenie";
import { ServiceDefinitionV2Dot1Pagerduty } from "./ServiceDefinitionV2Dot1Pagerduty";
import { ServiceDefinitionV2Dot1Slack } from "./ServiceDefinitionV2Dot1Slack";
import { ServiceDefinitionV2Dot2 } from "./ServiceDefinitionV2Dot2";
import { ServiceDefinitionV2Dot2Contact } from "./ServiceDefinitionV2Dot2Contact";
import { ServiceDefinitionV2Dot2Integrations } from "./ServiceDefinitionV2Dot2Integrations";
import { ServiceDefinitionV2Dot2Link } from "./ServiceDefinitionV2Dot2Link";
import { ServiceDefinitionV2Dot2Opsgenie } from "./ServiceDefinitionV2Dot2Opsgenie";
import { ServiceDefinitionV2Dot2Pagerduty } from "./ServiceDefinitionV2Dot2Pagerduty";
import { ServiceDefinitionV2Email } from "./ServiceDefinitionV2Email";
import { ServiceDefinitionV2Integrations } from "./ServiceDefinitionV2Integrations";
import { ServiceDefinitionV2Link } from "./ServiceDefinitionV2Link";
import { ServiceDefinitionV2MSTeams } from "./ServiceDefinitionV2MSTeams";
import { ServiceDefinitionV2Opsgenie } from "./ServiceDefinitionV2Opsgenie";
import { ServiceDefinitionV2Repo } from "./ServiceDefinitionV2Repo";
import { ServiceDefinitionV2Slack } from "./ServiceDefinitionV2Slack";
import { ServiceDefinitionsListResponse } from "./ServiceDefinitionsListResponse";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    ServiceDefinitionSchemaVersions: ["v1", "v2", "v2.1", "v2.2"],
    ServiceDefinitionV1ResourceType: [
      "doc",
      "wiki",
      "runbook",
      "url",
      "repo",
      "dashboard",
      "oncall",
      "code",
      "link",
    ],
    ServiceDefinitionV1Version: ["v1"],
    ServiceDefinitionV2Dot1EmailType: ["email"],
    ServiceDefinitionV2Dot1LinkType: [
      "doc",
      "repo",
      "runbook",
      "dashboard",
      "other",
    ],
    ServiceDefinitionV2Dot1MSTeamsType: ["microsoft-teams"],
    ServiceDefinitionV2Dot1OpsgenieRegion: ["US", "EU"],
    ServiceDefinitionV2Dot1SlackType: ["slack"],
    ServiceDefinitionV2Dot1Version: ["v2.1"],
    ServiceDefinitionV2Dot2OpsgenieRegion: ["US", "EU"],
    ServiceDefinitionV2Dot2Version: ["v2.2"],
    ServiceDefinitionV2EmailType: ["email"],
    ServiceDefinitionV2LinkType: [
      "doc",
      "wiki",
      "runbook",
      "url",
      "repo",
      "dashboard",
      "oncall",
      "code",
      "link",
    ],
    ServiceDefinitionV2MSTeamsType: ["microsoft-teams"],
    ServiceDefinitionV2OpsgenieRegion: ["US", "EU"],
    ServiceDefinitionV2SlackType: ["slack"],
    ServiceDefinitionV2Version: ["v2"],
  },
  oneOfMap: {
    ServiceDefinitionSchema: [
      "ServiceDefinitionV1",
      "ServiceDefinitionV2",
      "ServiceDefinitionV2Dot1",
      "ServiceDefinitionV2Dot2",
    ],
    ServiceDefinitionV2Contact: [
      "ServiceDefinitionV2Email",
      "ServiceDefinitionV2Slack",
      "ServiceDefinitionV2MSTeams",
    ],
    ServiceDefinitionV2Dot1Contact: [
      "ServiceDefinitionV2Dot1Email",
      "ServiceDefinitionV2Dot1Slack",
      "ServiceDefinitionV2Dot1MSTeams",
    ],
    ServiceDefinitionsCreateRequest: [
      "ServiceDefinitionV2Dot2",
      "ServiceDefinitionV2Dot1",
      "ServiceDefinitionV2",
      "string",
    ],
  },
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    ServiceDefinitionCreateResponse: ServiceDefinitionCreateResponse,
    ServiceDefinitionData: ServiceDefinitionData,
    ServiceDefinitionDataAttributes: ServiceDefinitionDataAttributes,
    ServiceDefinitionGetResponse: ServiceDefinitionGetResponse,
    ServiceDefinitionMeta: ServiceDefinitionMeta,
    ServiceDefinitionMetaWarnings: ServiceDefinitionMetaWarnings,
    ServiceDefinitionV1: ServiceDefinitionV1,
    ServiceDefinitionV1Contact: ServiceDefinitionV1Contact,
    ServiceDefinitionV1Info: ServiceDefinitionV1Info,
    ServiceDefinitionV1Integrations: ServiceDefinitionV1Integrations,
    ServiceDefinitionV1Org: ServiceDefinitionV1Org,
    ServiceDefinitionV1Resource: ServiceDefinitionV1Resource,
    ServiceDefinitionV2: ServiceDefinitionV2,
    ServiceDefinitionV2Doc: ServiceDefinitionV2Doc,
    ServiceDefinitionV2Dot1: ServiceDefinitionV2Dot1,
    ServiceDefinitionV2Dot1Email: ServiceDefinitionV2Dot1Email,
    ServiceDefinitionV2Dot1Integrations: ServiceDefinitionV2Dot1Integrations,
    ServiceDefinitionV2Dot1Link: ServiceDefinitionV2Dot1Link,
    ServiceDefinitionV2Dot1MSTeams: ServiceDefinitionV2Dot1MSTeams,
    ServiceDefinitionV2Dot1Opsgenie: ServiceDefinitionV2Dot1Opsgenie,
    ServiceDefinitionV2Dot1Pagerduty: ServiceDefinitionV2Dot1Pagerduty,
    ServiceDefinitionV2Dot1Slack: ServiceDefinitionV2Dot1Slack,
    ServiceDefinitionV2Dot2: ServiceDefinitionV2Dot2,
    ServiceDefinitionV2Dot2Contact: ServiceDefinitionV2Dot2Contact,
    ServiceDefinitionV2Dot2Integrations: ServiceDefinitionV2Dot2Integrations,
    ServiceDefinitionV2Dot2Link: ServiceDefinitionV2Dot2Link,
    ServiceDefinitionV2Dot2Opsgenie: ServiceDefinitionV2Dot2Opsgenie,
    ServiceDefinitionV2Dot2Pagerduty: ServiceDefinitionV2Dot2Pagerduty,
    ServiceDefinitionV2Email: ServiceDefinitionV2Email,
    ServiceDefinitionV2Integrations: ServiceDefinitionV2Integrations,
    ServiceDefinitionV2Link: ServiceDefinitionV2Link,
    ServiceDefinitionV2MSTeams: ServiceDefinitionV2MSTeams,
    ServiceDefinitionV2Opsgenie: ServiceDefinitionV2Opsgenie,
    ServiceDefinitionV2Repo: ServiceDefinitionV2Repo,
    ServiceDefinitionV2Slack: ServiceDefinitionV2Slack,
    ServiceDefinitionsListResponse: ServiceDefinitionsListResponse,
  },
};
