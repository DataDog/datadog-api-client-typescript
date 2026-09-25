/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MonitorAlertTriggerAttributes } from "./MonitorAlertTriggerAttributes";
import { MonitorAlertTriggerType } from "./MonitorAlertTriggerType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A trigger created from a monitor alert.
 */
export class MonitorAlertTrigger {
  /**
   * Attributes for a monitor alert trigger.
   */
  "monitorAlertTrigger": MonitorAlertTriggerAttributes;
  /**
   * The type of monitor alert trigger.
   */
  "type": MonitorAlertTriggerType;

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
      type: "MonitorAlertTriggerType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return MonitorAlertTrigger.attributeTypeMap;
  }

  public constructor() {}
}
