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
      type: "ProcessSummaryAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "ProcessSummaryType",
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
    return ProcessSummary.attributeTypeMap;
  }

  public constructor() {}
}
