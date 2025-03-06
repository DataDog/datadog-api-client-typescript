/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CaseTrigger } from "./CaseTrigger";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Schema for a Case-based trigger.
 */
export class CaseTriggerWrapper {
  /**
   * Trigger a workflow VIA a Case. For automatic triggering a handle must be configured and the workflow must be published.
   */
  "caseTrigger": CaseTrigger;
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
    caseTrigger: {
      baseName: "caseTrigger",
      type: "CaseTrigger",
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
    return CaseTriggerWrapper.attributeTypeMap;
  }

  public constructor() {}
}
