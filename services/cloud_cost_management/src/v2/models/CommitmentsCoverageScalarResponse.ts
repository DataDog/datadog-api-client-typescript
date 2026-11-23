import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CommitmentsCoverageScalarResponseData } from "./CommitmentsCoverageScalarResponseData";

/**
 * Response containing scalar coverage metrics for cloud commitment programs.
 */
export class CommitmentsCoverageScalarResponse {
  /**
   * The scalar coverage resource.
   */
  "data": CommitmentsCoverageScalarResponseData;
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
      type: "CommitmentsCoverageScalarResponseData",
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
    return CommitmentsCoverageScalarResponse.attributeTypeMap;
  }

  public constructor() {}
}
