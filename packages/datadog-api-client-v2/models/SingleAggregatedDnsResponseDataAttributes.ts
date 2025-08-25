/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SingleAggregatedDnsResponseDataAttributesGroupByItems } from "./SingleAggregatedDnsResponseDataAttributesGroupByItems";
import { SingleAggregatedDnsResponseDataAttributesMetricsItems } from "./SingleAggregatedDnsResponseDataAttributesMetricsItems";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes for an aggregated DNS flow.
 */
export class SingleAggregatedDnsResponseDataAttributes {
  /**
   * The key, value pairs for each group by.
   */
  "groupBys"?: Array<SingleAggregatedDnsResponseDataAttributesGroupByItems>;
  /**
   * Metrics associated with an aggregated DNS flow.
   */
  "metrics"?: Array<SingleAggregatedDnsResponseDataAttributesMetricsItems>;

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
    groupBys: {
      baseName: "group_bys",
      type: "Array<SingleAggregatedDnsResponseDataAttributesGroupByItems>",
    },
    metrics: {
      baseName: "metrics",
      type: "Array<SingleAggregatedDnsResponseDataAttributesMetricsItems>",
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
    return SingleAggregatedDnsResponseDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
