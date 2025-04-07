import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ApplicationSecurityWafExclusionFilterUpdateData } from "./ApplicationSecurityWafExclusionFilterUpdateData";

/**
 * Request object for updating a single WAF exclusion filter.
 */
export class ApplicationSecurityWafExclusionFilterUpdateRequest {
  /**
   * Object for updating a single WAF exclusion filter.
   */
  "data": ApplicationSecurityWafExclusionFilterUpdateData;
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
      type: "ApplicationSecurityWafExclusionFilterUpdateData",
      required: true,
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
    return ApplicationSecurityWafExclusionFilterUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
