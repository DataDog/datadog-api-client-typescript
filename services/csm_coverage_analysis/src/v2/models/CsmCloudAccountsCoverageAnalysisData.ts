import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CsmCloudAccountsCoverageAnalysisAttributes } from "./CsmCloudAccountsCoverageAnalysisAttributes";

/**
 * CSM Cloud Accounts Coverage Analysis data.
 */
export class CsmCloudAccountsCoverageAnalysisData {
  /**
   * CSM Cloud Accounts Coverage Analysis attributes.
   */
  "attributes"?: CsmCloudAccountsCoverageAnalysisAttributes;
  /**
   * The ID of your organization.
   */
  "id"?: string;
  /**
   * The type of the resource. The value should always be `get_cloud_accounts_coverage_analysis_response_public_v0`.
   */
  "type"?: string;
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
      type: "CsmCloudAccountsCoverageAnalysisAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "string",
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
    return CsmCloudAccountsCoverageAnalysisData.attributeTypeMap;
  }

  public constructor() {}
}
