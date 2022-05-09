/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CloudWorkloadSecurityAgentRuleUpdateData } from "./CloudWorkloadSecurityAgentRuleUpdateData";

import { AttributeTypeMap } from "../util";

/**
 * Request object that includes the Agent rule with the attributes to update.
 */
export class CloudWorkloadSecurityAgentRuleUpdateRequest {
  /**
   * Object for a single Agent rule.
   */
  "data": CloudWorkloadSecurityAgentRuleUpdateData;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    data: {
      baseName: "data",
      type: "CloudWorkloadSecurityAgentRuleUpdateData",
      required: true,
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
