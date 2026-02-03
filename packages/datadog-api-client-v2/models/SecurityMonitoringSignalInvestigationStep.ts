/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityMonitoringSignalInvestigationStepOutput } from "./SecurityMonitoringSignalInvestigationStepOutput";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Information about an investigation step.
 */
export class SecurityMonitoringSignalInvestigationStep {
  /**
   * Array of step outputs.
   */
  "stepOutputs": Array<SecurityMonitoringSignalInvestigationStepOutput>;

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
    stepOutputs: {
      baseName: "stepOutputs",
      type: "Array<SecurityMonitoringSignalInvestigationStepOutput>",
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
    return SecurityMonitoringSignalInvestigationStep.attributeTypeMap;
  }

  public constructor() {}
}
