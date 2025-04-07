import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Links attributes.
 */
export class SpansListResponseLinks {
  /**
   * Link for the next set of results. Note that the request can also be made using the
   * POST endpoint.
   */
  "next"?: string;
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
    next: {
      baseName: "next",
      type: "string",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SpansListResponseLinks.attributeTypeMap;
  }

  public constructor() {}
}
