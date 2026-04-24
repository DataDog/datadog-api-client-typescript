import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Element locator updates produced during a step.
 */
export class SyntheticsTestResultStepElementUpdates {
  /**
   * Updated multi-locator definition.
   */
  "multiLocator"?: { [key: string]: string };
  /**
   * Updated outer HTML of the targeted element.
   */
  "targetOuterHtml"?: string;
  /**
   * Version of the element locator definition.
   */
  "version"?: number;
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
    multiLocator: {
      baseName: "multi_locator",
      type: "{ [key: string]: string; }",
    },
    targetOuterHtml: {
      baseName: "target_outer_html",
      type: "string",
    },
    version: {
      baseName: "version",
      type: "number",
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
    return SyntheticsTestResultStepElementUpdates.attributeTypeMap;
  }

  public constructor() {}
}
