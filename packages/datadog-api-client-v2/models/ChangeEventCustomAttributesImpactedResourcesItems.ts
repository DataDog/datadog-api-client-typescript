/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ChangeEventCustomAttributesImpactedResourcesItemsType } from "./ChangeEventCustomAttributesImpactedResourcesItemsType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Object representing a uniquely identified resource. Only the resource type `service` is supported.
 */
export class ChangeEventCustomAttributesImpactedResourcesItems {
  /**
   * Resource's name.
   */
  "name": string;
  /**
   * Resource's type.
   */
  "type": ChangeEventCustomAttributesImpactedResourcesItemsType;

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
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ChangeEventCustomAttributesImpactedResourcesItemsType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ChangeEventCustomAttributesImpactedResourcesItems.attributeTypeMap;
  }

  public constructor() {}
}
