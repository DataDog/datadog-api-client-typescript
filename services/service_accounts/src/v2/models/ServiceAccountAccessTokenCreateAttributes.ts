import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes used to create a service account access token.
 */
export class ServiceAccountAccessTokenCreateAttributes {
  /**
   * Expiration date of the access token. Optional for service account tokens.
   */
  "expiresAt"?: Date;
  /**
   * Name of the access token.
   */
  "name": string;
  /**
   * Array of scopes to grant the access token.
   */
  "scopes": Array<string>;
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
    expiresAt: {
      baseName: "expires_at",
      type: "Date",
      format: "date-time",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    scopes: {
      baseName: "scopes",
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
    return ServiceAccountAccessTokenCreateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
