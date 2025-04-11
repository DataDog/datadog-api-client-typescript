import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Basic access authentication.
 */
export class CustomDestinationElasticsearchDestinationAuth {
  /**
   * The password of the authentication. This field is not returned by the API.
   */
  "password": string;
  /**
   * The username of the authentication. This field is not returned by the API.
   */
  "username": string;
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
    password: {
      baseName: "password",
      type: "string",
      required: true,
    },
    username: {
      baseName: "username",
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
    return CustomDestinationElasticsearchDestinationAuth.attributeTypeMap;
  }

  public constructor() {}
}
