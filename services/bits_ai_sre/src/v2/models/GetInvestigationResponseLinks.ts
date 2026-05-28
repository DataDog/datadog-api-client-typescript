import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Links related to the investigation.
 */
export class GetInvestigationResponseLinks {
  /**
   * The URL to the investigation in the Datadog app.
   */
  "self": string;
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
    self: {
      baseName: "self",
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
    return GetInvestigationResponseLinks.attributeTypeMap;
  }

  public constructor() {}
}
