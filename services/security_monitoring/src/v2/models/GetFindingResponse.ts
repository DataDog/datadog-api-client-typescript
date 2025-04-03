import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DetailedFinding } from "./DetailedFinding";

/**
 * The expected response schema when getting a finding.
 */
export class GetFindingResponse {
  /**
   * A single finding with with message and resource configuration.
   */
  "data": DetailedFinding;
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
      type: "DetailedFinding",
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
    return GetFindingResponse.attributeTypeMap;
  }

  public constructor() {}
}
