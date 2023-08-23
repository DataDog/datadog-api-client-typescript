/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DashboardListItemRequest } from "./DashboardListItemRequest";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Request containing a list of dashboards to add.
 */
export class DashboardListAddItemsRequest {
  /**
   * List of dashboards to add the dashboard list.
   */
  "dashboards"?: Array<DashboardListItemRequest>;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    dashboards: {
      baseName: "dashboards",
      type: "Array<DashboardListItemRequest>",
    },
  };
}
