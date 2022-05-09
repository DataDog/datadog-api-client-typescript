/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DashboardBulkActionData } from "./DashboardBulkActionData";

import { AttributeTypeMap } from "../util";

/**
 * Dashboard restore request body.
 */
export class DashboardRestoreRequest {
  /**
   * List of dashboard bulk action request data objects.
   */
  "data": Array<DashboardBulkActionData>;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    data: {
      baseName: "data",
      type: "Array<DashboardBulkActionData>",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return DashboardRestoreRequest.attributeTypeMap;
  }

  public constructor() {}
}
