import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes of a personal access token.
 */
export class PersonalAccessTokenAttributes {
  /**
   * Creation timestamp of the personal access token.
   */
  "createdAt": Date;
  /**
   * Expiration timestamp of the personal access token.
   */
  "expiresAt": Date;
  /**
   * Last modification timestamp of the personal access token.
   */
  "modifiedAt"?: Date;
  /**
   * Name of the personal access token.
   */
  "name": string;
  /**
   * Array of scopes granted to the personal access token. These define what
   * permissions the token has.
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
    createdAt: {
      baseName: "created_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    expiresAt: {
      baseName: "expires_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    modifiedAt: {
      baseName: "modified_at",
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
    return PersonalAccessTokenAttributes.attributeTypeMap;
  }

  public constructor() {}
}
