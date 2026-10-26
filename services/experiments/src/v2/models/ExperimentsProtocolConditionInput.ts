import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Protocol targeting condition. Publishing and replacement require a saved filter or a valid inline attribute, operator, and values.
 */
export class ExperimentsProtocolConditionInput {
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
   * Saved filter UUID. Null selects an inline condition. An empty string skips the saved-filter lookup.
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
    return ExperimentsProtocolConditionInput.attributeTypeMap;
  }

  public constructor() {}
}
