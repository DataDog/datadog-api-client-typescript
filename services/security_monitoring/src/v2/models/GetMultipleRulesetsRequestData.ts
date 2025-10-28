import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GetMultipleRulesetsRequestDataAttributes } from "./GetMultipleRulesetsRequestDataAttributes";
import { GetMultipleRulesetsRequestDataType } from "./GetMultipleRulesetsRequestDataType";

export class GetMultipleRulesetsRequestData {
  "attributes"?: GetMultipleRulesetsRequestDataAttributes;
  "id"?: string;
  /**
   * Get multiple rulesets request resource type.
   */
  "type": GetMultipleRulesetsRequestDataType;
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
      type: "GetMultipleRulesetsRequestDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "GetMultipleRulesetsRequestDataType",
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
    return GetMultipleRulesetsRequestData.attributeTypeMap;
  }

  public constructor() {}
}
