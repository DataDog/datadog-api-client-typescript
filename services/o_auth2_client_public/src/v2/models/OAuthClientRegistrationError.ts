import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Error payload returned by OAuth2 dynamic client registration as defined by RFC 7591.
 */
export class OAuthClientRegistrationError {
  /**
   * Single ASCII error code per RFC 7591, such as `invalid_request` or `invalid_client_metadata`.
   */
  "error": string;
  /**
   * Human-readable description of the error.
   */
  "errorDescription": string;
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
    error: {
      baseName: "error",
      type: "string",
      required: true,
    },
    errorDescription: {
      baseName: "error_description",
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
    return OAuthClientRegistrationError.attributeTypeMap;
  }

  public constructor() {}
}
