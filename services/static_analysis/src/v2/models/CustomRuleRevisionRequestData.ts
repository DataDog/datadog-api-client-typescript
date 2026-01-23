import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CustomRuleRevisionDataType } from "./CustomRuleRevisionDataType";
import { CustomRuleRevisionInputAttributes } from "./CustomRuleRevisionInputAttributes";

export class CustomRuleRevisionRequestData {
  "attributes"?: CustomRuleRevisionInputAttributes;
  /**
   * Revision identifier
   */
  "id"?: string;
  /**
   * Resource type
   */
  "type"?: CustomRuleRevisionDataType;
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
      type: "CustomRuleRevisionInputAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "CustomRuleRevisionDataType",
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
    return CustomRuleRevisionRequestData.attributeTypeMap;
  }

  public constructor() {}
}
