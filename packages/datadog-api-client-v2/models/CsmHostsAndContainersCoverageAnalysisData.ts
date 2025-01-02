/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CsmHostsAndContainersCoverageAnalysisAttributes } from "./CsmHostsAndContainersCoverageAnalysisAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * CSM Hosts and Containers Coverage Analysis data.
 */
export class CsmHostsAndContainersCoverageAnalysisData {
  /**
   * CSM Hosts and Containers Coverage Analysis attributes.
   */
  "attributes"?: CsmHostsAndContainersCoverageAnalysisAttributes;
  /**
   * The ID of your organization.
   */
  "id"?: string;
  /**
   * The type of the resource. The value should always be `get_hosts_and_containers_coverage_analysis_response_public_v0`.
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
      type: "CsmHostsAndContainersCoverageAnalysisAttributes",
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
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CsmHostsAndContainersCoverageAnalysisData.attributeTypeMap;
  }

  public constructor() {}
}
