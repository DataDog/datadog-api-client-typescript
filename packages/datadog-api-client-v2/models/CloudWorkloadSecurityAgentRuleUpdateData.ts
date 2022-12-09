/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CloudWorkloadSecurityAgentRuleType } from "./CloudWorkloadSecurityAgentRuleType";
import { CloudWorkloadSecurityAgentRuleUpdateAttributes } from "./CloudWorkloadSecurityAgentRuleUpdateAttributes";

import {
  AttributeTypeMap,
  UnparsedObject,
} from "../../datadog-api-client-common/util";

/**
 * Object for a single Agent rule.
 */
export class CloudWorkloadSecurityAgentRuleUpdateData {
  /**
   * Update an existing Cloud Workload Security Agent rule.
   */
  "attributes": CloudWorkloadSecurityAgentRuleUpdateAttributes;
  /**
   * The type of the resource. The value should always be `agent_rule`.
   */
  "type": CloudWorkloadSecurityAgentRuleType;

  /**
   * @ignore
   */
  "unparsedObject"?: UnparsedObject;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    attributes: {
      baseName: "attributes",
      type: "CloudWorkloadSecurityAgentRuleUpdateAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "CloudWorkloadSecurityAgentRuleType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CloudWorkloadSecurityAgentRuleUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
