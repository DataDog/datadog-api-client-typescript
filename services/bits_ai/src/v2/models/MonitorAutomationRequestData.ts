import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MonitorAutomationAttributes } from "./MonitorAutomationAttributes";
import { MonitorAutomationType } from "./MonitorAutomationType";

/**
 * The automatic investigation settings to apply.
 */
export class MonitorAutomationRequestData {
  /**
   * Automatic investigation settings for a monitor.
   */
  "attributes": MonitorAutomationAttributes;
  /**
   * The resource type for monitor automation settings.
   */
  "type": MonitorAutomationType;
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
    attributes: {
      baseName: "attributes",
      type: "MonitorAutomationAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "MonitorAutomationType",
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
    return MonitorAutomationRequestData.attributeTypeMap;
  }

  public constructor() {}
}
