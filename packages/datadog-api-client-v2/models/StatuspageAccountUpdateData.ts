/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { StatuspageAccountType } from "./StatuspageAccountType";
import { StatuspageAccountUpdateAttributes } from "./StatuspageAccountUpdateAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Statuspage account data for an update request.
 */
export class StatuspageAccountUpdateData {
  /**
   * The Statuspage account attributes for an update request.
   */
  "attributes": StatuspageAccountUpdateAttributes;
  /**
   * Statuspage account resource type.
   */
  "type": StatuspageAccountType;

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
      type: "StatuspageAccountUpdateAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "StatuspageAccountType",
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
    return StatuspageAccountUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
