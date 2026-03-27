import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Object describing a single text diff operation.
 */
export class SyntheticsTestVersionDiffPatchDiff {
  /**
   * The text that was changed.
   */
  "changeText"?: string;
  /**
   * The diff operation applied.
   */
  "operation"?: string;
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
    changeText: {
      baseName: "change_text",
      type: "string",
    },
    operation: {
      baseName: "operation",
      type: "string",
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
    return SyntheticsTestVersionDiffPatchDiff.attributeTypeMap;
  }

  public constructor() {}
}
