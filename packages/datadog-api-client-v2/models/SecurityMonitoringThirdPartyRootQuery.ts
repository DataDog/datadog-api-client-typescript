/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A query to be combined with the third party case query.
 */
export class SecurityMonitoringThirdPartyRootQuery {
  /**
   * Fields to group by.
   */
  "groupByFields"?: Array<string>;
  /**
   * Query to run on logs.
   */
  "query"?: string;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    groupByFields: {
      baseName: "groupByFields",
      type: "Array<string>",
    },
    query: {
      baseName: "query",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SecurityMonitoringThirdPartyRootQuery.attributeTypeMap;
  }

  public constructor() {}
}
