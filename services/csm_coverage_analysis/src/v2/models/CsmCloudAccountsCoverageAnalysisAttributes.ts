import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CsmCoverageAnalysis } from "./CsmCoverageAnalysis";

/**
 * CSM Cloud Accounts Coverage Analysis attributes.
 */
export class CsmCloudAccountsCoverageAnalysisAttributes {
  /**
   * CSM Coverage Analysis.
   */
  "awsCoverage"?: CsmCoverageAnalysis;
  /**
   * CSM Coverage Analysis.
   */
  "azureCoverage"?: CsmCoverageAnalysis;
  /**
   * CSM Coverage Analysis.
   */
  "gcpCoverage"?: CsmCoverageAnalysis;
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
    awsCoverage: {
      baseName: "aws_coverage",
      type: "CsmCoverageAnalysis",
    },
    azureCoverage: {
      baseName: "azure_coverage",
      type: "CsmCoverageAnalysis",
    },
    gcpCoverage: {
      baseName: "gcp_coverage",
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
    return CsmCloudAccountsCoverageAnalysisAttributes.attributeTypeMap;
  }

  public constructor() {}
}
