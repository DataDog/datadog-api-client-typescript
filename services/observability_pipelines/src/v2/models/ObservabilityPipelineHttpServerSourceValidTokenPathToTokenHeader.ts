import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Extract the token from a specific HTTP request header.
 */
export class ObservabilityPipelineHttpServerSourceValidTokenPathToTokenHeader {
  /**
   * The name of the HTTP header that carries the token.
   */
  "header": string;
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
    header: {
      baseName: "header",
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
    return ObservabilityPipelineHttpServerSourceValidTokenPathToTokenHeader.attributeTypeMap;
  }

  public constructor() {}
}
