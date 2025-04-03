import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringSuppression } from "./SecurityMonitoringSuppression";

/**
 * Response object containing a single suppression rule.
 */
export class SecurityMonitoringSuppressionResponse {
  /**
   * The suppression rule's properties.
   */
  "data"?: SecurityMonitoringSuppression;
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
      type: "SecurityMonitoringSuppression",
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
    return SecurityMonitoringSuppressionResponse.attributeTypeMap;
  }

  public constructor() {}
}
