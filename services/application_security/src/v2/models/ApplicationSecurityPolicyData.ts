import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ApplicationSecurityPolicyAttributes } from "./ApplicationSecurityPolicyAttributes";
import { ApplicationSecurityPolicyMetadata } from "./ApplicationSecurityPolicyMetadata";
import { ApplicationSecurityPolicyType } from "./ApplicationSecurityPolicyType";

/**
 * Object for a single WAF policy.
 */
export class ApplicationSecurityPolicyData {
  /**
   * A WAF policy.
   */
  "attributes"?: ApplicationSecurityPolicyAttributes;
  /**
   * The ID of the policy.
   */
  "id"?: string;
  /**
   * Metadata associated with the WAF policy.
   */
  "metadata"?: ApplicationSecurityPolicyMetadata;
  /**
   * The type of the resource. The value should always be `policy`.
   */
  "type"?: ApplicationSecurityPolicyType;
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
      type: "ApplicationSecurityPolicyAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    metadata: {
      baseName: "metadata",
      type: "ApplicationSecurityPolicyMetadata",
    },
    type: {
      baseName: "type",
      type: "ApplicationSecurityPolicyType",
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
    return ApplicationSecurityPolicyData.attributeTypeMap;
  }

  public constructor() {}
}
