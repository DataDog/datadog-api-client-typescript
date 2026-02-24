/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CampaignType } from "./CampaignType";
import { UpdateCampaignRequestAttributes } from "./UpdateCampaignRequestAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data for updating a campaign.
 */
export class UpdateCampaignRequestData {
  /**
   * Attributes for updating a campaign.
   */
  "attributes": UpdateCampaignRequestAttributes;
  /**
   * The JSON:API type for campaigns.
   */
  "type": CampaignType;

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
      type: "UpdateCampaignRequestAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "CampaignType",
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
    return UpdateCampaignRequestData.attributeTypeMap;
  }

  public constructor() {}
}
