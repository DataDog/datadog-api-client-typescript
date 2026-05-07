import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CustomAllocationRuleStatusAttributes } from "./CustomAllocationRuleStatusAttributes";
import { CustomAllocationRuleStatusType } from "./CustomAllocationRuleStatusType";

/**
 * Custom allocation rule status data.
 */
export class CustomAllocationRuleStatusData {
  /**
   * Attributes for a custom allocation rule status.
   */
  "attributes": CustomAllocationRuleStatusAttributes;
  /**
   * The unique identifier of the custom allocation rule.
   */
  "id": string;
  /**
   * Custom allocation rule status resource type.
   */
  "type": CustomAllocationRuleStatusType;
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
      type: "CustomAllocationRuleStatusAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "CustomAllocationRuleStatusType",
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
    return CustomAllocationRuleStatusData.attributeTypeMap;
  }

  public constructor() {}
}
