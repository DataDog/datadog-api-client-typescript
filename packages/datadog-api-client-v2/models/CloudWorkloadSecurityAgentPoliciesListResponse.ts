/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CloudWorkloadSecurityAgentPolicyData } from "./CloudWorkloadSecurityAgentPolicyData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response object that includes a list of Agent policies
 */
export class CloudWorkloadSecurityAgentPoliciesListResponse {
  /**
   * A list of Agent policy objects
   */
  "data"?: Array<CloudWorkloadSecurityAgentPolicyData>;

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
      type: "Array<CloudWorkloadSecurityAgentPolicyData>",
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
    return CloudWorkloadSecurityAgentPoliciesListResponse.attributeTypeMap;
  }

  public constructor() {}
}
