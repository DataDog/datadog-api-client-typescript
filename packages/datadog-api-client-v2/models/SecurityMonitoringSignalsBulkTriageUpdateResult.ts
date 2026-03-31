/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityMonitoringSignalsBulkTriageEvent } from "./SecurityMonitoringSignalsBulkTriageEvent";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The result payload of a bulk signal triage update.
 */
export class SecurityMonitoringSignalsBulkTriageUpdateResult {
  /**
   * The number of signals updated.
   */
  "count": number;
  /**
   * The list of updated signals.
   */
  "events": Array<SecurityMonitoringSignalsBulkTriageEvent>;

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
    count: {
      baseName: "count",
      type: "number",
      required: true,
      format: "int64",
    },
    events: {
      baseName: "events",
      type: "Array<SecurityMonitoringSignalsBulkTriageEvent>",
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
    return SecurityMonitoringSignalsBulkTriageUpdateResult.attributeTypeMap;
  }

  public constructor() {}
}
