import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SpansMetricCreateData } from "./SpansMetricCreateData";

/**
 * The new span-based metric body.
 */
export class SpansMetricCreateRequest {
  /**
   * The new span-based metric properties.
   */
  "data": SpansMetricCreateData;
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
      type: "SpansMetricCreateData",
      required: true,
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
    return SpansMetricCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
