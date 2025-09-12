import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ArbitraryRuleResponseDataAttributes } from "./ArbitraryRuleResponseDataAttributes";
import { ArbitraryRuleResponseDataType } from "./ArbitraryRuleResponseDataType";

/**
 * The definition of `ArbitraryRuleResponseData` object.
 */
export class ArbitraryRuleResponseData {
  /**
   * The definition of `ArbitraryRuleResponseDataAttributes` object.
   */
  "attributes"?: ArbitraryRuleResponseDataAttributes;
  /**
   * The `ArbitraryRuleResponseData` `id`.
   */
  "id"?: string;
  /**
   * Arbitrary rule resource type.
   */
  "type": ArbitraryRuleResponseDataType;
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
      type: "ArbitraryRuleResponseDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "ArbitraryRuleResponseDataType",
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
    return ArbitraryRuleResponseData.attributeTypeMap;
  }

  public constructor() {}
}
