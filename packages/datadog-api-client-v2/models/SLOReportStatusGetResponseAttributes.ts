/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SLOReportStatus } from "./SLOReportStatus";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The attributes portion of the SLO report status response.
 */
export class SLOReportStatusGetResponseAttributes {
  /**
   * The status of the SLO report job.
   */
  "status"?: SLOReportStatus;

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
    status: {
      baseName: "status",
      type: "SLOReportStatus",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SLOReportStatusGetResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
