import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { GetInvestigationResponse } from "./GetInvestigationResponse";
import { GetInvestigationResponseData } from "./GetInvestigationResponseData";
import { GetInvestigationResponseDataAttributes } from "./GetInvestigationResponseDataAttributes";
import { GetInvestigationResponseLinks } from "./GetInvestigationResponseLinks";
import { InvestigationConclusion } from "./InvestigationConclusion";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";
import { ListInvestigationsResponse } from "./ListInvestigationsResponse";
import { ListInvestigationsResponseData } from "./ListInvestigationsResponseData";
import { ListInvestigationsResponseDataAttributes } from "./ListInvestigationsResponseDataAttributes";
import { ListInvestigationsResponseLinks } from "./ListInvestigationsResponseLinks";
import { ListInvestigationsResponseMeta } from "./ListInvestigationsResponseMeta";
import { ListInvestigationsResponseMetaPage } from "./ListInvestigationsResponseMetaPage";
import { MonitorAlertTriggerAttributes } from "./MonitorAlertTriggerAttributes";
import { TriggerAttributes } from "./TriggerAttributes";
import { TriggerInvestigationRequest } from "./TriggerInvestigationRequest";
import { TriggerInvestigationRequestData } from "./TriggerInvestigationRequestData";
import { TriggerInvestigationRequestDataAttributes } from "./TriggerInvestigationRequestDataAttributes";
import { TriggerInvestigationResponse } from "./TriggerInvestigationResponse";
import { TriggerInvestigationResponseData } from "./TriggerInvestigationResponseData";
import { TriggerInvestigationResponseDataAttributes } from "./TriggerInvestigationResponseDataAttributes";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    InvestigationType: ["investigation"],
    TriggerInvestigationRequestType: ["trigger_investigation_request"],
    TriggerInvestigationResponseType: ["trigger_investigation_response"],
    TriggerType: ["monitor_alert_trigger"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    GetInvestigationResponse: GetInvestigationResponse,
    GetInvestigationResponseData: GetInvestigationResponseData,
    GetInvestigationResponseDataAttributes:
      GetInvestigationResponseDataAttributes,
    GetInvestigationResponseLinks: GetInvestigationResponseLinks,
    InvestigationConclusion: InvestigationConclusion,
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
    ListInvestigationsResponse: ListInvestigationsResponse,
    ListInvestigationsResponseData: ListInvestigationsResponseData,
    ListInvestigationsResponseDataAttributes:
      ListInvestigationsResponseDataAttributes,
    ListInvestigationsResponseLinks: ListInvestigationsResponseLinks,
    ListInvestigationsResponseMeta: ListInvestigationsResponseMeta,
    ListInvestigationsResponseMetaPage: ListInvestigationsResponseMetaPage,
    MonitorAlertTriggerAttributes: MonitorAlertTriggerAttributes,
    TriggerAttributes: TriggerAttributes,
    TriggerInvestigationRequest: TriggerInvestigationRequest,
    TriggerInvestigationRequestData: TriggerInvestigationRequestData,
    TriggerInvestigationRequestDataAttributes:
      TriggerInvestigationRequestDataAttributes,
    TriggerInvestigationResponse: TriggerInvestigationResponse,
    TriggerInvestigationResponseData: TriggerInvestigationResponseData,
    TriggerInvestigationResponseDataAttributes:
      TriggerInvestigationResponseDataAttributes,
  },
};
