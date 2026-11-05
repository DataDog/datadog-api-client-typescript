import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Supported model input and output modalities.
 */
export class AiGatewayModelModalities {
  "input"?: Array<string>;
  "output"?: Array<string>;
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
    input: {
      baseName: "input",
      type: "Array<string>",
    },
    output: {
      baseName: "output",
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
    return AiGatewayModelModalities.attributeTypeMap;
  }

  public constructor() {}
}
