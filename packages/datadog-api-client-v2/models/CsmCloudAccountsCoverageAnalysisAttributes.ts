/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CsmCoverageAnalysis } from "./CsmCoverageAnalysis";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




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
    "awsCoverage": {
      "baseName": "aws_coverage",
      "type": "CsmCoverageAnalysis",
    },
    "azureCoverage": {
      "baseName": "azure_coverage",
      "type": "CsmCoverageAnalysis",
    },
    "gcpCoverage": {
      "baseName": "gcp_coverage",
      "type": "CsmCoverageAnalysis",
    },
    "orgId": {
      "baseName": "org_id",
      "type": "number",
      "format": "int64",
    },
    "totalCoverage": {
      "baseName": "total_coverage",
      "type": "CsmCoverageAnalysis",
    },
    "additionalProperties": {
      "baseName": "additionalProperties",
      "type": "any",
    }
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {




    return CsmCloudAccountsCoverageAnalysisAttributes.attributeTypeMap;

  }

  public constructor() {











  }
}









