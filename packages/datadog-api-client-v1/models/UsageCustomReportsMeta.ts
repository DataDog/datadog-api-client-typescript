/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UsageCustomReportsPage } from "./UsageCustomReportsPage";

import { AttributeTypeMap } from "../util";

/**
 * The object containing document metadata.
 */
export class UsageCustomReportsMeta {
  /**
   * The object containing page total count.
   */
  "page"?: UsageCustomReportsPage;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    page: {
      baseName: "page",
      type: "UsageCustomReportsPage",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return UsageCustomReportsMeta.attributeTypeMap;
  }

  public constructor() {}
}
