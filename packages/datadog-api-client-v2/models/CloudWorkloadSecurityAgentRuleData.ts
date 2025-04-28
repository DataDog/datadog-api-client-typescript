/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CloudWorkloadSecurityAgentRuleAttributes } from "./CloudWorkloadSecurityAgentRuleAttributes";
import { CloudWorkloadSecurityAgentRuleType } from "./CloudWorkloadSecurityAgentRuleType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Object for a single Agent rule
 */
export class CloudWorkloadSecurityAgentRuleData {
  /**
   * A Cloud Workload Security Agent rule returned by the API
   */
  "attributes"?: CloudWorkloadSecurityAgentRuleAttributes;
  /**
   * The ID of the Agent rule
   */
  "id"?: string;
  /**
   * The type of the resource, must always be `agent_rule`
   */
  "type"?: CloudWorkloadSecurityAgentRuleType;

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
      type: "CloudWorkloadSecurityAgentRuleAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "CloudWorkloadSecurityAgentRuleType",
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
    return CloudWorkloadSecurityAgentRuleData.attributeTypeMap;
  }

  public constructor() {}
}
