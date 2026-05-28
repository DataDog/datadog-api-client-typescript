import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FormulaAndFunctionQueryDefinition } from "./FormulaAndFunctionQueryDefinition";
import { HostMapWidgetFormula } from "./HostMapWidgetFormula";
import { HostMapWidgetScalarRequestResponseFormat } from "./HostMapWidgetScalarRequestResponseFormat";

/**
 * Scalar formula request for the infrastructure host map widget. Each formula specifies
 * which visual dimension it drives.
 */
export class HostMapWidgetScalarRequest {
  /**
   * List of formulas that operate on queries, each assigned to a visual dimension.
   */
  "formulas": Array<HostMapWidgetFormula>;
  /**
   * List of queries that can be returned directly or used in formulas.
   */
  "queries": Array<FormulaAndFunctionQueryDefinition>;
  /**
   * Response format for the scalar formula request. Only `scalar` is supported.
   */
  "responseFormat": HostMapWidgetScalarRequestResponseFormat;
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
      type: "Array<HostMapWidgetFormula>",
      required: true,
    },
    queries: {
      baseName: "queries",
      type: "Array<FormulaAndFunctionQueryDefinition>",
      required: true,
    },
    responseFormat: {
      baseName: "response_format",
      type: "HostMapWidgetScalarRequestResponseFormat",
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
    return HostMapWidgetScalarRequest.attributeTypeMap;
  }

  public constructor() {}
}
