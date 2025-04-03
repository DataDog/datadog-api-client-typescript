import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { HourlyUsagePagination } from "./HourlyUsagePagination";

/**
 * The object containing document metadata.
 */
export class HourlyUsageMetadata {
  /**
   * The metadata for the current pagination.
   */
  "pagination"?: HourlyUsagePagination;
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
      type: "HourlyUsagePagination",
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
    return HourlyUsageMetadata.attributeTypeMap;
  }

  public constructor() {}
}
