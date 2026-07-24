import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityFilterFilteredDataType } from "./SecurityFilterFilteredDataType";
import { SecurityMonitoringContentPackActivation } from "./SecurityMonitoringContentPackActivation";
import { SecurityMonitoringContentPackIntegrationStatus } from "./SecurityMonitoringContentPackIntegrationStatus";
import { SecurityMonitoringContentPackTimestampBucket } from "./SecurityMonitoringContentPackTimestampBucket";

/**
 * Details for a logs-based content pack.
 */
export class SecurityMonitoringContentPackLogsDetails {
  /**
   * The activation status of a content pack.
   */
  "cpActivation": SecurityMonitoringContentPackActivation;
  /**
   * Timestamp bucket indicating when logs were last collected.
   */
  "dataLastSeen": SecurityMonitoringContentPackTimestampBucket;
  /**
   * Whether filters (Security Filters or Index Query depending on the pricing model) are
   * present and correctly configured to route logs into Cloud SIEM.
   */
  "filtersConfigured": boolean;
  /**
   * The installation status of the related integration.
   */
  "integrationInstalledStatus": SecurityMonitoringContentPackIntegrationStatus;
  /**
   * Whether logs for this content pack have been seen in any Datadog index in the last 72 hours.
   */
  "logsSeenFromAnyIndex": boolean;
  /**
   * Whether the Cloud SIEM index configuration is incorrect (only applies to certain pricing models).
   */
  "siemIndexIncorrect": boolean;
  /**
   * The filtered data type.
   */
  "type": SecurityFilterFilteredDataType;
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
    filtersConfigured: {
      baseName: "filters_configured",
      type: "boolean",
      required: true,
    },
    integrationInstalledStatus: {
      baseName: "integration_installed_status",
      type: "SecurityMonitoringContentPackIntegrationStatus",
      required: true,
    },
    logsSeenFromAnyIndex: {
      baseName: "logs_seen_from_any_index",
      type: "boolean",
      required: true,
    },
    siemIndexIncorrect: {
      baseName: "siem_index_incorrect",
      type: "boolean",
      required: true,
    },
    type: {
      baseName: "type",
      type: "SecurityFilterFilteredDataType",
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
    return SecurityMonitoringContentPackLogsDetails.attributeTypeMap;
  }

  public constructor() {}
}
