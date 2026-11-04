import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CommitmentsQueryDefinitionFormula } from "./CommitmentsQueryDefinitionFormula";
import { CommitmentsQueryDefinitionQuery } from "./CommitmentsQueryDefinitionQuery";

/**
 * The query that produces the response values, in the same format as dashboard and notebook widget
 * requests, so a client can graph the values in a widget. Each formula's `id` names the response value
 * that it produces.
 */
export class CommitmentsQueryDefinition {
  /**
   * The formulas of a query definition.
   */
  "formulas": Array<CommitmentsQueryDefinitionFormula>;
  /**
   * The metric queries of a query definition.
   */
  "queries": Array<CommitmentsQueryDefinitionQuery>;
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
    formulas: {
      baseName: "formulas",
      type: "Array<CommitmentsQueryDefinitionFormula>",
      required: true,
    },
    queries: {
      baseName: "queries",
      type: "Array<CommitmentsQueryDefinitionQuery>",
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
    return CommitmentsQueryDefinition.attributeTypeMap;
  }

  public constructor() {}
}
