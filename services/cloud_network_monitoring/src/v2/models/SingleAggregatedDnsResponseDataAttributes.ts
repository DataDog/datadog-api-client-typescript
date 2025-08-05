import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SingleAggregatedDnsResponseDataAttributesGroupByItems } from "./SingleAggregatedDnsResponseDataAttributesGroupByItems";
import { SingleAggregatedDnsResponseDataAttributesMetricsItems } from "./SingleAggregatedDnsResponseDataAttributesMetricsItems";

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
      type: "{ [key: string]: any; }",
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
