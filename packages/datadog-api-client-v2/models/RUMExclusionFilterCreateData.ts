/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RUMExclusionFilterCreateAttributes } from "./RUMExclusionFilterCreateAttributes";
import { RUMExclusionFilterType } from "./RUMExclusionFilterType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The new exclusion filter properties to create.
 */
export class RUMExclusionFilterCreateData {
  /**
   * The attributes of an exclusion filter to create.
   */
  "attributes": RUMExclusionFilterCreateAttributes;
  /**
   * The resource type. The value must be `exclusion_filters`.
   */
  "type": RUMExclusionFilterType;

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
      type: "RUMExclusionFilterCreateAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "RUMExclusionFilterType",
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
    return RUMExclusionFilterCreateData.attributeTypeMap;
  }

  public constructor() {}
}
