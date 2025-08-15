/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ChangeEventAttributesImpactedResourcesItemType } from "./ChangeEventAttributesImpactedResourcesItemType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A uniquely identified resource.
 */
export class ChangeEventAttributesImpactedResourcesItem {
  /**
   * The name of the impacted resource.
   */
  "name"?: string;
  /**
   * The type of the impacted resource.
   */
  "type"?: ChangeEventAttributesImpactedResourcesItemType;

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
      type: "string",
    },
    type: {
      baseName: "type",
      type: "ChangeEventAttributesImpactedResourcesItemType",
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
    return ChangeEventAttributesImpactedResourcesItem.attributeTypeMap;
  }

  public constructor() {}
}
