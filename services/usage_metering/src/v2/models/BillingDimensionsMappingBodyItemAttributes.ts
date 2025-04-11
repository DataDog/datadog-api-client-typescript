import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { BillingDimensionsMappingBodyItemAttributesEndpointsItems } from "./BillingDimensionsMappingBodyItemAttributesEndpointsItems";

/**
 * Mapping of billing dimensions to endpoint keys.
 */
export class BillingDimensionsMappingBodyItemAttributes {
  /**
   * List of supported endpoints with their keys mapped to the billing_dimension.
   */
  "endpoints"?: Array<BillingDimensionsMappingBodyItemAttributesEndpointsItems>;
  /**
   * Label used for the billing dimension in the Plan & Usage charts.
   */
  "inAppLabel"?: string;
  /**
   * Month in ISO-8601 format, UTC, and precise to the second: `[YYYY-MM-DDThh:mm:ss]`.
   */
  "timestamp"?: Date;
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
    endpoints: {
      baseName: "endpoints",
      type: "Array<BillingDimensionsMappingBodyItemAttributesEndpointsItems>",
    },
    inAppLabel: {
      baseName: "in_app_label",
      type: "string",
    },
    timestamp: {
      baseName: "timestamp",
      type: "Date",
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
    return BillingDimensionsMappingBodyItemAttributes.attributeTypeMap;
  }

  public constructor() {}
}
