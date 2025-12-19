import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { DeletedSuiteResponseData } from "./DeletedSuiteResponseData";
import { DeletedSuiteResponseDataAttributes } from "./DeletedSuiteResponseDataAttributes";
import { DeletedSuitesRequestDelete } from "./DeletedSuitesRequestDelete";
import { DeletedSuitesRequestDeleteAttributes } from "./DeletedSuitesRequestDeleteAttributes";
import { DeletedSuitesRequestDeleteRequest } from "./DeletedSuitesRequestDeleteRequest";
import { DeletedSuitesResponse } from "./DeletedSuitesResponse";
import { OnDemandConcurrencyCap } from "./OnDemandConcurrencyCap";
import { OnDemandConcurrencyCapAttributes } from "./OnDemandConcurrencyCapAttributes";
import { OnDemandConcurrencyCapResponse } from "./OnDemandConcurrencyCapResponse";
import { SuiteCreateEdit } from "./SuiteCreateEdit";
import { SuiteCreateEditRequest } from "./SuiteCreateEditRequest";
import { SyntheticsSuite } from "./SyntheticsSuite";
import { SyntheticsSuiteOptions } from "./SyntheticsSuiteOptions";
import { SyntheticsSuiteResponse } from "./SyntheticsSuiteResponse";
import { SyntheticsSuiteResponseData } from "./SyntheticsSuiteResponseData";
import { SyntheticsSuiteSearchResponse } from "./SyntheticsSuiteSearchResponse";
import { SyntheticsSuiteSearchResponseData } from "./SyntheticsSuiteSearchResponseData";
import { SyntheticsSuiteSearchResponseDataAttributes } from "./SyntheticsSuiteSearchResponseDataAttributes";
import { SyntheticsSuiteTest } from "./SyntheticsSuiteTest";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    DeletedSuitesRequestType: ["delete_suites_request"],
    OnDemandConcurrencyCapType: ["on_demand_concurrency_cap"],
    SuiteSearchResponseType: ["suites_search"],
    SyntheticsSuiteTestAlertingCriticality: ["ignore", "critical"],
    SyntheticsSuiteType: ["suite"],
    SyntheticsSuiteTypes: ["suites"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    DeletedSuiteResponseData: DeletedSuiteResponseData,
    DeletedSuiteResponseDataAttributes: DeletedSuiteResponseDataAttributes,
    DeletedSuitesRequestDelete: DeletedSuitesRequestDelete,
    DeletedSuitesRequestDeleteAttributes: DeletedSuitesRequestDeleteAttributes,
    DeletedSuitesRequestDeleteRequest: DeletedSuitesRequestDeleteRequest,
    DeletedSuitesResponse: DeletedSuitesResponse,
    OnDemandConcurrencyCap: OnDemandConcurrencyCap,
    OnDemandConcurrencyCapAttributes: OnDemandConcurrencyCapAttributes,
    OnDemandConcurrencyCapResponse: OnDemandConcurrencyCapResponse,
    SuiteCreateEdit: SuiteCreateEdit,
    SuiteCreateEditRequest: SuiteCreateEditRequest,
    SyntheticsSuite: SyntheticsSuite,
    SyntheticsSuiteOptions: SyntheticsSuiteOptions,
    SyntheticsSuiteResponse: SyntheticsSuiteResponse,
    SyntheticsSuiteResponseData: SyntheticsSuiteResponseData,
    SyntheticsSuiteSearchResponse: SyntheticsSuiteSearchResponse,
    SyntheticsSuiteSearchResponseData: SyntheticsSuiteSearchResponseData,
    SyntheticsSuiteSearchResponseDataAttributes:
      SyntheticsSuiteSearchResponseDataAttributes,
    SyntheticsSuiteTest: SyntheticsSuiteTest,
  },
};
