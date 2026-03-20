/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CreateFeatureFlagDataType } from "./CreateFeatureFlagDataType";
import { FeatureFlagAttributes } from "./FeatureFlagAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A feature flag resource.
 */
export class FeatureFlag {
  /**
   * Attributes of a feature flag.
   */
  "attributes": FeatureFlagAttributes;
  /**
   * The unique identifier of the feature flag.
   */
  "id": string;
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
      type: "FeatureFlagAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
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
    return FeatureFlag.attributeTypeMap;
  }

  public constructor() {}
}
