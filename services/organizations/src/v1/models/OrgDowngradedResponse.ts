import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Status of downgrade
 */
export class OrgDowngradedResponse {
  /**
   * Information pertaining to the downgraded child organization.
   */
  "message"?: string;
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
    message: {
      baseName: "message",
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
    return OrgDowngradedResponse.attributeTypeMap;
  }

  public constructor() {}
}
