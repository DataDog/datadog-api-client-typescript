import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Information about a browser tab involved in a step.
 */
export class SyntheticsTestResultTab {
  /**
   * Whether the tab was focused during the step.
   */
  "focused"?: boolean;
  /**
   * Title of the tab.
   */
  "title"?: string;
  /**
   * URL loaded in the tab.
   */
  "url"?: string;
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
    focused: {
      baseName: "focused",
      type: "boolean",
    },
    title: {
      baseName: "title",
      type: "string",
    },
    url: {
      baseName: "url",
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
    return SyntheticsTestResultTab.attributeTypeMap;
  }

  public constructor() {}
}
