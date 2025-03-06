/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Schema for an App-based trigger.
 */
export class AppTriggerWrapper {
  /**
   * Trigger a workflow VIA an App.
   */
  "appTrigger": any;
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
    appTrigger: {
      baseName: "appTrigger",
      type: "any",
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
    return AppTriggerWrapper.attributeTypeMap;
  }

  public constructor() {}
}
