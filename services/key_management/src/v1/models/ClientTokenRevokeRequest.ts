import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Request to revoke a client token.
 */
export class ClientTokenRevokeRequest {
  /**
   * Hash value of the client token to revoke.
   */
  "hash": string;
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
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ClientTokenRevokeRequest.attributeTypeMap;
  }

  public constructor() {}
}
