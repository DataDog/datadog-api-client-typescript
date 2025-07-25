/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DowntimeIncludedMonitorType } from "./DowntimeIncludedMonitorType";
import { DowntimeMonitorIncludedAttributes } from "./DowntimeMonitorIncludedAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Information about the monitor identified by the downtime.
 */
export class DowntimeMonitorIncludedItem {
  /**
   * Attributes of the monitor identified by the downtime.
   */
  "attributes"?: DowntimeMonitorIncludedAttributes;
  /**
   * ID of the monitor identified by the downtime.
   */
  "id"?: number;
  /**
   * Monitor resource type.
   */
  "type"?: DowntimeIncludedMonitorType;

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
      type: "DowntimeMonitorIncludedAttributes",
    },
    id: {
      baseName: "id",
      type: "number",
      format: "int64",
    },
    type: {
      baseName: "type",
      type: "DowntimeIncludedMonitorType",
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
    return DowntimeMonitorIncludedItem.attributeTypeMap;
  }

  public constructor() {}
}
