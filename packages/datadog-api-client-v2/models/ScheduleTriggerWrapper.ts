/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ScheduleTrigger } from "./ScheduleTrigger";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Schema for a Schedule-based trigger.
 */
export class ScheduleTriggerWrapper {
  /**
   * Trigger a workflow VIA a Schedule. The workflow must be published.
   */
  "scheduleTrigger": ScheduleTrigger;
  /**
   * A list of steps that run first after a trigger fires.
   */
  "startStepNames"?: Array<string>;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    scheduleTrigger: {
      baseName: "scheduleTrigger",
      type: "ScheduleTrigger",
      required: true,
    },
    startStepNames: {
      baseName: "startStepNames",
      type: "Array<string>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ScheduleTriggerWrapper.attributeTypeMap;
  }

  public constructor() {}
}
