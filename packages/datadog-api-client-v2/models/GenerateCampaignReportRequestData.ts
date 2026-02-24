/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { GenerateCampaignReportRequestAttributes } from "./GenerateCampaignReportRequestAttributes";
import { GenerateCampaignReportRequestDataType } from "./GenerateCampaignReportRequestDataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data for generating a campaign report.
 */
export class GenerateCampaignReportRequestData {
  /**
   * Attributes for generating a campaign report.
   */
  "attributes": GenerateCampaignReportRequestAttributes;
  "type": GenerateCampaignReportRequestDataType;

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
      type: "GenerateCampaignReportRequestAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "GenerateCampaignReportRequestDataType",
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
    return GenerateCampaignReportRequestData.attributeTypeMap;
  }

  public constructor() {}
}
