import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { MicrosoftTeamsChannelInfoResponseAttributes } from "./MicrosoftTeamsChannelInfoResponseAttributes";
import { MicrosoftTeamsChannelInfoResponseData } from "./MicrosoftTeamsChannelInfoResponseData";
import { MicrosoftTeamsCreateTenantBasedHandleRequest } from "./MicrosoftTeamsCreateTenantBasedHandleRequest";
import { MicrosoftTeamsCreateWorkflowsWebhookHandleRequest } from "./MicrosoftTeamsCreateWorkflowsWebhookHandleRequest";
import { MicrosoftTeamsGetChannelByNameResponse } from "./MicrosoftTeamsGetChannelByNameResponse";
import { MicrosoftTeamsTenantBasedHandleAttributes } from "./MicrosoftTeamsTenantBasedHandleAttributes";
import { MicrosoftTeamsTenantBasedHandleInfoResponseAttributes } from "./MicrosoftTeamsTenantBasedHandleInfoResponseAttributes";
import { MicrosoftTeamsTenantBasedHandleInfoResponseData } from "./MicrosoftTeamsTenantBasedHandleInfoResponseData";
import { MicrosoftTeamsTenantBasedHandleRequestAttributes } from "./MicrosoftTeamsTenantBasedHandleRequestAttributes";
import { MicrosoftTeamsTenantBasedHandleRequestData } from "./MicrosoftTeamsTenantBasedHandleRequestData";
import { MicrosoftTeamsTenantBasedHandleResponse } from "./MicrosoftTeamsTenantBasedHandleResponse";
import { MicrosoftTeamsTenantBasedHandleResponseData } from "./MicrosoftTeamsTenantBasedHandleResponseData";
import { MicrosoftTeamsTenantBasedHandlesResponse } from "./MicrosoftTeamsTenantBasedHandlesResponse";
import { MicrosoftTeamsUpdateTenantBasedHandleRequest } from "./MicrosoftTeamsUpdateTenantBasedHandleRequest";
import { MicrosoftTeamsUpdateTenantBasedHandleRequestData } from "./MicrosoftTeamsUpdateTenantBasedHandleRequestData";
import { MicrosoftTeamsUpdateWorkflowsWebhookHandleRequest } from "./MicrosoftTeamsUpdateWorkflowsWebhookHandleRequest";
import { MicrosoftTeamsUpdateWorkflowsWebhookHandleRequestData } from "./MicrosoftTeamsUpdateWorkflowsWebhookHandleRequestData";
import { MicrosoftTeamsWorkflowsWebhookHandleAttributes } from "./MicrosoftTeamsWorkflowsWebhookHandleAttributes";
import { MicrosoftTeamsWorkflowsWebhookHandleRequestAttributes } from "./MicrosoftTeamsWorkflowsWebhookHandleRequestAttributes";
import { MicrosoftTeamsWorkflowsWebhookHandleRequestData } from "./MicrosoftTeamsWorkflowsWebhookHandleRequestData";
import { MicrosoftTeamsWorkflowsWebhookHandleResponse } from "./MicrosoftTeamsWorkflowsWebhookHandleResponse";
import { MicrosoftTeamsWorkflowsWebhookHandleResponseData } from "./MicrosoftTeamsWorkflowsWebhookHandleResponseData";
import { MicrosoftTeamsWorkflowsWebhookHandlesResponse } from "./MicrosoftTeamsWorkflowsWebhookHandlesResponse";
import { MicrosoftTeamsWorkflowsWebhookResponseAttributes } from "./MicrosoftTeamsWorkflowsWebhookResponseAttributes";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    MicrosoftTeamsChannelInfoType: ["ms-teams-channel-info"],
    MicrosoftTeamsTenantBasedHandleInfoType: [
      "ms-teams-tenant-based-handle-info",
    ],
    MicrosoftTeamsTenantBasedHandleType: ["tenant-based-handle"],
    MicrosoftTeamsWorkflowsWebhookHandleType: ["workflows-webhook-handle"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    MicrosoftTeamsChannelInfoResponseAttributes:
      MicrosoftTeamsChannelInfoResponseAttributes,
    MicrosoftTeamsChannelInfoResponseData:
      MicrosoftTeamsChannelInfoResponseData,
    MicrosoftTeamsCreateTenantBasedHandleRequest:
      MicrosoftTeamsCreateTenantBasedHandleRequest,
    MicrosoftTeamsCreateWorkflowsWebhookHandleRequest:
      MicrosoftTeamsCreateWorkflowsWebhookHandleRequest,
    MicrosoftTeamsGetChannelByNameResponse:
      MicrosoftTeamsGetChannelByNameResponse,
    MicrosoftTeamsTenantBasedHandleAttributes:
      MicrosoftTeamsTenantBasedHandleAttributes,
    MicrosoftTeamsTenantBasedHandleInfoResponseAttributes:
      MicrosoftTeamsTenantBasedHandleInfoResponseAttributes,
    MicrosoftTeamsTenantBasedHandleInfoResponseData:
      MicrosoftTeamsTenantBasedHandleInfoResponseData,
    MicrosoftTeamsTenantBasedHandleRequestAttributes:
      MicrosoftTeamsTenantBasedHandleRequestAttributes,
    MicrosoftTeamsTenantBasedHandleRequestData:
      MicrosoftTeamsTenantBasedHandleRequestData,
    MicrosoftTeamsTenantBasedHandleResponse:
      MicrosoftTeamsTenantBasedHandleResponse,
    MicrosoftTeamsTenantBasedHandleResponseData:
      MicrosoftTeamsTenantBasedHandleResponseData,
    MicrosoftTeamsTenantBasedHandlesResponse:
      MicrosoftTeamsTenantBasedHandlesResponse,
    MicrosoftTeamsUpdateTenantBasedHandleRequest:
      MicrosoftTeamsUpdateTenantBasedHandleRequest,
    MicrosoftTeamsUpdateTenantBasedHandleRequestData:
      MicrosoftTeamsUpdateTenantBasedHandleRequestData,
    MicrosoftTeamsUpdateWorkflowsWebhookHandleRequest:
      MicrosoftTeamsUpdateWorkflowsWebhookHandleRequest,
    MicrosoftTeamsUpdateWorkflowsWebhookHandleRequestData:
      MicrosoftTeamsUpdateWorkflowsWebhookHandleRequestData,
    MicrosoftTeamsWorkflowsWebhookHandleAttributes:
      MicrosoftTeamsWorkflowsWebhookHandleAttributes,
    MicrosoftTeamsWorkflowsWebhookHandleRequestAttributes:
      MicrosoftTeamsWorkflowsWebhookHandleRequestAttributes,
    MicrosoftTeamsWorkflowsWebhookHandleRequestData:
      MicrosoftTeamsWorkflowsWebhookHandleRequestData,
    MicrosoftTeamsWorkflowsWebhookHandleResponse:
      MicrosoftTeamsWorkflowsWebhookHandleResponse,
    MicrosoftTeamsWorkflowsWebhookHandleResponseData:
      MicrosoftTeamsWorkflowsWebhookHandleResponseData,
    MicrosoftTeamsWorkflowsWebhookHandlesResponse:
      MicrosoftTeamsWorkflowsWebhookHandlesResponse,
    MicrosoftTeamsWorkflowsWebhookResponseAttributes:
      MicrosoftTeamsWorkflowsWebhookResponseAttributes,
  },
};
