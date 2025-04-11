import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MonthlyUsageAttributionBody } from "./MonthlyUsageAttributionBody";
import { MonthlyUsageAttributionMetadata } from "./MonthlyUsageAttributionMetadata";

/**
 * Response containing the monthly Usage Summary by tag(s).
 */
export class MonthlyUsageAttributionResponse {
  /**
   * The object containing document metadata.
   */
  "metadata"?: MonthlyUsageAttributionMetadata;
  /**
   * Get usage summary by tag(s).
   */
  "usage"?: Array<MonthlyUsageAttributionBody>;
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
      type: "MonthlyUsageAttributionMetadata",
    },
    usage: {
      baseName: "usage",
      type: "Array<MonthlyUsageAttributionBody>",
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
    return MonthlyUsageAttributionResponse.attributeTypeMap;
  }

  public constructor() {}
}
