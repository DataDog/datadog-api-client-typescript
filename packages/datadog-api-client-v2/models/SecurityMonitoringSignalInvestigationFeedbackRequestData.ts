/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityMonitoringSignalInvestigationFeedbackRequestAttributes } from "./SecurityMonitoringSignalInvestigationFeedbackRequestAttributes";
import { SecurityMonitoringSignalInvestigationFeedbackType } from "./SecurityMonitoringSignalInvestigationFeedbackType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data for submitting investigation feedback.
 */
export class SecurityMonitoringSignalInvestigationFeedbackRequestData {
  /**
   * Attributes for investigation feedback.
   */
  "attributes": SecurityMonitoringSignalInvestigationFeedbackRequestAttributes;
  /**
   * The type of feedback.
   */
  "type": SecurityMonitoringSignalInvestigationFeedbackType;

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
    attributes: {
      baseName: "attributes",
      type: "SecurityMonitoringSignalInvestigationFeedbackRequestAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "SecurityMonitoringSignalInvestigationFeedbackType",
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
    return SecurityMonitoringSignalInvestigationFeedbackRequestData.attributeTypeMap;
  }

  public constructor() {}
}
