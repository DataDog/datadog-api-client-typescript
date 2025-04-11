import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SpansMetricCreateAttributes } from "./SpansMetricCreateAttributes";
import { SpansMetricType } from "./SpansMetricType";

/**
 * The new span-based metric properties.
 */
export class SpansMetricCreateData {
  /**
   * The object describing the Datadog span-based metric to create.
   */
  "attributes": SpansMetricCreateAttributes;
  /**
   * The name of the span-based metric.
   */
  "id": string;
  /**
   * The type of resource. The value should always be spans_metrics.
   */
  "type": SpansMetricType;
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
      type: "SpansMetricCreateAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "SpansMetricType",
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
    return SpansMetricCreateData.attributeTypeMap;
  }

  public constructor() {}
}
