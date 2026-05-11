import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Processing status for a custom allocation rule.
 */
export class ArbitraryRuleStatusResponseDataAttributes {
  /**
   * The processing status of the custom allocation rule.
   */
  "processingStatus": string;
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
    processingStatus: {
      baseName: "processing_status",
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
    return ArbitraryRuleStatusResponseDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
