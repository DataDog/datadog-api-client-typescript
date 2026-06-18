import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes of a delegated token.
 */
export class DelegatedTokenAttributes {
  /**
   * A short-lived JWT representing the authenticated Datadog user. Pass this as a bearer token in subsequent API calls.
   */
  "accessToken": string;
  /**
   * The expiry time of the token.
   */
  "expires": Date;
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
    accessToken: {
      baseName: "access_token",
      type: "string",
      required: true,
    },
    expires: {
      baseName: "expires",
      type: "Date",
      required: true,
      format: "date-time",
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
    return DelegatedTokenAttributes.attributeTypeMap;
  }

  public constructor() {}
}
