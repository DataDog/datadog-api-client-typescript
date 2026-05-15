import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CommitmentsScalarColumn } from "./CommitmentsScalarColumn";

/**
 * Response containing scalar coverage metrics for cloud commitment programs.
 */
export class CommitmentsCoverageScalarResponse {
  /**
   * Array of scalar columns in the response.
   */
  "columns": Array<CommitmentsScalarColumn>;
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
    columns: {
      baseName: "columns",
      type: "Array<CommitmentsScalarColumn>",
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
