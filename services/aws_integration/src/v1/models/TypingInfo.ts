import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { AWSAccount } from "./AWSAccount";
import { AWSAccountCreateResponse } from "./AWSAccountCreateResponse";
import { AWSAccountDeleteRequest } from "./AWSAccountDeleteRequest";
import { AWSAccountListResponse } from "./AWSAccountListResponse";
import { AWSEventBridgeAccountConfiguration } from "./AWSEventBridgeAccountConfiguration";
import { AWSEventBridgeCreateRequest } from "./AWSEventBridgeCreateRequest";
import { AWSEventBridgeCreateResponse } from "./AWSEventBridgeCreateResponse";
import { AWSEventBridgeDeleteRequest } from "./AWSEventBridgeDeleteRequest";
import { AWSEventBridgeDeleteResponse } from "./AWSEventBridgeDeleteResponse";
import { AWSEventBridgeListResponse } from "./AWSEventBridgeListResponse";
import { AWSEventBridgeSource } from "./AWSEventBridgeSource";
import { AWSTagFilter } from "./AWSTagFilter";
import { AWSTagFilterCreateRequest } from "./AWSTagFilterCreateRequest";
import { AWSTagFilterDeleteRequest } from "./AWSTagFilterDeleteRequest";
import { AWSTagFilterListResponse } from "./AWSTagFilterListResponse";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    AWSEventBridgeCreateStatus: ["created"],
    AWSEventBridgeDeleteStatus: ["empty"],
    AWSNamespace: [
      "elb",
      "application_elb",
      "sqs",
      "rds",
      "custom",
      "network_elb",
      "lambda",
      "step_functions",
    ],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    AWSAccount: AWSAccount,
    AWSAccountCreateResponse: AWSAccountCreateResponse,
    AWSAccountDeleteRequest: AWSAccountDeleteRequest,
    AWSAccountListResponse: AWSAccountListResponse,
    AWSEventBridgeAccountConfiguration: AWSEventBridgeAccountConfiguration,
    AWSEventBridgeCreateRequest: AWSEventBridgeCreateRequest,
    AWSEventBridgeCreateResponse: AWSEventBridgeCreateResponse,
    AWSEventBridgeDeleteRequest: AWSEventBridgeDeleteRequest,
    AWSEventBridgeDeleteResponse: AWSEventBridgeDeleteResponse,
    AWSEventBridgeListResponse: AWSEventBridgeListResponse,
    AWSEventBridgeSource: AWSEventBridgeSource,
    AWSTagFilter: AWSTagFilter,
    AWSTagFilterCreateRequest: AWSTagFilterCreateRequest,
    AWSTagFilterDeleteRequest: AWSTagFilterDeleteRequest,
    AWSTagFilterListResponse: AWSTagFilterListResponse,
  },
};
