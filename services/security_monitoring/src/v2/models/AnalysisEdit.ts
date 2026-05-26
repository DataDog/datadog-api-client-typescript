import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AnalysisEditType } from "./AnalysisEditType";
import { AnalysisPosition } from "./AnalysisPosition";

/**
 * A single edit operation within a fix suggestion for a rule violation.
 */
export class AnalysisEdit {
  /**
   * The content to insert or replace at the specified position, if applicable.
   */
  "content": string | null;
  /**
   * The type of code edit to apply when fixing a violation.
   */
  "editType": AnalysisEditType;
  /**
   * A position in source code, identified by line and column numbers.
   */
  "end": AnalysisPosition;
  /**
   * A position in source code, identified by line and column numbers.
   */
  "start": AnalysisPosition;
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
    content: {
      baseName: "content",
      type: "string",
      required: true,
    },
    editType: {
      baseName: "edit_type",
      type: "AnalysisEditType",
      required: true,
    },
    end: {
      baseName: "end",
      type: "AnalysisPosition",
      required: true,
    },
    start: {
      baseName: "start",
      type: "AnalysisPosition",
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
    return AnalysisEdit.attributeTypeMap;
  }

  public constructor() {}
}
