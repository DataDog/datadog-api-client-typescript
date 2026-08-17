/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { PRCoverageSummaryRequestAttributes } from "./PRCoverageSummaryRequestAttributes";
import { PRCoverageSummaryRequestType } from "./PRCoverageSummaryRequestType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data object for PR summary request.
 */
export class PRCoverageSummaryRequestData {
  /**
   * Attributes for requesting code coverage summary for a pull request.
   */
  "attributes": PRCoverageSummaryRequestAttributes;
  /**
   * JSON:API type for PR coverage summary request. The value must always be `ci_app_coverage_pr_summary_request`.
   */
  "type": PRCoverageSummaryRequestType;

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
      type: "PRCoverageSummaryRequestAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "PRCoverageSummaryRequestType",
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
    return PRCoverageSummaryRequestData.attributeTypeMap;
  }

  public constructor() {}
}
