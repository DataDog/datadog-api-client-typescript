/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Additional configuration for the trigger, dependent on the trigger type. For `status_transitioned` triggers, specify `from_status_name` and `to_status_name`. For `attribute_value_changed` triggers, specify `field` and `change_type`.
 */
export class AutomationRuleTriggerData {
  /**
   * The approval outcome to match. Used with `case_review_approved` triggers.
   */
  "approvalType"?: string;
  /**
   * The kind of attribute change to match. Allowed values: `VALUE_ADDED`, `VALUE_DELETED`, `ANY_CHANGES`. Used with `attribute_value_changed` triggers.
   */
  "changeType"?: string;
  /**
   * The case attribute field name to monitor for changes. Used with `attribute_value_changed` triggers.
   */
  "field"?: string;
  /**
   * The originating status name. Used with `status_transitioned` triggers to match transitions from this status.
   */
  "fromStatusName"?: string;
  /**
   * The destination status name. Used with `status_transitioned` triggers to match transitions to this status.
   */
  "toStatusName"?: string;

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
    approvalType: {
      baseName: "approval_type",
      type: "string",
    },
    changeType: {
      baseName: "change_type",
      type: "string",
    },
    field: {
      baseName: "field",
      type: "string",
    },
    fromStatusName: {
      baseName: "from_status_name",
      type: "string",
    },
    toStatusName: {
      baseName: "to_status_name",
      type: "string",
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
    return AutomationRuleTriggerData.attributeTypeMap;
  }

  public constructor() {}
}
