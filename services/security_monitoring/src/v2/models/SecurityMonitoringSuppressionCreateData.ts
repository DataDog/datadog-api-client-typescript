import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringSuppressionCreateAttributes } from "./SecurityMonitoringSuppressionCreateAttributes";
import { SecurityMonitoringSuppressionType } from "./SecurityMonitoringSuppressionType";

/**
 * Object for a single suppression rule.
 */
export class SecurityMonitoringSuppressionCreateData {
  /**
   * Object containing the attributes of the suppression rule to be created.
   */
  "attributes": SecurityMonitoringSuppressionCreateAttributes;
  /**
   * The type of the resource. The value should always be `suppressions`.
   */
  "type": SecurityMonitoringSuppressionType;
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
      type: "SecurityMonitoringSuppressionCreateAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "SecurityMonitoringSuppressionType",
      required: true,
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
    return SecurityMonitoringSuppressionCreateData.attributeTypeMap;
  }

  public constructor() {}
}
