import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ApplicationSecurityWafExclusionFilterType } from "./ApplicationSecurityWafExclusionFilterType";
import { ApplicationSecurityWafExclusionFilterUpdateAttributes } from "./ApplicationSecurityWafExclusionFilterUpdateAttributes";

/**
 * Object for updating a single WAF exclusion filter.
 */
export class ApplicationSecurityWafExclusionFilterUpdateData {
  /**
   * Attributes for updating a WAF exclusion filter.
   */
  "attributes": ApplicationSecurityWafExclusionFilterUpdateAttributes;
  /**
   * Type of the resource. The value should always be `exclusion_filter`.
   */
  "type": ApplicationSecurityWafExclusionFilterType;
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
    attributes: {
      baseName: "attributes",
      type: "ApplicationSecurityWafExclusionFilterUpdateAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ApplicationSecurityWafExclusionFilterType",
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
    return ApplicationSecurityWafExclusionFilterUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
