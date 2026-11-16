import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ApproveFlagSuggestionData } from "./ApproveFlagSuggestionData";

/**
 * Request to approve a feature flag change suggestion.
 */
export class ApproveFlagSuggestionRequest {
  /**
   * The approval event to create.
   */
  "data": ApproveFlagSuggestionData;
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
    data: {
      baseName: "data",
      type: "ApproveFlagSuggestionData",
      required: true,
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
    return ApproveFlagSuggestionRequest.attributeTypeMap;
  }

  public constructor() {}
}
