/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MetricsDataSource } from "./MetricsDataSource";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * An individual timeseries metrics query.
 */
export class MetricsTimeseriesQuery {
  /**
   * A data source that is powered by the Metrics platform.
   */
  "dataSource": MetricsDataSource;
  /**
   * The variable name for use in formulas.
   */
  "name"?: string;
  /**
   * A classic metrics query string.
   */
  "query": string;

  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any };

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
      type: "MetricsDataSource",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
    },
    query: {
      baseName: "query",
      type: "string",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return MetricsTimeseriesQuery.attributeTypeMap;
  }

  public constructor() {}
}
