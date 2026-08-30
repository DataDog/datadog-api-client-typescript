/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentPostmortemUpdatedTrigger } from "./IncidentPostmortemUpdatedTrigger";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Schema for an incident postmortem updated trigger.
 */
export class IncidentPostmortemUpdatedTriggerWrapper {
  /**
   * Trigger a workflow when a postmortem is updated for an incident.
   */
  "incidentPostmortemUpdatedTrigger": IncidentPostmortemUpdatedTrigger;
  /**
   * Names of existing workflow steps that run first after a trigger fires.
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
    incidentPostmortemUpdatedTrigger: {
      baseName: "incidentPostmortemUpdatedTrigger",
      type: "IncidentPostmortemUpdatedTrigger",
      required: true,
    },
    startStepNames: {
      baseName: "startStepNames",
      type: "Array<string>",
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
    return IncidentPostmortemUpdatedTriggerWrapper.attributeTypeMap;
  }

  public constructor() {}
}
