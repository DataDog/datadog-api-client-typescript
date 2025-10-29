import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GetCohortUsersRequestDataAttributesDefinitionAudienceFilters } from "./GetCohortUsersRequestDataAttributesDefinitionAudienceFilters";

export class GetCohortUsersRequestDataAttributesDefinition {
  "audienceFilters"?: GetCohortUsersRequestDataAttributesDefinitionAudienceFilters;
  "cohort"?: string;
  "inclusionSearch"?: string;
  "returnSearch"?: string;
  "segmentId"?: string;
  "window"?: number;
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
      type: "GetCohortUsersRequestDataAttributesDefinitionAudienceFilters",
    },
    cohort: {
      baseName: "cohort",
      type: "string",
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
    window: {
      baseName: "window",
      type: "number",
      format: "int64",
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
    return GetCohortUsersRequestDataAttributesDefinition.attributeTypeMap;
  }

  public constructor() {}
}
