import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { ConnectedTeamRef } from "./ConnectedTeamRef";
import { ConnectedTeamRefData } from "./ConnectedTeamRefData";
import { ConnectionsPagePagination } from "./ConnectionsPagePagination";
import { ConnectionsResponseMeta } from "./ConnectionsResponseMeta";
import { TeamConnection } from "./TeamConnection";
import { TeamConnectionAttributes } from "./TeamConnectionAttributes";
import { TeamConnectionCreateData } from "./TeamConnectionCreateData";
import { TeamConnectionCreateRequest } from "./TeamConnectionCreateRequest";
import { TeamConnectionDeleteRequest } from "./TeamConnectionDeleteRequest";
import { TeamConnectionDeleteRequestDataItem } from "./TeamConnectionDeleteRequestDataItem";
import { TeamConnectionRelationships } from "./TeamConnectionRelationships";
import { TeamConnectionsResponse } from "./TeamConnectionsResponse";
import { TeamRef } from "./TeamRef";
import { TeamRefData } from "./TeamRefData";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    ConnectedTeamRefDataType: ["github_team"],
    TeamConnectionType: ["team_connection"],
    TeamRefDataType: ["team"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    ConnectedTeamRef: ConnectedTeamRef,
    ConnectedTeamRefData: ConnectedTeamRefData,
    ConnectionsPagePagination: ConnectionsPagePagination,
    ConnectionsResponseMeta: ConnectionsResponseMeta,
    TeamConnection: TeamConnection,
    TeamConnectionAttributes: TeamConnectionAttributes,
    TeamConnectionCreateData: TeamConnectionCreateData,
    TeamConnectionCreateRequest: TeamConnectionCreateRequest,
    TeamConnectionDeleteRequest: TeamConnectionDeleteRequest,
    TeamConnectionDeleteRequestDataItem: TeamConnectionDeleteRequestDataItem,
    TeamConnectionRelationships: TeamConnectionRelationships,
    TeamConnectionsResponse: TeamConnectionsResponse,
    TeamRef: TeamRef,
    TeamRefData: TeamRefData,
  },
};
