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
   * The notification status for the given rule type. `SUCCESS` means a matching event was found and the test notification was queued. `DEFAULT` means no matching event was found and a placeholder test notification was queued instead. `ERROR` means the test notification couldn't be built or queued. A queued notification can still fail to reach its target later, and this status doesn't report it.
   */
  "notificationStatus": NotificationRulePreviewNotificationStatus;
  /**
   * Security rule type which can be used in security rules.
   * Signal-based notification rules can filter signals based on rule types application_security, log_detection,
   * workload_security and signal_correlation.
   * Finding-based notification rules can filter findings based on rule types application_code_vulnerability,
   * application_library_vulnerability, attack_path, container_image_vulnerability, identity_risk, misconfiguration,
   * api_security, host_vulnerability, iac_misconfiguration, sast_vulnerability, secret_vulnerability, workload_activity,
   * sensitive_data and serverless_function_code_vulnerability.
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
