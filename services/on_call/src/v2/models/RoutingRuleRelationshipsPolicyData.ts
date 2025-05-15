import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RoutingRuleRelationshipsPolicyDataType } from "./RoutingRuleRelationshipsPolicyDataType";

/**
 * Represents the policy data reference, containing the policy's ID and resource type.
 */
export class RoutingRuleRelationshipsPolicyData {
  /**
   * Specifies the unique identifier of the policy.
   */
  "id": string;
  /**
   * Indicates that the resource is of type 'policies'.
   */
  "type": RoutingRuleRelationshipsPolicyDataType;
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
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "RoutingRuleRelationshipsPolicyDataType",
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
    return RoutingRuleRelationshipsPolicyData.attributeTypeMap;
  }

  public constructor() {}
}
