import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GetCohortRequestDataAttributesDefinitionAudienceFilters } from "./GetCohortRequestDataAttributesDefinitionAudienceFilters";

export class GetCohortRequestDataAttributesDefinition {
  "audienceFilters"?: GetCohortRequestDataAttributesDefinitionAudienceFilters;
  "inclusionSearch"?: string;
  "returnSearch"?: string;
  "segmentId"?: string;
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
    audienceFilters: {
      baseName: "audience_filters",
      type: "GetCohortRequestDataAttributesDefinitionAudienceFilters",
    },
    inclusionSearch: {
      baseName: "inclusion_search",
      type: "string",
    },
    returnSearch: {
      baseName: "return_search",
      type: "string",
    },
    segmentId: {
      baseName: "segment_id",
      type: "string",
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
    return GetCohortRequestDataAttributesDefinition.attributeTypeMap;
  }

  public constructor() {}
}
