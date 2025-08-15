/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CsmHostsAndContainersCoverageAnalysisData } from "./CsmHostsAndContainersCoverageAnalysisData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
      type: "{ [key: string]: any; }",
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
