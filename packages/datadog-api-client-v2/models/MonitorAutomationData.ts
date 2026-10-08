/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MonitorAutomationAttributes } from "./MonitorAutomationAttributes";
import { MonitorAutomationType } from "./MonitorAutomationType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Automatic investigation configuration identified by monitor ID.
 */
export class MonitorAutomationData {
  /**
   * Automatic investigation settings for a monitor.
   */
  "attributes": MonitorAutomationAttributes;
  /**
   * The monitor ID.
   */
  "id": string;
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
    id: {
      baseName: "id",
      type: "string",
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
    return MonitorAutomationData.attributeTypeMap;
  }

  public constructor() {}
}
