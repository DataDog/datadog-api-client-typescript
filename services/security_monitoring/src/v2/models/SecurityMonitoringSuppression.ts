import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringSuppressionAttributes } from "./SecurityMonitoringSuppressionAttributes";
import { SecurityMonitoringSuppressionType } from "./SecurityMonitoringSuppressionType";

/**
 * The suppression rule's properties.
 */
export class SecurityMonitoringSuppression {
  /**
   * The attributes of the suppression rule.
   */
  "attributes"?: SecurityMonitoringSuppressionAttributes;
  /**
   * The ID of the suppression rule.
   */
  "id"?: string;
  /**
   * The type of the resource. The value should always be `suppressions`.
   */
  "type"?: SecurityMonitoringSuppressionType;
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
    attributes: {
      baseName: "attributes",
      type: "SecurityMonitoringSuppressionAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "SecurityMonitoringSuppressionType",
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
    return SecurityMonitoringSuppression.attributeTypeMap;
  }

  public constructor() {}
}
