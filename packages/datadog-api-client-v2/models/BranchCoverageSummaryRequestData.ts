/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { BranchCoverageSummaryRequestAttributes } from "./BranchCoverageSummaryRequestAttributes";
import { BranchCoverageSummaryRequestType } from "./BranchCoverageSummaryRequestType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data object for branch summary request.
 */
export class BranchCoverageSummaryRequestData {
  /**
   * Attributes for requesting code coverage summary for a branch.
   */
  "attributes": BranchCoverageSummaryRequestAttributes;
  /**
   * JSON:API type for branch coverage summary request. The value must always be `ci_app_coverage_branch_summary_request`.
   */
  "type": BranchCoverageSummaryRequestType;

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
      type: "BranchCoverageSummaryRequestAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "BranchCoverageSummaryRequestType",
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
    return BranchCoverageSummaryRequestData.attributeTypeMap;
  }

  public constructor() {}
}
