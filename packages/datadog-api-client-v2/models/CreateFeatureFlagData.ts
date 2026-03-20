/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CreateFeatureFlagAttributes } from "./CreateFeatureFlagAttributes";
import { CreateFeatureFlagDataType } from "./CreateFeatureFlagDataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data for creating a new feature flag.
 */
export class CreateFeatureFlagData {
  /**
   * Attributes for creating a new feature flag.
   */
  "attributes": CreateFeatureFlagAttributes;
  /**
   * The resource type.
   */
  "type": CreateFeatureFlagDataType;

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
      type: "CreateFeatureFlagAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "CreateFeatureFlagDataType",
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
    return CreateFeatureFlagData.attributeTypeMap;
  }

  public constructor() {}
}
