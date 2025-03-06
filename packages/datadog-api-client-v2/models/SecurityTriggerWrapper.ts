/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityTrigger } from "./SecurityTrigger";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Schema for a Security-based trigger.
 */
export class SecurityTriggerWrapper {
  /**
   * Trigger a workflow VIA a Security Signal or Finding. For automatic triggering a handle must be configured and the workflow must be published.
   */
  "securityTrigger": SecurityTrigger;
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
    securityTrigger: {
      baseName: "securityTrigger",
      type: "SecurityTrigger",
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
    return SecurityTriggerWrapper.attributeTypeMap;
  }

  public constructor() {}
}
