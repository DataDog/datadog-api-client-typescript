import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes used to create a personal access token.
 */
export class PersonalAccessTokenCreateAttributes {
  /**
   * Expiration date of the personal access token. Must be at least 24 hours in the future.
   */
  "expiresAt": Date;
  /**
   * Name of the personal access token.
   */
  "name": string;
  /**
   * Array of scopes to grant the personal access token.
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
      required: true,
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
    return PersonalAccessTokenCreateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
