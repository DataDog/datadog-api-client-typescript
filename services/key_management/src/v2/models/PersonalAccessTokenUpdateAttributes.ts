import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes used to update a personal access token.
 */
export class PersonalAccessTokenUpdateAttributes {
  /**
   * New name for the personal access token.
   */
  "name"?: string;
  /**
   * New array of scopes for the personal access token. If provided, this will
   * replace the existing scopes.
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
    name: {
      baseName: "name",
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
    return PersonalAccessTokenUpdateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
