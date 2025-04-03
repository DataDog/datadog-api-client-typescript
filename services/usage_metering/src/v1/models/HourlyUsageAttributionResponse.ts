import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { HourlyUsageAttributionBody } from "./HourlyUsageAttributionBody";
import { HourlyUsageAttributionMetadata } from "./HourlyUsageAttributionMetadata";

/**
 * Response containing the hourly usage attribution by tag(s).
 */
export class HourlyUsageAttributionResponse {
  /**
   * The object containing document metadata.
   */
  "metadata"?: HourlyUsageAttributionMetadata;
  /**
   * Get the hourly usage attribution by tag(s).
   */
  "usage"?: Array<HourlyUsageAttributionBody>;
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
    metadata: {
      baseName: "metadata",
      type: "HourlyUsageAttributionMetadata",
    },
    usage: {
      baseName: "usage",
      type: "Array<HourlyUsageAttributionBody>",
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
    return HourlyUsageAttributionResponse.attributeTypeMap;
  }

  public constructor() {}
}
