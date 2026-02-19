import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * A filter within a journey query node.
 */
export class RumStaticSegmentJourneyFilter {
  /**
   * The attribute to filter on.
   */
  "attribute": string;
  /**
   * The value to match.
   */
  "value": string;
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
    attribute: {
      baseName: "attribute",
      type: "string",
      required: true,
    },
    value: {
      baseName: "value",
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
    return RumStaticSegmentJourneyFilter.attributeTypeMap;
  }

  public constructor() {}
}
