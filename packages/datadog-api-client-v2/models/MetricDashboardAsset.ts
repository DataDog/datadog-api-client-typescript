/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MetricDashboardAttributes } from "./MetricDashboardAttributes";
import { MetricDashboardType } from "./MetricDashboardType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A dashboard object with title and popularity.
 */
export class MetricDashboardAsset {
  /**
   * Attributes related to the dashboard, including title, popularity, and url.
   */
  "attributes"?: MetricDashboardAttributes;
  /**
   * The related dashboard's ID.
   */
  "id": string;
  /**
   * Dashboard resource type.
   */
  "type": MetricDashboardType;

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
    attributes: {
      baseName: "attributes",
      type: "MetricDashboardAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "MetricDashboardType",
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
    return MetricDashboardAsset.attributeTypeMap;
  }

  public constructor() {}
}
