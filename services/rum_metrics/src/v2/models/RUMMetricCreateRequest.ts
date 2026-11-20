import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RUMMetricCreateData } from "./RUMMetricCreateData";

/**
 * The new RUM-based metric body.
 */
export class RUMMetricCreateRequest {
  /**
   * The new RUM-based metric properties.
   */
  "data": RUMMetricCreateData;
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
      type: "RUMMetricCreateData",
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
    return RUMMetricCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
