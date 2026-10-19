/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AgentHealthHostIssue } from "./AgentHealthHostIssue";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Active Agent Health issues for a resource.
 */
export class AgentHealthHostIssuesAttributes {
  /**
   * The active issues and their reconciliation metadata.
   */
  "issues": Array<AgentHealthHostIssue>;

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
    issues: {
      baseName: "issues",
      type: "Array<AgentHealthHostIssue>",
      required: true,
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
    return AgentHealthHostIssuesAttributes.attributeTypeMap;
  }

  public constructor() {}
}
