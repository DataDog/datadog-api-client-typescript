import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OrgGroupPolicySuggestionData } from "./OrgGroupPolicySuggestionData";

/**
 * Response containing a list of org group policy suggestions.
 */
export class OrgGroupPolicySuggestionListResponse {
  /**
   * An array of org group policy suggestions.
   */
  "data": Array<OrgGroupPolicySuggestionData>;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any; };
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
      type: "Array<OrgGroupPolicySuggestionData>",
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
    return OrgGroupPolicySuggestionListResponse.attributeTypeMap;
  }

  public constructor() {}
}
