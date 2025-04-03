import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ApplicationSecurityWafExclusionFilterResource } from "./ApplicationSecurityWafExclusionFilterResource";

/**
 * Response object for multiple WAF exclusion filters.
 */
export class ApplicationSecurityWafExclusionFiltersResponse {
  /**
   * A list of WAF exclusion filters.
   */
  "data"?: Array<ApplicationSecurityWafExclusionFilterResource>;
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
      type: "Array<ApplicationSecurityWafExclusionFilterResource>",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ApplicationSecurityWafExclusionFiltersResponse.attributeTypeMap;
  }

  public constructor() {}
}
