/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { StatuspageUrlSettingType } from "./StatuspageUrlSettingType";
import { StatuspageUrlSettingUpdateAttributes } from "./StatuspageUrlSettingUpdateAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Statuspage URL setting data for an update request.
 */
export class StatuspageUrlSettingUpdateData {
  /**
   * The Statuspage URL setting attributes for an update request.
   */
  "attributes": StatuspageUrlSettingUpdateAttributes;
  /**
   * The ID of the Statuspage URL setting.
   */
  "id": string;
  /**
   * Statuspage URL setting resource type.
   */
  "type": StatuspageUrlSettingType;

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
      type: "StatuspageUrlSettingUpdateAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "StatuspageUrlSettingType",
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
    return StatuspageUrlSettingUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
