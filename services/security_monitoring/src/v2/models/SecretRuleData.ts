import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecretRuleDataAttributes } from "./SecretRuleDataAttributes";
import { SecretRuleDataType } from "./SecretRuleDataType";

export class SecretRuleData {
  "attributes"?: SecretRuleDataAttributes;
  "id"?: string;
  /**
   * Secret rule resource type.
   */
  "type": SecretRuleDataType;
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
      type: "SecretRuleDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "SecretRuleDataType",
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
    return SecretRuleData.attributeTypeMap;
  }

  public constructor() {}
}
