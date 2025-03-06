/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { APITrigger } from "./APITrigger";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Schema for an API-based trigger.
 */
export class APITriggerWrapper {
  /**
   * Trigger a workflow VIA an API. The workflow must be published.
   */
  "apiTrigger": APITrigger;
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
    apiTrigger: {
      baseName: "apiTrigger",
      type: "APITrigger",
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
    return APITriggerWrapper.attributeTypeMap;
  }

  public constructor() {}
}
