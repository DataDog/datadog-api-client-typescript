import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CustomRuleRevisionAttributes } from "./CustomRuleRevisionAttributes";
import { CustomRuleRevisionDataType } from "./CustomRuleRevisionDataType";

/**
 * A specific revision of a custom static analysis rule.
 */
export class CustomRuleRevision {
  /**
   * Attributes of a custom rule revision, including code, metadata, and test cases.
   */
  "attributes": CustomRuleRevisionAttributes;
  /**
   * Revision identifier
   */
  "id": string;
  /**
   * Resource type
   */
  "type": CustomRuleRevisionDataType;
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
      type: "CustomRuleRevisionAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "CustomRuleRevisionDataType",
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
    return CustomRuleRevision.attributeTypeMap;
  }

  public constructor() {}
}
