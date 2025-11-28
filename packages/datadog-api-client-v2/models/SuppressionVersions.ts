/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityMonitoringSuppressionAttributes } from "./SecurityMonitoringSuppressionAttributes";
import { VersionHistoryUpdate } from "./VersionHistoryUpdate";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A suppression version with a list of updates.
 */
export class SuppressionVersions {
  /**
   * A list of changes.
   */
  "changes"?: Array<VersionHistoryUpdate>;
  /**
   * The attributes of the suppression rule.
   */
  "suppression"?: SecurityMonitoringSuppressionAttributes;

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
    changes: {
      baseName: "changes",
      type: "Array<VersionHistoryUpdate>",
    },
    suppression: {
      baseName: "suppression",
      type: "SecurityMonitoringSuppressionAttributes",
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
    return SuppressionVersions.attributeTypeMap;
  }

  public constructor() {}
}
