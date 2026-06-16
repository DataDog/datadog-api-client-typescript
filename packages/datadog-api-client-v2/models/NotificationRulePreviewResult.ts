/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { NotificationRulePreviewNotificationStatus } from "./NotificationRulePreviewNotificationStatus";
import { RuleTypesItems } from "./RuleTypesItems";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The preview result for a single rule type.
 */
export class NotificationRulePreviewResult {
  /**
   * The notification status for the given rule type. `SUCCESS` means a matching event was found and the notification was sent successfully. `DEFAULT` means no matching event was found and a default placeholder notification was sent instead. `ERROR` means an error occurred while sending the notification.
   */
  "notificationStatus": NotificationRulePreviewNotificationStatus;
  /**
   * Security rule type which can be used in security rules.
   * Signal-based notification rules can filter signals based on rule types application_security, log_detection,
   * workload_security, signal_correlation, cloud_configuration and infrastructure_configuration.
   * Vulnerability-based notification rules can filter vulnerabilities based on rule types application_code_vulnerability,
   * application_library_vulnerability, attack_path, container_image_vulnerability, identity_risk, misconfiguration,
   * api_security, host_vulnerability, iac_misconfiguration, sast_vulnerability and secret_vulnerability.
   */
  "ruleType": RuleTypesItems;

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
    notificationStatus: {
      baseName: "notification_status",
      type: "NotificationRulePreviewNotificationStatus",
      required: true,
    },
    ruleType: {
      baseName: "rule_type",
      type: "RuleTypesItems",
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
    return NotificationRulePreviewResult.attributeTypeMap;
  }

  public constructor() {}
}
