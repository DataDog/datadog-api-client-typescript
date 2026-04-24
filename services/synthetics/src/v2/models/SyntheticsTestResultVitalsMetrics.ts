import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Web vitals metrics captured during a browser test step.
 */
export class SyntheticsTestResultVitalsMetrics {
  /**
   * Cumulative Layout Shift score.
   */
  "cls"?: number;
  /**
   * First Contentful Paint in milliseconds.
   */
  "fcp"?: number;
  /**
   * Interaction to Next Paint in milliseconds.
   */
  "inp"?: number;
  /**
   * Largest Contentful Paint in milliseconds.
   */
  "lcp"?: number;
  /**
   * Time To First Byte in milliseconds.
   */
  "ttfb"?: number;
  /**
   * URL that produced the metrics.
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
    fcp: {
      baseName: "fcp",
      type: "number",
      format: "double",
    },
    inp: {
      baseName: "inp",
      type: "number",
      format: "double",
    },
    lcp: {
      baseName: "lcp",
      type: "number",
      format: "double",
    },
    ttfb: {
      baseName: "ttfb",
      type: "number",
      format: "double",
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
    return SyntheticsTestResultVitalsMetrics.attributeTypeMap;
  }

  public constructor() {}
}
