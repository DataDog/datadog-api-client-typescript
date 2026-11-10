import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The definition of `RulesValidateQueryRequestDataAttributes` object.
 */
export class RulesValidateQueryRequestDataAttributes {
  /**
   * The tag pipeline rule query to validate, in Datadog tag query syntax: `tag:value` terms combined with `AND`, `OR`, and `NOT`.
   */
  "query": string;
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
    query: {
      baseName: "query",
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
    return RulesValidateQueryRequestDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
