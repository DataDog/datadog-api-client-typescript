import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Request to create a new client token.
 */
export class ClientTokenCreateRequest {
  /**
   * Name of the client token.
   */
  "name": string;
  /**
   * List of allowed origin URLs for browser-based applications. Requests from URLs
   * not in this list will be rejected.
   */
  "originUrls": Array<string>;
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
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    originUrls: {
      baseName: "origin_urls",
      type: "Array<string>",
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
    return ClientTokenCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
