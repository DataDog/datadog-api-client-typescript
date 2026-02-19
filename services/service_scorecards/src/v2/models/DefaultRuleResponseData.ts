import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DefaultRuleResponseAttributes } from "./DefaultRuleResponseAttributes";
import { DefaultRuleType } from "./DefaultRuleType";

/**
 * Default rule data.
 */
export class DefaultRuleResponseData {
  /**
   * Default rule attributes.
   */
  "attributes": DefaultRuleResponseAttributes;
  /**
   * The unique ID of the default rule.
   */
  "id": string;
  /**
   * The JSON:API type for default rules.
   */
  "type": DefaultRuleType;
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
      type: "DefaultRuleResponseAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "DefaultRuleType",
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
    return DefaultRuleResponseData.attributeTypeMap;
  }

  public constructor() {}
}
