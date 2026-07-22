import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CustomForecastType } from "./CustomForecastType";
import { CustomForecastUpsertRequestDataAttributes } from "./CustomForecastUpsertRequestDataAttributes";

/**
 * Custom forecast resource wrapper in an upsert request.
 */
export class CustomForecastUpsertRequestData {
  /**
   * Attributes of a custom forecast upsert request.
   */
  "attributes": CustomForecastUpsertRequestDataAttributes;
  /**
   * Unused on upsert; the resource is keyed by `budget_uid`. Send an empty string.
   */
  "id"?: string;
  /**
   * The type of the custom forecast resource. Must be `custom_forecast`.
   */
  "type": CustomForecastType;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any; };
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
      type: "CustomForecastUpsertRequestDataAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "CustomForecastType",
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
    return CustomForecastUpsertRequestData.attributeTypeMap;
  }

  public constructor() {}
}
