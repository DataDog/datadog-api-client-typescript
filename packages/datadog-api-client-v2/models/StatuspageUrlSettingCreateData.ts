/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { StatuspageUrlSettingCreateAttributes } from "./StatuspageUrlSettingCreateAttributes";
import { StatuspageUrlSettingType } from "./StatuspageUrlSettingType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Statuspage URL setting data for a create request.
 */
export class StatuspageUrlSettingCreateData {
  /**
   * The Statuspage URL setting attributes for a create request.
   */
  "attributes": StatuspageUrlSettingCreateAttributes;
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
      type: "StatuspageUrlSettingCreateAttributes",
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
    return StatuspageUrlSettingCreateData.attributeTypeMap;
  }

  public constructor() {}
}
