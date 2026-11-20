/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { NetworkDevicesDataSourceName } from "./NetworkDevicesDataSourceName";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class GeomapBackendPointsRequestAnyOfAnyOfItemQuery {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "dataSource": NetworkDevicesDataSourceName;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "queryString": string;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    dataSource: {
      baseName: "data_source",
      type: "NetworkDevicesDataSourceName",
      required: true,
    },
    queryString: {
      baseName: "query_string",
      type: "string",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return GeomapBackendPointsRequestAnyOfAnyOfItemQuery.attributeTypeMap;
  }

  public constructor() {}
}
