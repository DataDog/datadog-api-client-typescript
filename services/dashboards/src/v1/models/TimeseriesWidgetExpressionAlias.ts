import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Define an expression alias.
 */
export class TimeseriesWidgetExpressionAlias {
  /**
   * Expression alias.
   */
  "aliasName"?: string;
  /**
   * Expression name.
   */
  "expression": string;
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
    aliasName: {
      baseName: "alias_name",
      type: "string",
    },
    expression: {
      baseName: "expression",
      type: "string",
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
    return TimeseriesWidgetExpressionAlias.attributeTypeMap;
  }

  public constructor() {}
}
