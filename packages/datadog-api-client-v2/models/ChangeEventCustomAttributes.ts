/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ChangeEventCustomAttributesAuthor } from "./ChangeEventCustomAttributesAuthor";
import { ChangeEventCustomAttributesChangedResource } from "./ChangeEventCustomAttributesChangedResource";
import { ChangeEventCustomAttributesImpactedResourcesItems } from "./ChangeEventCustomAttributesImpactedResourcesItems";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Object representing custom change event attributes.
 */
export class ChangeEventCustomAttributes {
  /**
   * Object representing the entity that made the change. Optional field but if provided should include `type` and `name`.
   */
  "author"?: ChangeEventCustomAttributesAuthor;
  /**
   * Free form object with information related to the `change` event. Can be arbitrarily nested and contain any valid JSON.
   */
  "changeMetadata"?: { [key: string]: any };
  /**
   * Object representing a uniquely identified resource.
   */
  "changedResource": ChangeEventCustomAttributesChangedResource;
  /**
   * A list of resources impacted by this change. It is recommended to provide an impacted resource to display
   * the change event at the right location. Only resources of type `service` are supported. Maximum of 100 impacted resources allowed.
   */
  "impactedResources"?: Array<ChangeEventCustomAttributesImpactedResourcesItems>;
  /**
   * Free form object to track new value of the changed resource.
   */
  "newValue"?: { [key: string]: any };
  /**
   * Free form object to track previous value of the changed resource.
   */
  "prevValue"?: { [key: string]: any };

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
    changeMetadata: {
      baseName: "change_metadata",
      type: "{ [key: string]: any; }",
    },
    changedResource: {
      baseName: "changed_resource",
      type: "ChangeEventCustomAttributesChangedResource",
      required: true,
    },
    impactedResources: {
      baseName: "impacted_resources",
      type: "Array<ChangeEventCustomAttributesImpactedResourcesItems>",
    },
    newValue: {
      baseName: "new_value",
      type: "{ [key: string]: any; }",
    },
    prevValue: {
      baseName: "prev_value",
      type: "{ [key: string]: any; }",
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
