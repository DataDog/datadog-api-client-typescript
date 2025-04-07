import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CsmServerlessCoverageAnalysisData } from "./CsmServerlessCoverageAnalysisData";

/**
 * CSM Serverless Resources Coverage Analysis response.
 */
export class CsmServerlessCoverageAnalysisResponse {
  /**
   * CSM Serverless Resources Coverage Analysis data.
   */
  "data"?: CsmServerlessCoverageAnalysisData;
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
      type: "CsmServerlessCoverageAnalysisData",
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
    return CsmServerlessCoverageAnalysisResponse.attributeTypeMap;
  }

  public constructor() {}
}
