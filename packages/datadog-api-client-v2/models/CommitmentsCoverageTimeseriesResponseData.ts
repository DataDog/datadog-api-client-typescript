/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CommitmentsCoverageTimeseriesResponseAttributes } from "./CommitmentsCoverageTimeseriesResponseAttributes";
import { CommitmentsCoverageTimeseriesResponseType } from "./CommitmentsCoverageTimeseriesResponseType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The timeseries coverage resource.
 */
export class CommitmentsCoverageTimeseriesResponseData {
  /**
   * Attributes of a timeseries coverage response.
   */
  "attributes": CommitmentsCoverageTimeseriesResponseAttributes;
  /**
   * The identifier of the timeseries coverage response.
   */
  "id": string;
  /**
   * Type of the timeseries coverage response resource.
   */
  "type": CommitmentsCoverageTimeseriesResponseType;

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
      type: "CommitmentsCoverageTimeseriesResponseAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "CommitmentsCoverageTimeseriesResponseType",
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
    return CommitmentsCoverageTimeseriesResponseData.attributeTypeMap;
  }

  public constructor() {}
}
