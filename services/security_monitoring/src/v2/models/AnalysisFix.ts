import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AnalysisEdit } from "./AnalysisEdit";

/**
 * A fix suggestion for a rule violation, consisting of one or more edit operations.
 */
export class AnalysisFix {
  /**
   * A human-readable description of what the fix does.
   */
  "description": string;
  /**
   * The list of edit operations that constitute the fix.
   */
  "edits": Array<AnalysisEdit>;
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
    description: {
      baseName: "description",
      type: "string",
      required: true,
    },
    edits: {
      baseName: "edits",
      type: "Array<AnalysisEdit>",
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
    return AnalysisFix.attributeTypeMap;
  }

  public constructor() {}
}
