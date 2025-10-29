import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { GetCohortRequest } from "./GetCohortRequest";
import { GetCohortRequestData } from "./GetCohortRequestData";
import { GetCohortRequestDataAttributes } from "./GetCohortRequestDataAttributes";
import { GetCohortRequestDataAttributesDefinition } from "./GetCohortRequestDataAttributesDefinition";
import { GetCohortRequestDataAttributesDefinitionAudienceFilters } from "./GetCohortRequestDataAttributesDefinitionAudienceFilters";
import { GetCohortRequestDataAttributesDefinitionAudienceFiltersAccountsItems } from "./GetCohortRequestDataAttributesDefinitionAudienceFiltersAccountsItems";
import { GetCohortRequestDataAttributesDefinitionAudienceFiltersSegmentsItems } from "./GetCohortRequestDataAttributesDefinitionAudienceFiltersSegmentsItems";
import { GetCohortRequestDataAttributesDefinitionAudienceFiltersUsersItems } from "./GetCohortRequestDataAttributesDefinitionAudienceFiltersUsersItems";
import { GetCohortRequestDataAttributesTime } from "./GetCohortRequestDataAttributesTime";
import { GetCohortResponse } from "./GetCohortResponse";
import { GetCohortResponseData } from "./GetCohortResponseData";
import { GetCohortResponseDataAttributes } from "./GetCohortResponseDataAttributes";
import { GetCohortResponseDataAttributesCohortsItems } from "./GetCohortResponseDataAttributesCohortsItems";
import { GetCohortResponseDataAttributesCohortsItemsValuesItems } from "./GetCohortResponseDataAttributesCohortsItemsValuesItems";
import { GetCohortUsersRequest } from "./GetCohortUsersRequest";
import { GetCohortUsersRequestData } from "./GetCohortUsersRequestData";
import { GetCohortUsersRequestDataAttributes } from "./GetCohortUsersRequestDataAttributes";
import { GetCohortUsersRequestDataAttributesDefinition } from "./GetCohortUsersRequestDataAttributesDefinition";
import { GetCohortUsersRequestDataAttributesDefinitionAudienceFilters } from "./GetCohortUsersRequestDataAttributesDefinitionAudienceFilters";
import { GetCohortUsersRequestDataAttributesDefinitionAudienceFiltersAccountsItems } from "./GetCohortUsersRequestDataAttributesDefinitionAudienceFiltersAccountsItems";
import { GetCohortUsersRequestDataAttributesDefinitionAudienceFiltersSegmentsItems } from "./GetCohortUsersRequestDataAttributesDefinitionAudienceFiltersSegmentsItems";
import { GetCohortUsersRequestDataAttributesDefinitionAudienceFiltersUsersItems } from "./GetCohortUsersRequestDataAttributesDefinitionAudienceFiltersUsersItems";
import { GetCohortUsersRequestDataAttributesTime } from "./GetCohortUsersRequestDataAttributesTime";
import { GetCohortUsersResponse } from "./GetCohortUsersResponse";
import { GetCohortUsersResponseData } from "./GetCohortUsersResponseData";
import { GetCohortUsersResponseDataAttributes } from "./GetCohortUsersResponseDataAttributes";
import { GetCohortUsersResponseDataAttributesUsersItems } from "./GetCohortUsersResponseDataAttributesUsersItems";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    GetCohortRequestDataType: ["cohort_request"],
    GetCohortResponseDataType: ["cohort_response"],
    GetCohortUsersRequestDataType: ["cohort_users_request"],
    GetCohortUsersResponseDataType: ["cohort_users_response"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    GetCohortRequest: GetCohortRequest,
    GetCohortRequestData: GetCohortRequestData,
    GetCohortRequestDataAttributes: GetCohortRequestDataAttributes,
    GetCohortRequestDataAttributesDefinition:
      GetCohortRequestDataAttributesDefinition,
    GetCohortRequestDataAttributesDefinitionAudienceFilters:
      GetCohortRequestDataAttributesDefinitionAudienceFilters,
    GetCohortRequestDataAttributesDefinitionAudienceFiltersAccountsItems:
      GetCohortRequestDataAttributesDefinitionAudienceFiltersAccountsItems,
    GetCohortRequestDataAttributesDefinitionAudienceFiltersSegmentsItems:
      GetCohortRequestDataAttributesDefinitionAudienceFiltersSegmentsItems,
    GetCohortRequestDataAttributesDefinitionAudienceFiltersUsersItems:
      GetCohortRequestDataAttributesDefinitionAudienceFiltersUsersItems,
    GetCohortRequestDataAttributesTime: GetCohortRequestDataAttributesTime,
    GetCohortResponse: GetCohortResponse,
    GetCohortResponseData: GetCohortResponseData,
    GetCohortResponseDataAttributes: GetCohortResponseDataAttributes,
    GetCohortResponseDataAttributesCohortsItems:
      GetCohortResponseDataAttributesCohortsItems,
    GetCohortResponseDataAttributesCohortsItemsValuesItems:
      GetCohortResponseDataAttributesCohortsItemsValuesItems,
    GetCohortUsersRequest: GetCohortUsersRequest,
    GetCohortUsersRequestData: GetCohortUsersRequestData,
    GetCohortUsersRequestDataAttributes: GetCohortUsersRequestDataAttributes,
    GetCohortUsersRequestDataAttributesDefinition:
      GetCohortUsersRequestDataAttributesDefinition,
    GetCohortUsersRequestDataAttributesDefinitionAudienceFilters:
      GetCohortUsersRequestDataAttributesDefinitionAudienceFilters,
    GetCohortUsersRequestDataAttributesDefinitionAudienceFiltersAccountsItems:
      GetCohortUsersRequestDataAttributesDefinitionAudienceFiltersAccountsItems,
    GetCohortUsersRequestDataAttributesDefinitionAudienceFiltersSegmentsItems:
      GetCohortUsersRequestDataAttributesDefinitionAudienceFiltersSegmentsItems,
    GetCohortUsersRequestDataAttributesDefinitionAudienceFiltersUsersItems:
      GetCohortUsersRequestDataAttributesDefinitionAudienceFiltersUsersItems,
    GetCohortUsersRequestDataAttributesTime:
      GetCohortUsersRequestDataAttributesTime,
    GetCohortUsersResponse: GetCohortUsersResponse,
    GetCohortUsersResponseData: GetCohortUsersResponseData,
    GetCohortUsersResponseDataAttributes: GetCohortUsersResponseDataAttributes,
    GetCohortUsersResponseDataAttributesUsersItems:
      GetCohortUsersResponseDataAttributesUsersItems,
  },
};
