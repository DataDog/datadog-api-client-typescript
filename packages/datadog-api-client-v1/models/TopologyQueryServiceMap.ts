/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TopologyQueryServiceMapDataSource } from "./TopologyQueryServiceMapDataSource";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Query to the service map topology data source.
 */
export class TopologyQueryServiceMap {
  /**
   * Name of the data source.
   */
  "dataSource": TopologyQueryServiceMapDataSource;
  /**
   * Your environment and primary tag (or * if enabled for your account).
   */
  "filters": Array<string>;
  /**
   * A search string for filtering services. When set, this replaces the `service` field.
   */
  "queryString"?: string;
  /**
   * (deprecated) Name of the service. Leave this empty and use query_string instead.
   */
  "service": string;

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
      type: "TopologyQueryServiceMapDataSource",
      required: true,
    },
    filters: {
      baseName: "filters",
      type: "Array<string>",
      required: true,
    },
    queryString: {
      baseName: "query_string",
      type: "string",
    },
    service: {
      baseName: "service",
      type: "string",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return TopologyQueryServiceMap.attributeTypeMap;
  }

  public constructor() {}
}
