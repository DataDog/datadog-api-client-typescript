import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AssignmentResult } from "./AssignmentResult";

/**
 * Per-finding warnings and failures produced while processing the bulk assignee request.
 */
export class AssigneeResponseMeta {
  /**
   * Findings that could not be assigned or unassigned.
   */
  "failures"?: Array<AssignmentResult>;
  /**
   * Findings for which the assignment succeeded but a non-critical error occurred during processing.
   */
  "warnings"?: Array<AssignmentResult>;
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
    failures: {
      baseName: "failures",
      type: "Array<AssignmentResult>",
    },
    warnings: {
      baseName: "warnings",
      type: "Array<AssignmentResult>",
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
    return AssigneeResponseMeta.attributeTypeMap;
  }

  public constructor() {}
}
