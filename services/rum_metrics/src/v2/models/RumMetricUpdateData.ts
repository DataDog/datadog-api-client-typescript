import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RumMetricType } from "./RumMetricType";
import { RumMetricUpdateAttributes } from "./RumMetricUpdateAttributes";

/**
 * The RUM-based metric properties to update. `id` is required by the API and must match the `metric_id` path parameter.
 */
export class RumMetricUpdateData {
  /**
   * The RUM-based metric properties that will be updated. Omitted properties keep their current value.
   */
  "attributes": RumMetricUpdateAttributes;
  /**
   * The name of the RUM-based metric.
   * On creation, it must be 1 to 200 characters long, contain only ASCII letters, digits, underscores, and periods, start with a letter, and not start with `rum.measure` or `rum.investigate`.
   * It cannot be changed after creation.
   */
  "id"?: string;
  /**
   * The type of the resource. The value must be `rum_metrics`.
   */
  "type": RumMetricType;
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
      type: "RumMetricUpdateAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "RumMetricType",
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
    return RumMetricUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
