/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Schema for a Workflow-based trigger.
 */
export class WorkflowTriggerWrapper {
  /**
   * A list of steps that run first after a trigger fires.
   */
  "startStepNames"?: Array<string>;
  /**
   * Trigger a workflow VIA the Datadog UI. Only required if no other trigger exists.
   */
  "workflowTrigger": any;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    startStepNames: {
      baseName: "startStepNames",
      type: "Array<string>",
    },
    workflowTrigger: {
      baseName: "workflowTrigger",
      type: "any",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return WorkflowTriggerWrapper.attributeTypeMap;
  }

  public constructor() {}
}
