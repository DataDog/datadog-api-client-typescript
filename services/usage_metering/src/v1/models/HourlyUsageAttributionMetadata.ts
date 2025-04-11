import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { HourlyUsageAttributionPagination } from "./HourlyUsageAttributionPagination";

/**
 * The object containing document metadata.
 */
export class HourlyUsageAttributionMetadata {
  /**
   * The metadata for the current pagination.
   */
  "pagination"?: HourlyUsageAttributionPagination;
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
    pagination: {
      baseName: "pagination",
      type: "HourlyUsageAttributionPagination",
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
    return HourlyUsageAttributionMetadata.attributeTypeMap;
  }

  public constructor() {}
}
