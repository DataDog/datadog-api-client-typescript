import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CommitmentsQueryDefinition } from "./CommitmentsQueryDefinition";
import { CommitmentsScalarColumn } from "./CommitmentsScalarColumn";
import { CommitmentsUnusedCostMeta } from "./CommitmentsUnusedCostMeta";
import { CommitmentsUtilizationScalarProductBreakdownEntry } from "./CommitmentsUtilizationScalarProductBreakdownEntry";

/**
 * Attributes of a scalar utilization response.
 */
export class CommitmentsUtilizationScalarResponseAttributes {
  /**
   * Array of scalar columns in the response.
   */
  "columns": Array<CommitmentsScalarColumn>;
  /**
   * Metadata reporting that the cost data lacks the unused costs of some commitments, as with Azure exports
   * scoped below the billing profile. Utilization is then overstated, and realized savings and effective
   * savings rate are upper bounds. Omitted when the unused costs are available.
   */
  "meta"?: CommitmentsUnusedCostMeta;
  /**
   * Array of per-product utilization breakdown entries.
   */
  "productBreakdown"?: Array<CommitmentsUtilizationScalarProductBreakdownEntry>;
  /**
   * The query that produces the response values, in the same format as dashboard and notebook widget
   * requests, so a client can graph the values in a widget. Each formula's `id` names the response value
   * that it produces.
   */
  "queryDefinition"?: CommitmentsQueryDefinition;
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
    columns: {
      baseName: "columns",
      type: "Array<CommitmentsScalarColumn>",
      required: true,
    },
    meta: {
      baseName: "meta",
      type: "CommitmentsUnusedCostMeta",
    },
    productBreakdown: {
      baseName: "product_breakdown",
      type: "Array<CommitmentsUtilizationScalarProductBreakdownEntry>",
    },
    queryDefinition: {
      baseName: "query_definition",
      type: "CommitmentsQueryDefinition",
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
    return CommitmentsUtilizationScalarResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
