import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CommitmentsSavingsTimeseriesResponseAttributes } from "./CommitmentsSavingsTimeseriesResponseAttributes";
import { CommitmentsSavingsTimeseriesResponseType } from "./CommitmentsSavingsTimeseriesResponseType";

/**
 * The timeseries savings resource.
 */
export class CommitmentsSavingsTimeseriesResponseData {
  /**
   * Attributes of a timeseries savings response.
   */
  "attributes": CommitmentsSavingsTimeseriesResponseAttributes;
  /**
   * The identifier of the timeseries savings response.
   */
  "id": string;
  /**
   * Type of the timeseries savings response resource.
   */
  "type": CommitmentsSavingsTimeseriesResponseType;
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
      type: "CommitmentsSavingsTimeseriesResponseAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "CommitmentsSavingsTimeseriesResponseType",
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
    return CommitmentsSavingsTimeseriesResponseData.attributeTypeMap;
  }

  public constructor() {}
}
