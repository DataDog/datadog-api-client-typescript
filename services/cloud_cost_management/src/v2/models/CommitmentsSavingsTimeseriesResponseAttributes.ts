import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CommitmentsQueryDefinition } from "./CommitmentsQueryDefinition";
import { CommitmentsTimeseriesMetric } from "./CommitmentsTimeseriesMetric";
import { CommitmentsUnusedCostMeta } from "./CommitmentsUnusedCostMeta";

/**
 * Attributes of a timeseries savings response.
 */
export class CommitmentsSavingsTimeseriesResponseAttributes {
  /**
   * A timeseries metric containing timestamps, series values, and optional unit metadata.
   */
  "actualCost": CommitmentsTimeseriesMetric;
  /**
   * A timeseries metric containing timestamps, series values, and optional unit metadata.
   */
  "effectiveSavingsRate": CommitmentsTimeseriesMetric;
  /**
   * Metadata reporting that the cost data lacks the unused costs of some commitments, as with Azure exports
   * scoped below the billing profile. Utilization is then overstated, and realized savings and effective
   * savings rate are upper bounds. Omitted when the unused costs are available.
   */
  "meta"?: CommitmentsUnusedCostMeta;
  /**
   * A timeseries metric containing timestamps, series values, and optional unit metadata.
   */
  "onDemandEquivalentCost": CommitmentsTimeseriesMetric;
  /**
   * The query that produces the response values, in the same format as dashboard and notebook widget
   * requests, so a client can graph the values in a widget. Each formula's `id` names the response value
   * that it produces.
   */
  "queryDefinition"?: CommitmentsQueryDefinition;
  /**
   * A timeseries metric containing timestamps, series values, and optional unit metadata.
   */
  "realizedSavings": CommitmentsTimeseriesMetric;
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
    actualCost: {
      baseName: "actual_cost",
      type: "CommitmentsTimeseriesMetric",
      required: true,
    },
    effectiveSavingsRate: {
      baseName: "effective_savings_rate",
      type: "CommitmentsTimeseriesMetric",
      required: true,
    },
    meta: {
      baseName: "meta",
      type: "CommitmentsUnusedCostMeta",
    },
    onDemandEquivalentCost: {
      baseName: "on_demand_equivalent_cost",
      type: "CommitmentsTimeseriesMetric",
      required: true,
    },
    queryDefinition: {
      baseName: "query_definition",
      type: "CommitmentsQueryDefinition",
    },
    realizedSavings: {
      baseName: "realized_savings",
      type: "CommitmentsTimeseriesMetric",
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
    return CommitmentsSavingsTimeseriesResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
