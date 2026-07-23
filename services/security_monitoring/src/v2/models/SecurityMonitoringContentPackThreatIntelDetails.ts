import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringContentPackActivation } from "./SecurityMonitoringContentPackActivation";
import { SecurityMonitoringContentPackIntegrationStatus } from "./SecurityMonitoringContentPackIntegrationStatus";
import { SecurityMonitoringContentPackThreatIntelDetailsType } from "./SecurityMonitoringContentPackThreatIntelDetailsType";
import { SecurityMonitoringContentPackTimestampBucket } from "./SecurityMonitoringContentPackTimestampBucket";

/**
 * Details for a threat intelligence content pack.
 */
export class SecurityMonitoringContentPackThreatIntelDetails {
  /**
   * The activation status of a content pack.
   */
  "cpActivation": SecurityMonitoringContentPackActivation;
  /**
   * Timestamp bucket indicating when logs were last collected.
   */
  "dataLastSeen": SecurityMonitoringContentPackTimestampBucket;
  /**
   * The installation status of the related integration.
   */
  "integrationInstalledStatus": SecurityMonitoringContentPackIntegrationStatus;
  /**
   * Type for threat intelligence content pack details.
   */
  "type": SecurityMonitoringContentPackThreatIntelDetailsType;
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
    dataLastSeen: {
      baseName: "data_last_seen",
      type: "SecurityMonitoringContentPackTimestampBucket",
      required: true,
    },
    integrationInstalledStatus: {
      baseName: "integration_installed_status",
      type: "SecurityMonitoringContentPackIntegrationStatus",
      required: true,
    },
    type: {
      baseName: "type",
      type: "SecurityMonitoringContentPackThreatIntelDetailsType",
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
    return SecurityMonitoringContentPackThreatIntelDetails.attributeTypeMap;
  }

  public constructor() {}
}
