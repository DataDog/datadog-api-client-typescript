import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringContentPackStateAttributes } from "./SecurityMonitoringContentPackStateAttributes";
import { SecurityMonitoringContentPackStateType } from "./SecurityMonitoringContentPackStateType";

/**
 * Content pack state data.
 */
export class SecurityMonitoringContentPackStateData {
  /**
   * Attributes of a content pack state
   */
  "attributes": SecurityMonitoringContentPackStateAttributes;
  /**
   * The content pack identifier.
   */
  "id": string;
  /**
   * Type for content pack state object
   */
  "type": SecurityMonitoringContentPackStateType;
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
      type: "SecurityMonitoringContentPackStateAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "SecurityMonitoringContentPackStateType",
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
    return SecurityMonitoringContentPackStateData.attributeTypeMap;
  }

  public constructor() {}
}
