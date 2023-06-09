/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DowntimeResponseData } from "./DowntimeResponseData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A downtime data.
 */
export class DowntimeListItemResponse {
  /**
   * Downtime data.
   */
  "data"?: DowntimeResponseData;

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
      type: "DowntimeResponseData",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return DowntimeListItemResponse.attributeTypeMap;
  }

  public constructor() {}
}
