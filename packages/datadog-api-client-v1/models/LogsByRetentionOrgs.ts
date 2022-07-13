/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LogsByRetentionOrgUsage } from "./LogsByRetentionOrgUsage";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Indexed logs usage summary for each organization for each retention period with usage.
 */
export class LogsByRetentionOrgs {
  /**
   * Indexed logs usage summary for each organization.
   */
  "usage"?: Array<LogsByRetentionOrgUsage>;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    usage: {
      baseName: "usage",
      type: "Array<LogsByRetentionOrgUsage>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return LogsByRetentionOrgs.attributeTypeMap;
  }

  public constructor() {}
}
