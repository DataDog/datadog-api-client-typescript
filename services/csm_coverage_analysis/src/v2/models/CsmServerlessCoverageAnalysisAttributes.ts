import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CsmCoverageAnalysis } from "./CsmCoverageAnalysis";

/**
 * CSM Serverless Resources Coverage Analysis attributes.
 */
export class CsmServerlessCoverageAnalysisAttributes {
  /**
   * CSM Coverage Analysis.
   */
  "cwsCoverage"?: CsmCoverageAnalysis;
  /**
   * The ID of your organization.
   */
  "orgId"?: number;
  /**
   * CSM Coverage Analysis.
   */
  "totalCoverage"?: CsmCoverageAnalysis;
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
    cwsCoverage: {
      baseName: "cws_coverage",
      type: "CsmCoverageAnalysis",
    },
    orgId: {
      baseName: "org_id",
      type: "number",
      format: "int64",
    },
    totalCoverage: {
      baseName: "total_coverage",
      type: "CsmCoverageAnalysis",
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
    return CsmServerlessCoverageAnalysisAttributes.attributeTypeMap;
  }

  public constructor() {}
}
