/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityMonitoringSignalMetadataType } from "./SecurityMonitoringSignalMetadataType";
import { SecurityMonitoringSignalStateUpdateAttributes } from "./SecurityMonitoringSignalStateUpdateAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data containing the patch for changing the state of a signal.
 */
export class SecurityMonitoringSignalStateUpdateData {
  /**
   * Attributes describing the change of state of a security signal.
   */
  "attributes": SecurityMonitoringSignalStateUpdateAttributes;
  /**
   * The unique ID of the security signal.
   */
  "id"?: any;
  /**
   * The type of event.
   */
  "type"?: SecurityMonitoringSignalMetadataType;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    attributes: {
      type: "SecurityMonitoringSignalStateUpdateAttributes",
      required: true,
    },
    id: {
      type: "any",
    },
    type: {
      type: "SecurityMonitoringSignalMetadataType",
    },
  };
}
