/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityMonitoringSignalInvestigationFeedbackMetric } from "./SecurityMonitoringSignalInvestigationFeedbackMetric";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A feedback section containing metrics.
 */
export class SecurityMonitoringSignalInvestigationFeedbackSection {
  /**
   * The section identifier.
   */
  "id": string;
  /**
   * Array of feedback metrics.
   */
  "metrics": Array<SecurityMonitoringSignalInvestigationFeedbackMetric>;
  /**
   * The section title.
   */
  "title": string;

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
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    metrics: {
      baseName: "metrics",
      type: "Array<SecurityMonitoringSignalInvestigationFeedbackMetric>",
      required: true,
    },
    title: {
      baseName: "title",
      type: "string",
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
    return SecurityMonitoringSignalInvestigationFeedbackSection.attributeTypeMap;
  }

  public constructor() {}
}
