/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ChangeEventCustomAttributesChangedResourceName } from "./ChangeEventCustomAttributesChangedResourceName";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Required JSON Object representing a resource. A resource is defined by `type` and `name`. Currently it only
 * supports `feature_flag` resource type.
 */
export class ChangeEventCustomAttributesChangedResource {
  /**
   * Resource's type.
   */
  "name": ChangeEventCustomAttributesChangedResourceName;
  /**
   * Resource's name.
   */
  "type": string;

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
    name: {
      baseName: "name",
      type: "ChangeEventCustomAttributesChangedResourceName",
      required: true,
    },
    type: {
      baseName: "type",
      type: "string",
      required: true,
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
    return ChangeEventCustomAttributesChangedResource.attributeTypeMap;
  }

  public constructor() {}
}
