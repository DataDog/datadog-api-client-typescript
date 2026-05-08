import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";
import { TransportWebhookLog } from "./TransportWebhookLog";
import { TransportWebhookLogAttributes } from "./TransportWebhookLogAttributes";
import { TransportWebhookLogEmail } from "./TransportWebhookLogEmail";
import { TransportWebhookLogIpAttribute } from "./TransportWebhookLogIpAttribute";
import { TransportWebhookLogMessage } from "./TransportWebhookLogMessage";
import { TransportWebhookLogMessageAuth } from "./TransportWebhookLogMessageAuth";
import { TransportWebhookLogMessageCustomArgs } from "./TransportWebhookLogMessageCustomArgs";
import { TransportWebhookLogMessageId } from "./TransportWebhookLogMessageId";
import { TransportWebhookLogMessageResponse } from "./TransportWebhookLogMessageResponse";
import { TransportWebhookLogMessageTimestamp } from "./TransportWebhookLogMessageTimestamp";
import { TransportWebhookLogNetwork } from "./TransportWebhookLogNetwork";
import { TransportWebhookLogNetworkIp } from "./TransportWebhookLogNetworkIp";
import { TransportWebhookLogOrgMetadata } from "./TransportWebhookLogOrgMetadata";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {},
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
    TransportWebhookLog: TransportWebhookLog,
    TransportWebhookLogAttributes: TransportWebhookLogAttributes,
    TransportWebhookLogEmail: TransportWebhookLogEmail,
    TransportWebhookLogIpAttribute: TransportWebhookLogIpAttribute,
    TransportWebhookLogMessage: TransportWebhookLogMessage,
    TransportWebhookLogMessageAuth: TransportWebhookLogMessageAuth,
    TransportWebhookLogMessageCustomArgs: TransportWebhookLogMessageCustomArgs,
    TransportWebhookLogMessageId: TransportWebhookLogMessageId,
    TransportWebhookLogMessageResponse: TransportWebhookLogMessageResponse,
    TransportWebhookLogMessageTimestamp: TransportWebhookLogMessageTimestamp,
    TransportWebhookLogNetwork: TransportWebhookLogNetwork,
    TransportWebhookLogNetworkIp: TransportWebhookLogNetworkIp,
    TransportWebhookLogOrgMetadata: TransportWebhookLogOrgMetadata,
  },
};
