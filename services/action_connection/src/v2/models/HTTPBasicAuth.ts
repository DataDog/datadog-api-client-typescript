import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { HTTPBasicAuthType } from "./HTTPBasicAuthType";

/**
 * The definition of the `HTTPBasicAuth` object.
 */
export class HTTPBasicAuth {
  /**
   * Password used for authentication. Saved in a secret store
   */
  "password": string;
  /**
   * The definition of the `HTTPBasicAuth` object.
   */
  "type": HTTPBasicAuthType;
  /**
   * Username used for authentication.
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
    type: {
      baseName: "type",
      type: "HTTPBasicAuthType",
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
    return HTTPBasicAuth.attributeTypeMap;
  }

  public constructor() {}
}
