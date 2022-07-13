/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DashboardSummaryDefinition } from "./DashboardSummaryDefinition";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Dashboard summary response.
 */
export class DashboardSummary {
  /**
   * List of dashboard definitions.
   */
  "dashboards"?: Array<DashboardSummaryDefinition>;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    dashboards: {
      baseName: "dashboards",
      type: "Array<DashboardSummaryDefinition>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return DashboardSummary.attributeTypeMap;
  }

  public constructor() {}
}
