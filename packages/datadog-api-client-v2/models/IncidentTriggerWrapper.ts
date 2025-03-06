/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentTrigger } from "./IncidentTrigger";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Schema for an Incident-based trigger.
 */
export class IncidentTriggerWrapper {
  /**
   * Trigger a workflow VIA an Incident. For automatic triggering a handle must be configured and the workflow must be published.
   */
  "incidentTrigger": IncidentTrigger;
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
    incidentTrigger: {
      baseName: "incidentTrigger",
      type: "IncidentTrigger",
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
    return IncidentTriggerWrapper.attributeTypeMap;
  }

  public constructor() {}
}
