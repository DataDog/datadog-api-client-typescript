import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ApplicationSecurityWafExclusionFilterResource } from "./ApplicationSecurityWafExclusionFilterResource";

/**
 * Response object for a single WAF exclusion filter.
 */
export class ApplicationSecurityWafExclusionFilterResponse {
  /**
   * A JSON:API resource for an WAF exclusion filter.
   */
  "data"?: ApplicationSecurityWafExclusionFilterResource;
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
      type: "ApplicationSecurityWafExclusionFilterResource",
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
    return ApplicationSecurityWafExclusionFilterResponse.attributeTypeMap;
  }

  public constructor() {}
}
