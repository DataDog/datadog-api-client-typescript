import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RumMetricCreateData } from "./RumMetricCreateData";

/**
 * The new rum-based metric body.
 */
export class RumMetricCreateRequest {
  /**
   * The new rum-based metric properties.
   */
  "data": RumMetricCreateData;
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
      type: "RumMetricCreateData",
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
    return RumMetricCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
