/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityMonitoringSignalMetadataType } from "./SecurityMonitoringSignalMetadataType";
import { SecurityMonitoringSignalTriageAttributes } from "./SecurityMonitoringSignalTriageAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data containing the updated triage attributes of the signal.
 */
export class SecurityMonitoringSignalTriageUpdateData {
  /**
   * Attributes describing a triage state update operation over a security signal.
   */
  "attributes"?: SecurityMonitoringSignalTriageAttributes;
  /**
   * The unique ID of the security signal.
   */
  "id"?: string;
  /**
   * The type of event.
   */
  "type"?: SecurityMonitoringSignalMetadataType;

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
      type: "SecurityMonitoringSignalTriageAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "SecurityMonitoringSignalMetadataType",
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
    return SecurityMonitoringSignalTriageUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
