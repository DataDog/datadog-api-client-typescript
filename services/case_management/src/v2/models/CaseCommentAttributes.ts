import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Case comment attributes
 */
export class CaseCommentAttributes {
  /**
   * The `CaseCommentAttributes` `message`.
   */
  "comment": string;
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
    comment: {
      baseName: "comment",
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
    return CaseCommentAttributes.attributeTypeMap;
  }

  public constructor() {}
}
