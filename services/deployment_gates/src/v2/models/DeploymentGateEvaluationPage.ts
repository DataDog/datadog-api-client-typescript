import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Cursor pagination information.
 */
export class DeploymentGateEvaluationPage {
  /**
   * Opaque cursor for the next page. Absent on the final page.
   */
  "nextCursor"?: string;
  /**
   * Requested maximum number of resources in this page.
   */
  "size": number;
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
    nextCursor: {
      baseName: "next_cursor",
      type: "string",
    },
    size: {
      baseName: "size",
      type: "number",
      required: true,
      format: "int64",
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
    return DeploymentGateEvaluationPage.attributeTypeMap;
  }

  public constructor() {}
}
