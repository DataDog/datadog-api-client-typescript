import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ArbitraryRuleStatusResponseDataAttributes } from "./ArbitraryRuleStatusResponseDataAttributes";
import { ArbitraryRuleStatusResponseDataType } from "./ArbitraryRuleStatusResponseDataType";

/**
 * Processing status for a custom allocation rule.
 */
export class ArbitraryRuleStatusResponseData {
  /**
   * Processing status for a custom allocation rule.
   */
  "attributes": ArbitraryRuleStatusResponseDataAttributes;
  /**
   * The unique identifier of the custom allocation rule.
   */
  "id": string;
  /**
   * Custom allocation rule status resource type.
   */
  "type": ArbitraryRuleStatusResponseDataType;
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
      type: "ArbitraryRuleStatusResponseDataAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ArbitraryRuleStatusResponseDataType",
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
    return ArbitraryRuleStatusResponseData.attributeTypeMap;
  }

  public constructor() {}
}
