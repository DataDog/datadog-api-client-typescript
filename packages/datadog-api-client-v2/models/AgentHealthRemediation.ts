/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AgentHealthRemediationScript } from "./AgentHealthRemediationScript";
import { AgentHealthRemediationStep } from "./AgentHealthRemediationStep";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Remediation for the issue. Omitted when no remediation is available.
 */
export class AgentHealthRemediation {
  /**
   * A script that can be used to remediate the issue.
   */
  "script"?: AgentHealthRemediationScript;
  /**
   * Steps to remediate the issue.
   */
  "steps"?: Array<AgentHealthRemediationStep>;
  /**
   * A summary of how to remediate the issue.
   */
  "summary"?: string;

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
    script: {
      baseName: "script",
      type: "AgentHealthRemediationScript",
    },
    steps: {
      baseName: "steps",
      type: "Array<AgentHealthRemediationStep>",
    },
    summary: {
      baseName: "summary",
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
    return AgentHealthRemediation.attributeTypeMap;
  }

  public constructor() {}
}
