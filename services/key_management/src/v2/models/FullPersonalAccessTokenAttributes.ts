import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes of a full personal access token, including the token key.
 */
export class FullPersonalAccessTokenAttributes {
  /**
   * Creation date of the personal access token.
   */
  "createdAt"?: Date;
  /**
   * Expiration date of the personal access token.
   */
  "expiresAt"?: Date;
  /**
   * The personal access token key. Only returned upon creation.
   */
  "key"?: string;
  /**
   * Name of the personal access token.
   */
  "name"?: string;
  /**
   * The public portion of the personal access token.
   */
  "publicPortion"?: string;
  /**
   * Array of scopes granted to the personal access token.
   */
  "scopes"?: Array<string>;
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
      format: "date-time",
    },
    expiresAt: {
      baseName: "expires_at",
      type: "Date",
      format: "date-time",
    },
    key: {
      baseName: "key",
      type: "string",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    publicPortion: {
      baseName: "public_portion",
      type: "string",
    },
    scopes: {
      baseName: "scopes",
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
    return FullPersonalAccessTokenAttributes.attributeTypeMap;
  }

  public constructor() {}
}
