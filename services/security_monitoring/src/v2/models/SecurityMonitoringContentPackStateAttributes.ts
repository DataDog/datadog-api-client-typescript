import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringContentPackStateDetails } from "./SecurityMonitoringContentPackStateDetails";
import { SecurityMonitoringContentPackStatus } from "./SecurityMonitoringContentPackStatus";

/**
 * Attributes of a content pack state.
 */
export class SecurityMonitoringContentPackStateAttributes {
  /**
   * Type-specific details for a content pack state. The set of fields present depends
   * on the content pack's `type`. When Cloud SIEM is inactive for the requesting organization, `onboarding` is returned instead of the content pack's usual type, such as `logs` or `vulnerability`.`
   */
  "details": SecurityMonitoringContentPackStateDetails;
  /**
   * The current operational status of a content pack.
   */
  "status": SecurityMonitoringContentPackStatus;
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
    details: {
      baseName: "details",
      type: "SecurityMonitoringContentPackStateDetails",
      required: true,
    },
    status: {
      baseName: "status",
      type: "SecurityMonitoringContentPackStatus",
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
    return SecurityMonitoringContentPackStateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
