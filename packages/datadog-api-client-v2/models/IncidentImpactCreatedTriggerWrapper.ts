/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentImpactCreatedTrigger } from "./IncidentImpactCreatedTrigger";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Schema for an incident impact created trigger.
 */
export class IncidentImpactCreatedTriggerWrapper {
  /**
   * Trigger a workflow when an impact is created for an incident.
   */
  "incidentImpactCreatedTrigger": IncidentImpactCreatedTrigger;
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
    incidentImpactCreatedTrigger: {
      baseName: "incidentImpactCreatedTrigger",
      type: "IncidentImpactCreatedTrigger",
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
    return IncidentImpactCreatedTriggerWrapper.attributeTypeMap;
  }

  public constructor() {}
}
