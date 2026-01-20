import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringSuppression } from "./SecurityMonitoringSuppression";
import { SecurityMonitoringSuppressionsMeta } from "./SecurityMonitoringSuppressionsMeta";

/**
 * Response object containing the available suppression rules with pagination metadata.
 */
export class SecurityMonitoringPaginatedSuppressionsResponse {
  /**
   * A list of suppressions objects.
   */
  "data"?: Array<SecurityMonitoringSuppression>;
  /**
   * Metadata for the suppression list response.
   */
  "meta"?: SecurityMonitoringSuppressionsMeta;
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
      type: "Array<SecurityMonitoringSuppression>",
    },
    meta: {
      baseName: "meta",
      type: "SecurityMonitoringSuppressionsMeta",
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
    return SecurityMonitoringPaginatedSuppressionsResponse.attributeTypeMap;
  }

  public constructor() {}
}
