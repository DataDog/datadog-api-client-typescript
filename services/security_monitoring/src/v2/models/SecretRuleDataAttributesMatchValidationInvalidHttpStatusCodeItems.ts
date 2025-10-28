import { AttributeTypeMap } from "@datadog/datadog-api-client";

export class SecretRuleDataAttributesMatchValidationInvalidHttpStatusCodeItems {
  "end"?: number;
  "start"?: number;
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
    end: {
      baseName: "end",
      type: "number",
      format: "int64",
    },
    start: {
      baseName: "start",
      type: "number",
      format: "int64",
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
    return SecretRuleDataAttributesMatchValidationInvalidHttpStatusCodeItems.attributeTypeMap;
  }

  public constructor() {}
}
