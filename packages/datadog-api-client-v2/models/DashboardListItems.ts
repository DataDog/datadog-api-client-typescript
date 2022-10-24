/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DashboardListItem } from "./DashboardListItem";

import {
  AttributeTypeMap,
  UnparsedObject,
} from "../../datadog-api-client-common/util";

/**
 * Dashboards within a list.
 */
export class DashboardListItems {
  /**
   * List of dashboards in the dashboard list.
   */
  "dashboards": Array<DashboardListItem>;
  /**
   * Number of dashboards in the dashboard list.
   */
  "total"?: number;

  /**
   * @ignore
   */
  "unparsedObject"?: UnparsedObject;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    dashboards: {
      baseName: "dashboards",
      type: "Array<DashboardListItem>",
      required: true,
    },
    total: {
      baseName: "total",
      type: "number",
      format: "int64",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return DashboardListItems.attributeTypeMap;
  }

  public constructor() {}
}
