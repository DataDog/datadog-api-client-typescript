/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CommitmentsUtilizationTimeseriesResponseAttributes } from "./CommitmentsUtilizationTimeseriesResponseAttributes";
import { CommitmentsUtilizationTimeseriesResponseType } from "./CommitmentsUtilizationTimeseriesResponseType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
