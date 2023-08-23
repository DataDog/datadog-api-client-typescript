/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ProcessSummaryAttributes } from "./ProcessSummaryAttributes";
import { ProcessSummaryType } from "./ProcessSummaryType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Process summary object.
 */
export class ProcessSummary {
  /**
   * Attributes for a process summary.
   */
  "attributes"?: ProcessSummaryAttributes;
  /**
   * Process ID.
   */
  "id"?: string;
  /**
   * Type of process summary.
   */
  "type"?: ProcessSummaryType;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    attributes: {
      type: "ProcessSummaryAttributes",
    },
    id: {
      type: "string",
    },
    type: {
      type: "ProcessSummaryType",
    },
  };
}
