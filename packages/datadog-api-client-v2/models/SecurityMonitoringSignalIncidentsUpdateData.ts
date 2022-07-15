/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityMonitoringSignalIncidentsUpdateAttributes } from "./SecurityMonitoringSignalIncidentsUpdateAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data containing the patch for changing the related incidents of a signal.
 */
export class SecurityMonitoringSignalIncidentsUpdateData {
  /**
   * Attributes describing the new list of related signals for a security signal.
   */
  "attributes": SecurityMonitoringSignalIncidentsUpdateAttributes;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    attributes: {
      baseName: "attributes",
      type: "SecurityMonitoringSignalIncidentsUpdateAttributes",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SecurityMonitoringSignalIncidentsUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
