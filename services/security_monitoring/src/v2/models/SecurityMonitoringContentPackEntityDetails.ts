import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringContentPackActivation } from "./SecurityMonitoringContentPackActivation";
import { SecurityMonitoringContentPackEntityDetailsType } from "./SecurityMonitoringContentPackEntityDetailsType";

/**
 * Details for an entity or identity content pack.
 */
export class SecurityMonitoringContentPackEntityDetails {
  /**
   * The activation status of a content pack.
   */
  "cpActivation": SecurityMonitoringContentPackActivation;
  /**
   * Type for entity content pack details.
   */
  "type": SecurityMonitoringContentPackEntityDetailsType;
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
    cpActivation: {
      baseName: "cp_activation",
      type: "SecurityMonitoringContentPackActivation",
      required: true,
    },
    type: {
      baseName: "type",
      type: "SecurityMonitoringContentPackEntityDetailsType",
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
    return SecurityMonitoringContentPackEntityDetails.attributeTypeMap;
  }

  public constructor() {}
}
