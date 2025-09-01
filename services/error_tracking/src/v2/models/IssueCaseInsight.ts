import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Insight of the case.
 */
export class IssueCaseInsight {
  /**
   * Reference of the insight.
   */
  "ref"?: string;
  /**
   * Insight identifier.
   */
  "resourceId"?: string;
  /**
   * Type of the insight.
   */
  "type"?: string;
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
    ref: {
      baseName: "ref",
      type: "string",
    },
    resourceId: {
      baseName: "resource_id",
      type: "string",
    },
    type: {
      baseName: "type",
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
    return IssueCaseInsight.attributeTypeMap;
  }

  public constructor() {}
}
