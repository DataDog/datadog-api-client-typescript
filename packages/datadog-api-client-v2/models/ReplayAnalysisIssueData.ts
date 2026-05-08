/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ReplayAnalysisIssueDataAttributes } from "./ReplayAnalysisIssueDataAttributes";
import { ReplayAnalysisIssueDataType } from "./ReplayAnalysisIssueDataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data object representing a RUM replay analysis issue.
 */
export class ReplayAnalysisIssueData {
  /**
   * Attributes of a RUM replay analysis issue.
   */
  "attributes": ReplayAnalysisIssueDataAttributes;
  /**
   * Unique identifier of the issue.
   */
  "id": string;
  /**
   * RUM replay analysis issue resource type.
   */
  "type": ReplayAnalysisIssueDataType;

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
      type: "ReplayAnalysisIssueDataAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ReplayAnalysisIssueDataType",
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
    return ReplayAnalysisIssueData.attributeTypeMap;
  }

  public constructor() {}
}
