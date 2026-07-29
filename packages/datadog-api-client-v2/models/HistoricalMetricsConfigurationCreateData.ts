/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { HistoricalMetricsConfigurationType } from "./HistoricalMetricsConfigurationType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data object for enabling historical metrics ingestion for a metric.
 */
export class HistoricalMetricsConfigurationCreateData {
  /**
   * The metric name, used as the resource ID.
   */
  "id": string;
  /**
   * The historical metrics configuration resource type.
   */
  "type": HistoricalMetricsConfigurationType;

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
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "HistoricalMetricsConfigurationType",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return HistoricalMetricsConfigurationCreateData.attributeTypeMap;
  }

  public constructor() {}
}
