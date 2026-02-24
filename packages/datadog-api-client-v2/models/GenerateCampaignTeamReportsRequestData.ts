/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { GenerateCampaignTeamReportsRequestAttributes } from "./GenerateCampaignTeamReportsRequestAttributes";
import { GenerateCampaignTeamReportsRequestDataType } from "./GenerateCampaignTeamReportsRequestDataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data for generating team campaign reports.
 */
export class GenerateCampaignTeamReportsRequestData {
  /**
   * Attributes for generating team campaign reports.
   */
  "attributes": GenerateCampaignTeamReportsRequestAttributes;
  "type": GenerateCampaignTeamReportsRequestDataType;

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
      type: "GenerateCampaignTeamReportsRequestAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "GenerateCampaignTeamReportsRequestDataType",
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
    return GenerateCampaignTeamReportsRequestData.attributeTypeMap;
  }

  public constructor() {}
}
