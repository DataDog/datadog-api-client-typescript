/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityMonitoringContentPackIntegrationStatus } from "./SecurityMonitoringContentPackIntegrationStatus";
import { SecurityMonitoringContentPackOnboardingDetailsType } from "./SecurityMonitoringContentPackOnboardingDetailsType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Content pack details returned when Cloud SIEM is inactive for the requesting organization.
 */
export class SecurityMonitoringContentPackOnboardingDetails {
  /**
   * The installation status of the related integration.
   */
  "integrationInstalledStatus"?: SecurityMonitoringContentPackIntegrationStatus;
  /**
   * Whether logs for this content pack have been seen in any Datadog index in the last 72 hours.
   */
  "logsSeenFromAnyIndex": boolean;
  /**
   * Type for onboarding content pack details.
   */
  "type": SecurityMonitoringContentPackOnboardingDetailsType;

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
    integrationInstalledStatus: {
      baseName: "integration_installed_status",
      type: "SecurityMonitoringContentPackIntegrationStatus",
    },
    logsSeenFromAnyIndex: {
      baseName: "logs_seen_from_any_index",
      type: "boolean",
      required: true,
    },
    type: {
      baseName: "type",
      type: "SecurityMonitoringContentPackOnboardingDetailsType",
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
    return SecurityMonitoringContentPackOnboardingDetails.attributeTypeMap;
  }

  public constructor() {}
}
