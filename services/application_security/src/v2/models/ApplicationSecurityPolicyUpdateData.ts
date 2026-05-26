import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ApplicationSecurityPolicyType } from "./ApplicationSecurityPolicyType";
import { ApplicationSecurityPolicyUpdateAttributes } from "./ApplicationSecurityPolicyUpdateAttributes";

/**
 * Object for a single WAF policy.
 */
export class ApplicationSecurityPolicyUpdateData {
  /**
   * Update a WAF policy.
   */
  "attributes": ApplicationSecurityPolicyUpdateAttributes;
  /**
   * The type of the resource. The value should always be `policy`.
   */
  "type": ApplicationSecurityPolicyType;
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
      type: "ApplicationSecurityPolicyUpdateAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ApplicationSecurityPolicyType",
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
    return ApplicationSecurityPolicyUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
