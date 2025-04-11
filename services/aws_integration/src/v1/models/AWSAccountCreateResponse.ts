import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The Response returned by the AWS Create Account call.
 */
export class AWSAccountCreateResponse {
  /**
   * AWS external_id.
   */
  "externalId"?: string;
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
    externalId: {
      baseName: "external_id",
      type: "string",
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
    return AWSAccountCreateResponse.attributeTypeMap;
  }

  public constructor() {}
}
