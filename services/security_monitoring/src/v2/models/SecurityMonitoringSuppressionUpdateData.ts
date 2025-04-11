import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringSuppressionType } from "./SecurityMonitoringSuppressionType";
import { SecurityMonitoringSuppressionUpdateAttributes } from "./SecurityMonitoringSuppressionUpdateAttributes";

/**
 * The new suppression properties; partial updates are supported.
 */
export class SecurityMonitoringSuppressionUpdateData {
  /**
   * The suppression rule properties to be updated.
   */
  "attributes": SecurityMonitoringSuppressionUpdateAttributes;
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
      type: "SecurityMonitoringSuppressionUpdateAttributes",
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
    return SecurityMonitoringSuppressionUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
