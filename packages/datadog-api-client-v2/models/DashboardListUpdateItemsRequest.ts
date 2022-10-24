/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DashboardListItemRequest } from "./DashboardListItemRequest";

import {
  AttributeTypeMap,
  UnparsedObject,
} from "../../datadog-api-client-common/util";

/**
 * Request containing the list of dashboards to update to.
 */
export class DashboardListUpdateItemsRequest {
  /**
   * List of dashboards to update the dashboard list to.
   */
  "dashboards"?: Array<DashboardListItemRequest>;

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
      type: "Array<DashboardListItemRequest>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return DashboardListUpdateItemsRequest.attributeTypeMap;
  }

  public constructor() {}
}
