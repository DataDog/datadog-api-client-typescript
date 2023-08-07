/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UsageCICommittersDetailedAttributes } from "./UsageCICommittersDetailedAttributes";
import { UsageDataPointType } from "./UsageDataPointType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The response containing attributions for the specified org.
 */
export class UsageCICommittersDetailedHour {
  /**
   * The response containing CI Committers Detailed attributes for specified organization.
   */
  "attributes"?: UsageCICommittersDetailedAttributes;
  /**
   * A unique ID for the JSON API resource.
   */
  "id"?: string;
  /**
   * The type of shape of the data.
   */
  "type"?: UsageDataPointType;

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
      type: "UsageCICommittersDetailedAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "UsageDataPointType",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return UsageCICommittersDetailedHour.attributeTypeMap;
  }

  public constructor() {}
}
