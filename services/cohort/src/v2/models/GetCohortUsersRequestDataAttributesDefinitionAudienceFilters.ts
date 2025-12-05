import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GetCohortUsersRequestDataAttributesDefinitionAudienceFiltersAccountsItems } from "./GetCohortUsersRequestDataAttributesDefinitionAudienceFiltersAccountsItems";
import { GetCohortUsersRequestDataAttributesDefinitionAudienceFiltersSegmentsItems } from "./GetCohortUsersRequestDataAttributesDefinitionAudienceFiltersSegmentsItems";
import { GetCohortUsersRequestDataAttributesDefinitionAudienceFiltersUsersItems } from "./GetCohortUsersRequestDataAttributesDefinitionAudienceFiltersUsersItems";

export class GetCohortUsersRequestDataAttributesDefinitionAudienceFilters {
  "accounts"?: Array<GetCohortUsersRequestDataAttributesDefinitionAudienceFiltersAccountsItems>;
  "formula"?: string;
  "segments"?: Array<GetCohortUsersRequestDataAttributesDefinitionAudienceFiltersSegmentsItems>;
  "users"?: Array<GetCohortUsersRequestDataAttributesDefinitionAudienceFiltersUsersItems>;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any };
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    accounts: {
      baseName: "accounts",
      type: "Array<GetCohortUsersRequestDataAttributesDefinitionAudienceFiltersAccountsItems>",
    },
    formula: {
      baseName: "formula",
      type: "string",
    },
    segments: {
      baseName: "segments",
      type: "Array<GetCohortUsersRequestDataAttributesDefinitionAudienceFiltersSegmentsItems>",
    },
    users: {
      baseName: "users",
      type: "Array<GetCohortUsersRequestDataAttributesDefinitionAudienceFiltersUsersItems>",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return GetCohortUsersRequestDataAttributesDefinitionAudienceFilters.attributeTypeMap;
  }

  public constructor() {}
}
