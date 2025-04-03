import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { HourlyUsage } from "./HourlyUsage";
import { HourlyUsageMetadata } from "./HourlyUsageMetadata";

/**
 * Hourly usage response.
 */
export class HourlyUsageResponse {
  /**
   * Response containing hourly usage.
   */
  "data"?: Array<HourlyUsage>;
  /**
   * The object containing document metadata.
   */
  "meta"?: HourlyUsageMetadata;
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
    data: {
      baseName: "data",
      type: "Array<HourlyUsage>",
    },
    meta: {
      baseName: "meta",
      type: "HourlyUsageMetadata",
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
    return HourlyUsageResponse.attributeTypeMap;
  }

  public constructor() {}
}
