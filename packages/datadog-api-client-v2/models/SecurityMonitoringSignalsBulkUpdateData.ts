/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityMonitoringSignalType } from "./SecurityMonitoringSignalType";
import { SecurityMonitoringSignalUpdateAttributes } from "./SecurityMonitoringSignalUpdateAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data for updating a single security signal in a bulk update operation.
 */
export class SecurityMonitoringSignalsBulkUpdateData {
  /**
   * Attributes for updating the triage state or assignee of a security signal.
   */
  "attributes": SecurityMonitoringSignalUpdateAttributes;
  /**
   * The unique ID of the security signal.
   */
  "id": string;
  /**
   * The type of event.
   */
  "type"?: SecurityMonitoringSignalType;

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
      type: "SecurityMonitoringSignalUpdateAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "SecurityMonitoringSignalType",
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
    return SecurityMonitoringSignalsBulkUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
