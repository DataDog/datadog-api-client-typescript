import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { AWSAssumeRole } from "./AWSAssumeRole";
import { AWSAssumeRoleUpdate } from "./AWSAssumeRoleUpdate";
import { AWSIntegration } from "./AWSIntegration";
import { AWSIntegrationUpdate } from "./AWSIntegrationUpdate";
import { ActionConnectionAttributes } from "./ActionConnectionAttributes";
import { ActionConnectionAttributesUpdate } from "./ActionConnectionAttributesUpdate";
import { ActionConnectionData } from "./ActionConnectionData";
import { ActionConnectionDataUpdate } from "./ActionConnectionDataUpdate";
import { CreateActionConnectionRequest } from "./CreateActionConnectionRequest";
import { CreateActionConnectionResponse } from "./CreateActionConnectionResponse";
import { GetActionConnectionResponse } from "./GetActionConnectionResponse";
import { HTTPBody } from "./HTTPBody";
import { HTTPHeader } from "./HTTPHeader";
import { HTTPHeaderUpdate } from "./HTTPHeaderUpdate";
import { HTTPIntegration } from "./HTTPIntegration";
import { HTTPIntegrationUpdate } from "./HTTPIntegrationUpdate";
import { HTTPToken } from "./HTTPToken";
import { HTTPTokenAuth } from "./HTTPTokenAuth";
import { HTTPTokenAuthUpdate } from "./HTTPTokenAuthUpdate";
import { HTTPTokenUpdate } from "./HTTPTokenUpdate";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";
import { UpdateActionConnectionRequest } from "./UpdateActionConnectionRequest";
import { UpdateActionConnectionResponse } from "./UpdateActionConnectionResponse";
import { UrlParam } from "./UrlParam";
import { UrlParamUpdate } from "./UrlParamUpdate";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    AWSAssumeRoleType: ["AWSAssumeRole"],
    AWSIntegrationType: ["AWS"],
    ActionConnectionDataType: ["action_connection"],
    HTTPIntegrationType: ["HTTP"],
    HTTPTokenAuthType: ["HTTPTokenAuth"],
    TokenType: ["SECRET"],
  },
  oneOfMap: {
    AWSCredentials: ["AWSAssumeRole"],
    AWSCredentialsUpdate: ["AWSAssumeRoleUpdate"],
    ActionConnectionIntegration: ["AWSIntegration", "HTTPIntegration"],
    ActionConnectionIntegrationUpdate: [
      "AWSIntegrationUpdate",
      "HTTPIntegrationUpdate",
    ],
    HTTPCredentials: ["HTTPTokenAuth"],
    HTTPCredentialsUpdate: ["HTTPTokenAuthUpdate"],
  },
  typeMap: {
    AWSAssumeRole: AWSAssumeRole,
    AWSAssumeRoleUpdate: AWSAssumeRoleUpdate,
    AWSIntegration: AWSIntegration,
    AWSIntegrationUpdate: AWSIntegrationUpdate,
    ActionConnectionAttributes: ActionConnectionAttributes,
    ActionConnectionAttributesUpdate: ActionConnectionAttributesUpdate,
    ActionConnectionData: ActionConnectionData,
    ActionConnectionDataUpdate: ActionConnectionDataUpdate,
    CreateActionConnectionRequest: CreateActionConnectionRequest,
    CreateActionConnectionResponse: CreateActionConnectionResponse,
    GetActionConnectionResponse: GetActionConnectionResponse,
    HTTPBody: HTTPBody,
    HTTPHeader: HTTPHeader,
    HTTPHeaderUpdate: HTTPHeaderUpdate,
    HTTPIntegration: HTTPIntegration,
    HTTPIntegrationUpdate: HTTPIntegrationUpdate,
    HTTPToken: HTTPToken,
    HTTPTokenAuth: HTTPTokenAuth,
    HTTPTokenAuthUpdate: HTTPTokenAuthUpdate,
    HTTPTokenUpdate: HTTPTokenUpdate,
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
    UpdateActionConnectionRequest: UpdateActionConnectionRequest,
    UpdateActionConnectionResponse: UpdateActionConnectionResponse,
    UrlParam: UrlParam,
    UrlParamUpdate: UrlParamUpdate,
  },
};
