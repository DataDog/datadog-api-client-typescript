/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { WorkflowHeadlessExecutionConfig } from "./WorkflowHeadlessExecutionConfig";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

export class WorkflowHeadlessExecutionRequestAttributes {
  "config": WorkflowHeadlessExecutionConfig;
  /**
   * The ID of the workflow template to execute
   */
  "templateId": string;

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
    config: {
      baseName: "config",
      type: "WorkflowHeadlessExecutionConfig",
      required: true,
    },
    templateId: {
      baseName: "template_id",
      type: "string",
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
    return WorkflowHeadlessExecutionRequestAttributes.attributeTypeMap;
  }

  public constructor() {}
}
