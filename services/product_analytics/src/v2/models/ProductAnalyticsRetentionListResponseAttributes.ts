import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes of a retention list response, containing the matching entity rows.
 */
export class ProductAnalyticsRetentionListResponseAttributes {
  /**
   * The matching entity rows.
   */
  "records"?: Array<{ [key: string]: any }>;
  /**
   * The entity whose retention was measured.
   */
  "retentionEntity"?: string;
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
    records: {
      baseName: "records",
      type: "Array<{ [key: string]: any; }>",
    },
    retentionEntity: {
      baseName: "retention_entity",
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
    return ProductAnalyticsRetentionListResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
