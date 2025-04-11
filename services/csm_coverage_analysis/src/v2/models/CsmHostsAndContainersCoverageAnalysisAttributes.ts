import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CsmCoverageAnalysis } from "./CsmCoverageAnalysis";

/**
 * CSM Hosts and Containers Coverage Analysis attributes.
 */
export class CsmHostsAndContainersCoverageAnalysisAttributes {
  /**
   * CSM Coverage Analysis.
   */
  "cspmCoverage"?: CsmCoverageAnalysis;
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
   * CSM Coverage Analysis.
   */
  "vmCoverage"?: CsmCoverageAnalysis;
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
    cspmCoverage: {
      baseName: "cspm_coverage",
      type: "CsmCoverageAnalysis",
    },
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
    vmCoverage: {
      baseName: "vm_coverage",
      type: "CsmCoverageAnalysis",
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
    return CsmHostsAndContainersCoverageAnalysisAttributes.attributeTypeMap;
  }

  public constructor() {}
}
