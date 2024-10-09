/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ChangeEventCustomAttributesAuthor } from "./ChangeEventCustomAttributesAuthor";
import { ChangeEventCustomAttributesChangedResource } from "./ChangeEventCustomAttributesChangedResource";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Object representing custom event attributes required for Change events. The overall object
 */
export class ChangeEventCustomAttributes {
  /**
   * JSON Object representing the entity which made the change. Currently it only supports
   * `user` and `system` author type.
   */
  "author"?: ChangeEventCustomAttributesAuthor;
  /**
   * Required JSON Object representing a resource. A resource is defined by `type` and `name`. Currently it only
   * supports `feature_flag` resource type.
   */
  "changedResource": ChangeEventCustomAttributesChangedResource;

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
    author: {
      baseName: "author",
      type: "ChangeEventCustomAttributesAuthor",
    },
    changedResource: {
      baseName: "changed_resource",
      type: "ChangeEventCustomAttributesChangedResource",
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
    return ChangeEventCustomAttributes.attributeTypeMap;
  }

  public constructor() {}
}
