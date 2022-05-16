/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MonitorSearchCountItem } from "./MonitorSearchCountItem";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The counts of monitor groups per different criteria.
 */
export class MonitorGroupSearchResponseCounts {
  /**
   * Search facets.
   */
  "status"?: Array<MonitorSearchCountItem>;
  /**
   * Search facets.
   */
  "type"?: Array<MonitorSearchCountItem>;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    status: {
      baseName: "status",
      type: "Array<MonitorSearchCountItem>",
    },
    type: {
      baseName: "type",
      type: "Array<MonitorSearchCountItem>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return MonitorGroupSearchResponseCounts.attributeTypeMap;
  }

  public constructor() {}
}
