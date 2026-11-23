import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CommitmentsCoverageTimeseriesResponseAttributes } from "./CommitmentsCoverageTimeseriesResponseAttributes";
import { CommitmentsCoverageTimeseriesResponseType } from "./CommitmentsCoverageTimeseriesResponseType";

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
