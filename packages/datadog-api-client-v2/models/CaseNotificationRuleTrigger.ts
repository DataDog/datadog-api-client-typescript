/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CaseNotificationRuleTriggerData } from "./CaseNotificationRuleTriggerData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Notification rule trigger
 */
export class CaseNotificationRuleTrigger {
  /**
   * Trigger data
   */
  "data"?: CaseNotificationRuleTriggerData;
  /**
   * Type of trigger (CASE_CREATED, STATUS_TRANSITIONED, ATTRIBUTE_VALUE_CHANGED, EVENT_CORRELATION_SIGNAL_CORRELATED)
   */
  "type"?: string;

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
    data: {
      baseName: "data",
      type: "CaseNotificationRuleTriggerData",
    },
    type: {
      baseName: "type",
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
    return CaseNotificationRuleTrigger.attributeTypeMap;
  }

  public constructor() {}
}
