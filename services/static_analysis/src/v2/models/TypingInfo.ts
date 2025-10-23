import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { ResolveVulnerableSymbolsRequest } from "./ResolveVulnerableSymbolsRequest";
import { ResolveVulnerableSymbolsRequestData } from "./ResolveVulnerableSymbolsRequestData";
import { ResolveVulnerableSymbolsRequestDataAttributes } from "./ResolveVulnerableSymbolsRequestDataAttributes";
import { ResolveVulnerableSymbolsResponse } from "./ResolveVulnerableSymbolsResponse";
import { ResolveVulnerableSymbolsResponseData } from "./ResolveVulnerableSymbolsResponseData";
import { ResolveVulnerableSymbolsResponseDataAttributes } from "./ResolveVulnerableSymbolsResponseDataAttributes";
import { ResolveVulnerableSymbolsResponseResults } from "./ResolveVulnerableSymbolsResponseResults";
import { ResolveVulnerableSymbolsResponseResultsVulnerableSymbols } from "./ResolveVulnerableSymbolsResponseResultsVulnerableSymbols";
import { ResolveVulnerableSymbolsResponseResultsVulnerableSymbolsSymbols } from "./ResolveVulnerableSymbolsResponseResultsVulnerableSymbolsSymbols";
import { ScaRequest } from "./ScaRequest";
import { ScaRequestData } from "./ScaRequestData";
import { ScaRequestDataAttributes } from "./ScaRequestDataAttributes";
import { ScaRequestDataAttributesCommit } from "./ScaRequestDataAttributesCommit";
import { ScaRequestDataAttributesDependenciesItems } from "./ScaRequestDataAttributesDependenciesItems";
import { ScaRequestDataAttributesDependenciesItemsLocationsItems } from "./ScaRequestDataAttributesDependenciesItemsLocationsItems";
import { ScaRequestDataAttributesDependenciesItemsLocationsItemsFilePosition } from "./ScaRequestDataAttributesDependenciesItemsLocationsItemsFilePosition";
import { ScaRequestDataAttributesDependenciesItemsLocationsItemsPosition } from "./ScaRequestDataAttributesDependenciesItemsLocationsItemsPosition";
import { ScaRequestDataAttributesDependenciesItemsReachableSymbolPropertiesItems } from "./ScaRequestDataAttributesDependenciesItemsReachableSymbolPropertiesItems";
import { ScaRequestDataAttributesFilesItems } from "./ScaRequestDataAttributesFilesItems";
import { ScaRequestDataAttributesRelationsItems } from "./ScaRequestDataAttributesRelationsItems";
import { ScaRequestDataAttributesRepository } from "./ScaRequestDataAttributesRepository";
import { ScaRequestDataAttributesVulnerabilitiesItems } from "./ScaRequestDataAttributesVulnerabilitiesItems";
import { ScaRequestDataAttributesVulnerabilitiesItemsAffectsItems } from "./ScaRequestDataAttributesVulnerabilitiesItemsAffectsItems";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    ResolveVulnerableSymbolsRequestDataType: [
      "resolve-vulnerable-symbols-request",
    ],
    ResolveVulnerableSymbolsResponseDataType: [
      "resolve-vulnerable-symbols-response",
    ],
    ScaRequestDataType: ["scarequests"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    ResolveVulnerableSymbolsRequest: ResolveVulnerableSymbolsRequest,
    ResolveVulnerableSymbolsRequestData: ResolveVulnerableSymbolsRequestData,
    ResolveVulnerableSymbolsRequestDataAttributes:
      ResolveVulnerableSymbolsRequestDataAttributes,
    ResolveVulnerableSymbolsResponse: ResolveVulnerableSymbolsResponse,
    ResolveVulnerableSymbolsResponseData: ResolveVulnerableSymbolsResponseData,
    ResolveVulnerableSymbolsResponseDataAttributes:
      ResolveVulnerableSymbolsResponseDataAttributes,
    ResolveVulnerableSymbolsResponseResults:
      ResolveVulnerableSymbolsResponseResults,
    ResolveVulnerableSymbolsResponseResultsVulnerableSymbols:
      ResolveVulnerableSymbolsResponseResultsVulnerableSymbols,
    ResolveVulnerableSymbolsResponseResultsVulnerableSymbolsSymbols:
      ResolveVulnerableSymbolsResponseResultsVulnerableSymbolsSymbols,
    ScaRequest: ScaRequest,
    ScaRequestData: ScaRequestData,
    ScaRequestDataAttributes: ScaRequestDataAttributes,
    ScaRequestDataAttributesCommit: ScaRequestDataAttributesCommit,
    ScaRequestDataAttributesDependenciesItems:
      ScaRequestDataAttributesDependenciesItems,
    ScaRequestDataAttributesDependenciesItemsLocationsItems:
      ScaRequestDataAttributesDependenciesItemsLocationsItems,
    ScaRequestDataAttributesDependenciesItemsLocationsItemsFilePosition:
      ScaRequestDataAttributesDependenciesItemsLocationsItemsFilePosition,
    ScaRequestDataAttributesDependenciesItemsLocationsItemsPosition:
      ScaRequestDataAttributesDependenciesItemsLocationsItemsPosition,
    ScaRequestDataAttributesDependenciesItemsReachableSymbolPropertiesItems:
      ScaRequestDataAttributesDependenciesItemsReachableSymbolPropertiesItems,
    ScaRequestDataAttributesFilesItems: ScaRequestDataAttributesFilesItems,
    ScaRequestDataAttributesRelationsItems:
      ScaRequestDataAttributesRelationsItems,
    ScaRequestDataAttributesRepository: ScaRequestDataAttributesRepository,
    ScaRequestDataAttributesVulnerabilitiesItems:
      ScaRequestDataAttributesVulnerabilitiesItems,
    ScaRequestDataAttributesVulnerabilitiesItemsAffectsItems:
      ScaRequestDataAttributesVulnerabilitiesItemsAffectsItems,
  },
};
