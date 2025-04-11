import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringSignalAttributes } from "./SecurityMonitoringSignalAttributes";
import { SecurityMonitoringSignalType } from "./SecurityMonitoringSignalType";

/**
 * Object description of a security signal.
 */
export class SecurityMonitoringSignal {
  /**
   * The object containing all signal attributes and their
   * associated values.
   */
  "attributes"?: SecurityMonitoringSignalAttributes;
  /**
   * The unique ID of the security signal.
   */
  "id"?: string;
  /**
   * The type of event.
   */
  "type"?: SecurityMonitoringSignalType;
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
      type: "SecurityMonitoringSignalAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "SecurityMonitoringSignalType",
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
    return SecurityMonitoringSignal.attributeTypeMap;
  }

  public constructor() {}
}
