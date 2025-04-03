import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CsmHostsAndContainersCoverageAnalysisData } from "./CsmHostsAndContainersCoverageAnalysisData";

/**
 * CSM Hosts and Containers Coverage Analysis response.
 */
export class CsmHostsAndContainersCoverageAnalysisResponse {
  /**
   * CSM Hosts and Containers Coverage Analysis data.
   */
  "data"?: CsmHostsAndContainersCoverageAnalysisData;
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
      type: "CsmHostsAndContainersCoverageAnalysisData",
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
    return CsmHostsAndContainersCoverageAnalysisResponse.attributeTypeMap;
  }

  public constructor() {}
}
