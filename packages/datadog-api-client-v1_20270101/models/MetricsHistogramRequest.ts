/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MetricsHistogramRequestQuery } from "./MetricsHistogramRequestQuery";
import { MetricsHistogramRequestRequestType } from "./MetricsHistogramRequestRequestType";
import { WidgetNumberFormat } from "./WidgetNumberFormat";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class MetricsHistogramRequest {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "numberFormat"?: WidgetNumberFormat;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "query": MetricsHistogramRequestQuery;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "requestType": MetricsHistogramRequestRequestType;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    numberFormat: {
      baseName: "number_format",
      type: "WidgetNumberFormat",
    },
    query: {
      baseName: "query",
      type: "MetricsHistogramRequestQuery",
      required: true,
    },
    requestType: {
      baseName: "request_type",
      type: "MetricsHistogramRequestRequestType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return MetricsHistogramRequest.attributeTypeMap;
  }

  public constructor() {}
}
