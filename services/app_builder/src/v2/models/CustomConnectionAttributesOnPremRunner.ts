import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Information about the Private Action Runner used by the custom connection, if the custom connection is associated with a Private Action Runner.
 */
export class CustomConnectionAttributesOnPremRunner {
  /**
   * The Private Action Runner ID.
   */
  "id"?: string;
  /**
   * The URL of the Private Action Runner.
   */
  "url"?: string;
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
    id: {
      baseName: "id",
      type: "string",
    },
    url: {
      baseName: "url",
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
    return CustomConnectionAttributesOnPremRunner.attributeTypeMap;
  }

  public constructor() {}
}
