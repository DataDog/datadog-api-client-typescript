/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityMonitoringSignalInvestigationRequestAttributes } from "./SecurityMonitoringSignalInvestigationRequestAttributes";
import { SecurityMonitoringSignalInvestigationType } from "./SecurityMonitoringSignalInvestigationType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data for creating a signal investigation.
 */
export class SecurityMonitoringSignalInvestigationRequestData {
  /**
   * Attributes for creating a signal investigation.
   */
  "attributes": SecurityMonitoringSignalInvestigationRequestAttributes;
  /**
   * The type of investigation signal.
   */
  "type": SecurityMonitoringSignalInvestigationType;

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
      type: "SecurityMonitoringSignalInvestigationRequestAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "SecurityMonitoringSignalInvestigationType",
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
    return SecurityMonitoringSignalInvestigationRequestData.attributeTypeMap;
  }

  public constructor() {}
}
