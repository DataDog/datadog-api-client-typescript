import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { SankeyRequest } from "./SankeyRequest";
import { SankeyRequestData } from "./SankeyRequestData";
import { SankeyRequestDataAttributes } from "./SankeyRequestDataAttributes";
import { SankeyRequestDataAttributesDefinition } from "./SankeyRequestDataAttributesDefinition";
import { SankeyRequestDataAttributesSampling } from "./SankeyRequestDataAttributesSampling";
import { SankeyRequestDataAttributesSearch } from "./SankeyRequestDataAttributesSearch";
import { SankeyRequestDataAttributesSearchAudienceFilters } from "./SankeyRequestDataAttributesSearchAudienceFilters";
import { SankeyRequestDataAttributesSearchAudienceFiltersAccountsItems } from "./SankeyRequestDataAttributesSearchAudienceFiltersAccountsItems";
import { SankeyRequestDataAttributesSearchAudienceFiltersSegmentsItems } from "./SankeyRequestDataAttributesSearchAudienceFiltersSegmentsItems";
import { SankeyRequestDataAttributesSearchAudienceFiltersUsersItems } from "./SankeyRequestDataAttributesSearchAudienceFiltersUsersItems";
import { SankeyRequestDataAttributesSearchOccurrences } from "./SankeyRequestDataAttributesSearchOccurrences";
import { SankeyRequestDataAttributesTime } from "./SankeyRequestDataAttributesTime";
import { SankeyResponse } from "./SankeyResponse";
import { SankeyResponseData } from "./SankeyResponseData";
import { SankeyResponseDataAttributes } from "./SankeyResponseDataAttributes";
import { SankeyResponseDataAttributesLinksItems } from "./SankeyResponseDataAttributesLinksItems";
import { SankeyResponseDataAttributesNodesItems } from "./SankeyResponseDataAttributesNodesItems";
import { SankeyResponseDataAttributesNodesItemsAggregatedNodesItems } from "./SankeyResponseDataAttributesNodesItemsAggregatedNodesItems";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    SankeyRequestDataType: ["sankey_request"],
    SankeyResponseDataType: ["sankey_response"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    SankeyRequest: SankeyRequest,
    SankeyRequestData: SankeyRequestData,
    SankeyRequestDataAttributes: SankeyRequestDataAttributes,
    SankeyRequestDataAttributesDefinition:
      SankeyRequestDataAttributesDefinition,
    SankeyRequestDataAttributesSampling: SankeyRequestDataAttributesSampling,
    SankeyRequestDataAttributesSearch: SankeyRequestDataAttributesSearch,
    SankeyRequestDataAttributesSearchAudienceFilters:
      SankeyRequestDataAttributesSearchAudienceFilters,
    SankeyRequestDataAttributesSearchAudienceFiltersAccountsItems:
      SankeyRequestDataAttributesSearchAudienceFiltersAccountsItems,
    SankeyRequestDataAttributesSearchAudienceFiltersSegmentsItems:
      SankeyRequestDataAttributesSearchAudienceFiltersSegmentsItems,
    SankeyRequestDataAttributesSearchAudienceFiltersUsersItems:
      SankeyRequestDataAttributesSearchAudienceFiltersUsersItems,
    SankeyRequestDataAttributesSearchOccurrences:
      SankeyRequestDataAttributesSearchOccurrences,
    SankeyRequestDataAttributesTime: SankeyRequestDataAttributesTime,
    SankeyResponse: SankeyResponse,
    SankeyResponseData: SankeyResponseData,
    SankeyResponseDataAttributes: SankeyResponseDataAttributes,
    SankeyResponseDataAttributesLinksItems:
      SankeyResponseDataAttributesLinksItems,
    SankeyResponseDataAttributesNodesItems:
      SankeyResponseDataAttributesNodesItems,
    SankeyResponseDataAttributesNodesItemsAggregatedNodesItems:
      SankeyResponseDataAttributesNodesItemsAggregatedNodesItems,
  },
};
