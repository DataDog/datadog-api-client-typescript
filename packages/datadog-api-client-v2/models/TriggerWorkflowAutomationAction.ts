/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TriggerWorkflowAutomationActionType } from "./TriggerWorkflowAutomationActionType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Triggers a Workflow Automation.
 */
export class TriggerWorkflowAutomationAction {
  /**
   * The handle of the Workflow Automation to trigger.
   */
  "handle": string;
  /**
   * Indicates that the action triggers a Workflow Automation.
   */
  "type": TriggerWorkflowAutomationActionType;

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
    handle: {
      baseName: "handle",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "TriggerWorkflowAutomationActionType",
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
    return TriggerWorkflowAutomationAction.attributeTypeMap;
  }

  public constructor() {}
}
