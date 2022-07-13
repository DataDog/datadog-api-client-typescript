/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UsageSpecifiedCustomReportsPage } from "./UsageSpecifiedCustomReportsPage";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The object containing document metadata.
 */
export class UsageSpecifiedCustomReportsMeta {
  /**
   * The object containing page total count for specified ID.
   */
  "page"?: UsageSpecifiedCustomReportsPage;

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
      type: "UsageSpecifiedCustomReportsPage",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return UsageSpecifiedCustomReportsMeta.attributeTypeMap;
  }

  public constructor() {}
}
