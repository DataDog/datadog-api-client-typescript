/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DowntimeCreateRequestAttributes } from "./DowntimeCreateRequestAttributes";
import { DowntimeResourceType } from "./DowntimeResourceType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Object to create a downtime.
 */
export class DowntimeCreateRequestData {
  /**
   * Downtime details.
   */
  "attributes": DowntimeCreateRequestAttributes;
  /**
   * Downtime resource type.
   */
  "type": DowntimeResourceType;

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
      type: "DowntimeCreateRequestAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "DowntimeResourceType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return DowntimeCreateRequestData.attributeTypeMap;
  }

  public constructor() {}
}
