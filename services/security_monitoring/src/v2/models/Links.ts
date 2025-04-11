import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The JSON:API links related to pagination.
 */
export class Links {
  /**
   * First page link.
   */
  "first": string;
  /**
   * Last page link.
   */
  "last": string;
  /**
   * Next page link.
   */
  "next"?: string;
  /**
   * Previous page link.
   */
  "previous"?: string;
  /**
   * Request link.
   */
  "self": string;
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
    first: {
      baseName: "first",
      type: "string",
      required: true,
    },
    last: {
      baseName: "last",
      type: "string",
      required: true,
    },
    next: {
      baseName: "next",
      type: "string",
    },
    previous: {
      baseName: "previous",
      type: "string",
    },
    self: {
      baseName: "self",
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
    return Links.attributeTypeMap;
  }

  public constructor() {}
}
