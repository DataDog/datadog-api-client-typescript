import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CommitmentsUtilizationTimeseriesResponseAttributes } from "./CommitmentsUtilizationTimeseriesResponseAttributes";
import { CommitmentsUtilizationTimeseriesResponseType } from "./CommitmentsUtilizationTimeseriesResponseType";

/**
 * The timeseries utilization resource.
 */
export class CommitmentsUtilizationTimeseriesResponseData {
  /**
   * Attributes of a timeseries utilization response.
   */
  "attributes": CommitmentsUtilizationTimeseriesResponseAttributes;
  /**
   * The identifier of the timeseries utilization response.
   */
  "id": string;
  /**
   * Type of the timeseries utilization response resource.
   */
  "type": CommitmentsUtilizationTimeseriesResponseType;
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
      type: "CommitmentsUtilizationTimeseriesResponseAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "CommitmentsUtilizationTimeseriesResponseType",
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
    return CommitmentsUtilizationTimeseriesResponseData.attributeTypeMap;
  }

  public constructor() {}
}
