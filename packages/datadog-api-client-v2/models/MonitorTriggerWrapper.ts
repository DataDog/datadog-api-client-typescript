/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MonitorTrigger } from "./MonitorTrigger";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Schema for a Monitor-based trigger.
 */
export class MonitorTriggerWrapper {
  /**
   * Trigger a workflow from a Monitor. For automatic triggering a handle must be configured and the workflow must be published.
   */
  "monitorTrigger": MonitorTrigger;
  /**
   * A list of steps that run first after a trigger fires.
   */
  "startStepNames"?: Array<string>;

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
    monitorTrigger: {
      baseName: "monitorTrigger",
      type: "MonitorTrigger",
      required: true,
    },
    startStepNames: {
      baseName: "startStepNames",
      type: "Array<string>",
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
    return MonitorTriggerWrapper.attributeTypeMap;
  }

  public constructor() {}
}
