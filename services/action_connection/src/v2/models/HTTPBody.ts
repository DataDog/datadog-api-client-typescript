import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The definition of `HTTPBody` object.
 */
export class HTTPBody {
  /**
   * Serialized body content
   */
  "content"?: string;
  /**
   * Content type of the body
   */
  "contentType"?: string;
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
    content: {
      baseName: "content",
      type: "string",
    },
    contentType: {
      baseName: "content_type",
      type: "string",
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
    return HTTPBody.attributeTypeMap;
  }

  public constructor() {}
}
