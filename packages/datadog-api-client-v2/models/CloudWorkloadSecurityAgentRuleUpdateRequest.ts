/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CloudWorkloadSecurityAgentRuleUpdateData } from "./CloudWorkloadSecurityAgentRuleUpdateData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Request object that includes the Agent rule with the attributes to update
 */
export class CloudWorkloadSecurityAgentRuleUpdateRequest {
  /**
   * Object for a single Agent rule
   */
  "data": CloudWorkloadSecurityAgentRuleUpdateData;

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
      type: "CloudWorkloadSecurityAgentRuleUpdateData",
      required: true,
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
    return CloudWorkloadSecurityAgentRuleUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
