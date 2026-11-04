/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CommitmentsQueryDefinitionFormula } from "./CommitmentsQueryDefinitionFormula";
import { CommitmentsQueryDefinitionQuery } from "./CommitmentsQueryDefinitionQuery";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
