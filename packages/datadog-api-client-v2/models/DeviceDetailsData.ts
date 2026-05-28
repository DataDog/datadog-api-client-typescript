/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DeviceDetailsDataAttributes } from "./DeviceDetailsDataAttributes";
import { DeviceDetailsDataType } from "./DeviceDetailsDataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A single device entry with full attribute detail.
 */
export class DeviceDetailsData {
  /**
   * Extended set of attributes for a single End User Device Monitoring device,
   * including detailed network and battery metrics.
   */
  "attributes"?: DeviceDetailsDataAttributes;
  /**
   * Unique identifier of the device. Matches the Datadog host identifier.
   */
  "id": string;
  /**
   * Devices resource type.
   */
  "type": DeviceDetailsDataType;

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
      type: "DeviceDetailsDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "DeviceDetailsDataType",
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
    return DeviceDetailsData.attributeTypeMap;
  }

  public constructor() {}
}
