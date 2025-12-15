import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * An insight of the case.
 */
export class CaseInsightsItems {
  /**
   * Reference of the insight.
   */
  "ref"?: string;
  /**
   * Unique identifier of the resource. For example, the unique identifier of a security finding.
   */
  "resourceId"?: string;
  /**
   * Type of the resource. For example, the type of a security finding is "SECURITY_FINDING".
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
    return CaseInsightsItems.attributeTypeMap;
  }

  public constructor() {}
}
