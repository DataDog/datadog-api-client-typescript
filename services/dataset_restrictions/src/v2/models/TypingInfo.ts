import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { DatasetRestrictionPrincipal } from "./DatasetRestrictionPrincipal";
import { DatasetRestrictionResponse } from "./DatasetRestrictionResponse";
import { DatasetRestrictionResponseAttributes } from "./DatasetRestrictionResponseAttributes";
import { DatasetRestrictionResponseData } from "./DatasetRestrictionResponseData";
import { DatasetRestrictionUpdateRequest } from "./DatasetRestrictionUpdateRequest";
import { DatasetRestrictionUpdateRequestAttributes } from "./DatasetRestrictionUpdateRequestAttributes";
import { DatasetRestrictionUpdateRequestData } from "./DatasetRestrictionUpdateRequestData";
import { DatasetRestrictionsListResponse } from "./DatasetRestrictionsListResponse";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    DatasetRestrictionOwnershipMode: ["disabled", "team_tag_based"],
    DatasetRestrictionRestrictionMode: ["standard", "default_hide"],
    DatasetRestrictionsType: ["dataset_restrictions"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    DatasetRestrictionPrincipal: DatasetRestrictionPrincipal,
    DatasetRestrictionResponse: DatasetRestrictionResponse,
    DatasetRestrictionResponseAttributes: DatasetRestrictionResponseAttributes,
    DatasetRestrictionResponseData: DatasetRestrictionResponseData,
    DatasetRestrictionUpdateRequest: DatasetRestrictionUpdateRequest,
    DatasetRestrictionUpdateRequestAttributes:
      DatasetRestrictionUpdateRequestAttributes,
    DatasetRestrictionUpdateRequestData: DatasetRestrictionUpdateRequestData,
    DatasetRestrictionsListResponse: DatasetRestrictionsListResponse,
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
  },
};
