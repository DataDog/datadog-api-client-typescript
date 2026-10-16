import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DerivedMetricCreateData } from "./DerivedMetricCreateData";

/**
 * Request body for creating or updating a derived metric.
 */
export class DerivedMetricCreateRequest {
  /**
   * Data object for creating or updating a derived metric.
   */
  "data": DerivedMetricCreateData;
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
      type: "DerivedMetricCreateData",
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
    return DerivedMetricCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
