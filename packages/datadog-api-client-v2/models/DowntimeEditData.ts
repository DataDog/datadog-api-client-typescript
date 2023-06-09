/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DowntimeAttributeEditRequest } from "./DowntimeAttributeEditRequest";
import { DowntimeResourceType } from "./DowntimeResourceType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Object to update a downtime.
 */
export class DowntimeEditData {
  /**
   * Attributes of the downtime to update.
   */
  "attributes": DowntimeAttributeEditRequest;
  /**
   * ID of this downtime.
   */
  "id": string;
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
      type: "DowntimeAttributeEditRequest",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
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
    return DowntimeEditData.attributeTypeMap;
  }

  public constructor() {}
}
