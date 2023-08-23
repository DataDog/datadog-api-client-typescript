/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UsageCustomReportsAttributes } from "./UsageCustomReportsAttributes";
import { UsageReportsType } from "./UsageReportsType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The response containing the date and type for custom reports.
 */
export class UsageCustomReportsData {
  /**
   * The response containing attributes for custom reports.
   */
  "attributes"?: UsageCustomReportsAttributes;
  /**
   * The date for specified custom reports.
   */
  "id"?: string;
  /**
   * The type of reports.
   */
  "type"?: UsageReportsType;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    attributes: {
      type: "UsageCustomReportsAttributes",
    },
    id: {
      type: "string",
    },
    type: {
      type: "UsageReportsType",
    },
  };
}
