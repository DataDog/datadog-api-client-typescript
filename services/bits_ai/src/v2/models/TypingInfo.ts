import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { GeneralInvestigationAttributesWithTimeBounds } from "./GeneralInvestigationAttributesWithTimeBounds";
import { GeneralInvestigationAttributesWithoutTimeBounds } from "./GeneralInvestigationAttributesWithoutTimeBounds";
import { GeneralInvestigationTrigger } from "./GeneralInvestigationTrigger";
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
import { MonitorAlertTrigger } from "./MonitorAlertTrigger";
import { MonitorAlertTriggerAttributes } from "./MonitorAlertTriggerAttributes";
import { TriggerInvestigationRequest } from "./TriggerInvestigationRequest";
import { TriggerInvestigationRequestData } from "./TriggerInvestigationRequestData";
import { TriggerInvestigationRequestDataAttributes } from "./TriggerInvestigationRequestDataAttributes";
import { TriggerInvestigationResponse } from "./TriggerInvestigationResponse";
import { TriggerInvestigationResponseData } from "./TriggerInvestigationResponseData";
import { TriggerInvestigationResponseDataAttributes } from "./TriggerInvestigationResponseDataAttributes";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    GeneralInvestigationTriggerType: ["general_investigation"],
    InvestigationType: ["investigation"],
    MonitorAlertTriggerType: ["monitor_alert_trigger"],
    TriggerInvestigationRequestType: ["trigger_investigation_request"],
    TriggerInvestigationResponseType: ["trigger_investigation_response"],
    TriggerType: ["monitor_alert_trigger", "general_investigation"],
  },
  oneOfMap: {
    GeneralInvestigationAttributes: [
      "GeneralInvestigationAttributesWithoutTimeBounds",
      "GeneralInvestigationAttributesWithTimeBounds",
    ],
    TriggerAttributes: ["MonitorAlertTrigger", "GeneralInvestigationTrigger"],
  },
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    GeneralInvestigationAttributesWithTimeBounds:
      GeneralInvestigationAttributesWithTimeBounds,
    GeneralInvestigationAttributesWithoutTimeBounds:
      GeneralInvestigationAttributesWithoutTimeBounds,
    GeneralInvestigationTrigger: GeneralInvestigationTrigger,
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
    MonitorAlertTrigger: MonitorAlertTrigger,
    MonitorAlertTriggerAttributes: MonitorAlertTriggerAttributes,
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
