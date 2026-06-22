import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CustomForecastUpsertRequestData } from "./CustomForecastUpsertRequestData";

/**
 * Request body to upsert (create or replace) the custom forecast for a budget.
 */
export class CustomForecastUpsertRequest {
  /**
   * Custom forecast resource wrapper in an upsert request.
   */
  "data": CustomForecastUpsertRequestData;
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
    data: {
      baseName: "data",
      type: "CustomForecastUpsertRequestData",
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
    return CustomForecastUpsertRequest.attributeTypeMap;
  }

  public constructor() {}
}
