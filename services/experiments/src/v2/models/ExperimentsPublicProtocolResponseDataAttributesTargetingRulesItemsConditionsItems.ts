import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * One condition in a protocol targeting rule.
 */
export class ExperimentsPublicProtocolResponseDataAttributesTargetingRulesItemsConditionsItems {
  /**
   * Subject attribute evaluated by the targeting condition.
   */
  "attribute"?: string;
  /**
   * Comparison applied to the subject attribute.
   */
  "operator"?: string;
  /**
   * Position of this entry in the ordered configuration.
   */
  "orderPosition"?: number;
  /**
   * ID of the saved filter used by this targeting condition.
   */
  "savedFilterId"?: string;
  /**
   * Values compared with the subject attribute in this condition.
   */
  "value"?: Array<string>;
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
    attribute: {
      baseName: "attribute",
      type: "string",
    },
    operator: {
      baseName: "operator",
      type: "string",
    },
    orderPosition: {
      baseName: "order_position",
      type: "number",
      format: "int64",
    },
    savedFilterId: {
      baseName: "saved_filter_id",
      type: "string",
    },
    value: {
      baseName: "value",
      type: "Array<string>",
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
    return ExperimentsPublicProtocolResponseDataAttributesTargetingRulesItemsConditionsItems.attributeTypeMap;
  }

  public constructor() {}
}
