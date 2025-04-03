import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ProcessSummaryAttributes } from "./ProcessSummaryAttributes";
import { ProcessSummaryType } from "./ProcessSummaryType";

/**
 * Process summary object.
 */
export class ProcessSummary {
  /**
   * Attributes for a process summary.
   */
  "attributes"?: ProcessSummaryAttributes;
  /**
   * Process ID.
   */
  "id"?: string;
  /**
   * Type of process summary.
   */
  "type"?: ProcessSummaryType;
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
    attributes: {
      baseName: "attributes",
      type: "ProcessSummaryAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "ProcessSummaryType",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ProcessSummary.attributeTypeMap;
  }

  public constructor() {}
}
