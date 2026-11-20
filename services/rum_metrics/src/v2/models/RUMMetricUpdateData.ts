import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RUMMetricType } from "./RUMMetricType";
import { RUMMetricUpdateAttributes } from "./RUMMetricUpdateAttributes";

/**
 * The RUM-based metric properties to update. `id` is required by the API and must match the `metric_id` path parameter.
 */
export class RUMMetricUpdateData {
  /**
   * The RUM-based metric properties to update. Omitted properties keep their current value.
   */
  "attributes": RUMMetricUpdateAttributes;
  /**
   * The name of the RUM-based metric.
   * On creation, it must be 1 to 200 characters long, contain only ASCII letters, digits, underscores, and periods, start with a letter, and not start with `rum.measure` or `rum.investigate`.
   * It cannot be changed after creation.
   */
  "id"?: string;
  /**
   * The type of the resource. The value must be `rum_metrics`.
   */
  "type": RUMMetricType;
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
      type: "RUMMetricUpdateAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "RUMMetricType",
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
    return RUMMetricUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
