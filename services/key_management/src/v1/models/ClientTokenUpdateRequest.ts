import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Request to update an existing client token.
 */
export class ClientTokenUpdateRequest {
  /**
   * Hash value of the client token to update.
   */
  "hash": string;
  /**
   * New name for the client token.
   */
  "name": string;
  /**
   * New list of allowed origin URLs. If provided, this will replace the existing list.
   */
  "originUrls"?: Array<string>;
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
    hash: {
      baseName: "hash",
      type: "string",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    originUrls: {
      baseName: "origin_urls",
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
    return ClientTokenUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
