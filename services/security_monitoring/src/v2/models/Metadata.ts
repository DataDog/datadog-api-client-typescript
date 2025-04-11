import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The metadata related to this request.
 */
export class Metadata {
  /**
   * Number of entities included in the response.
   */
  "count": number;
  /**
   * The token that identifies the request.
   */
  "token": string;
  /**
   * Total number of entities across all pages.
   */
  "total": number;
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
    count: {
      baseName: "count",
      type: "number",
      required: true,
      format: "int64",
    },
    token: {
      baseName: "token",
      type: "string",
      required: true,
    },
    total: {
      baseName: "total",
      type: "number",
      required: true,
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
    return Metadata.attributeTypeMap;
  }

  public constructor() {}
}
