/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CloudWorkloadSecurityAgentRuleData } from "./CloudWorkloadSecurityAgentRuleData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response object that includes a list of Agent rule.
 */
export class CloudWorkloadSecurityAgentRulesListResponse {
  /**
   * A list of Agent rules objects.
   */
  "data"?: Array<CloudWorkloadSecurityAgentRuleData>;

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
      type: "Array<CloudWorkloadSecurityAgentRuleData>",
    },
  };
}
