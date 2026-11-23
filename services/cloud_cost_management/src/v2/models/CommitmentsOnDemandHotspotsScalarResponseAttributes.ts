import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CommitmentsQueryDefinition } from "./CommitmentsQueryDefinition";
import { CommitmentsScalarColumn } from "./CommitmentsScalarColumn";

/**
 * Attributes of a scalar on-demand hot-spots response.
 */
export class CommitmentsOnDemandHotspotsScalarResponseAttributes {
  /**
   * Array of scalar columns in the response.
   */
  "columns": Array<CommitmentsScalarColumn>;
  /**
   * The query that produces the response values, in the same format as dashboard and notebook widget
   * requests, so a client can graph the values in a widget. Each formula's `id` names the response value
   * that it produces.
   */
  "queryDefinition"?: CommitmentsQueryDefinition;
  /**
   * Array of scalar columns in the response.
   */
  "total": Array<CommitmentsScalarColumn>;
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
    queryDefinition: {
      baseName: "query_definition",
      type: "CommitmentsQueryDefinition",
    },
    total: {
      baseName: "total",
      type: "Array<CommitmentsScalarColumn>",
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
    return CommitmentsOnDemandHotspotsScalarResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
