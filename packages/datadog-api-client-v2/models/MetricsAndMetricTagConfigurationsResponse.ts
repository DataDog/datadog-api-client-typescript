/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MetricPaginationMeta } from "./MetricPaginationMeta";
import { MetricsAndMetricTagConfigurations } from "./MetricsAndMetricTagConfigurations";
import { MetricsListResponseLinks } from "./MetricsListResponseLinks";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Response object that includes metrics and metric tag configurations.
*/
export class MetricsAndMetricTagConfigurationsResponse {
  /**
   * Array of metrics and metric tag configurations.
  */
  "data"?: Array<MetricsAndMetricTagConfigurations>;
  /**
   * Pagination links. Only present if pagination query parameters were provided.
  */
  "links"?: MetricsListResponseLinks;
  /**
   * Response metadata object.
  */
  "meta"?: MetricPaginationMeta;

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
    "data": {
      "baseName": "data",
      "type": "Array<MetricsAndMetricTagConfigurations>",
    },
    "links": {
      "baseName": "links",
      "type": "MetricsListResponseLinks",
    },
    "meta": {
      "baseName": "meta",
      "type": "MetricPaginationMeta",
    },
    "additionalProperties": {
      "baseName": "additionalProperties",
      "type": "any",
    }
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {




    return MetricsAndMetricTagConfigurationsResponse.attributeTypeMap;

  }

  public constructor() {











  }
}









