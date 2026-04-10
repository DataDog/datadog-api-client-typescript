/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MonitorAlertTriggerAttributes } from "./MonitorAlertTriggerAttributes";
import { TriggerType } from "./TriggerType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The trigger definition for starting an investigation.
 */
export class TriggerAttributes {
  /**
   * Attributes for a monitor alert trigger.
   */
  "monitorAlertTrigger": MonitorAlertTriggerAttributes;
  /**
   * The type of trigger for the investigation.
   */
  "type": TriggerType;

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
    monitorAlertTrigger: {
      baseName: "monitor_alert_trigger",
      type: "MonitorAlertTriggerAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "TriggerType",
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
    return TriggerAttributes.attributeTypeMap;
  }

  public constructor() {}
}
