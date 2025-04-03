import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Core Web Vitals attached to a browser test step.
 */
export class SyntheticsCoreWebVitals {
  /**
   * Cumulative Layout Shift.
   */
  "cls"?: number;
  /**
   * Largest Contentful Paint in milliseconds.
   */
  "lcp"?: number;
  /**
   * URL attached to the metrics.
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
    cls: {
      baseName: "cls",
      type: "number",
      format: "double",
    },
    lcp: {
      baseName: "lcp",
      type: "number",
      format: "double",
    },
    url: {
      baseName: "url",
      type: "string",
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
    return SyntheticsCoreWebVitals.attributeTypeMap;
  }

  public constructor() {}
}
