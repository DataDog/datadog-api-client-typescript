import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CommitmentsQueryDefinition } from "./CommitmentsQueryDefinition";
import { CommitmentsUnit } from "./CommitmentsUnit";
import { CommitmentsUnusedCostMeta } from "./CommitmentsUnusedCostMeta";

/**
 * Attributes of a timeseries utilization response.
 */
export class CommitmentsUtilizationTimeseriesResponseAttributes {
  /**
   * Metadata reporting that the cost data lacks the unused costs of some commitments, as with Azure exports
   * scoped below the billing profile. Utilization is then overstated, and realized savings and effective
   * savings rate are upper bounds. Omitted when the unused costs are available.
   */
  "meta"?: CommitmentsUnusedCostMeta;
  /**
   * The query that produces the response values, in the same format as dashboard and notebook widget
   * requests, so a client can graph the values in a widget. Each formula's `id` names the response value
   * that it produces.
   */
  "queryDefinition"?: CommitmentsQueryDefinition;
  /**
   * Timeseries data as a map of series names to their corresponding value arrays.
   */
  "series": { [key: string]: Array<number> };
  /**
   * Unix timestamps in seconds for the timeseries data points.
   */
  "times": Array<number>;
  /**
   * Unit metadata for a numeric metric. Unset fields are omitted, and the unit is `null` when it is unknown.
   */
  "unit"?: CommitmentsUnit;
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
    meta: {
      baseName: "meta",
      type: "CommitmentsUnusedCostMeta",
    },
    queryDefinition: {
      baseName: "query_definition",
      type: "CommitmentsQueryDefinition",
    },
    series: {
      baseName: "series",
      type: "{ [key: string]: Array<number>; }",
      required: true,
    },
    times: {
      baseName: "times",
      type: "Array<number>",
      required: true,
      format: "int64",
    },
    unit: {
      baseName: "unit",
      type: "CommitmentsUnit",
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
    return CommitmentsUtilizationTimeseriesResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
