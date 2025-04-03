import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ChangeEventCustomAttributesAuthor } from "./ChangeEventCustomAttributesAuthor";
import { ChangeEventCustomAttributesChangedResource } from "./ChangeEventCustomAttributesChangedResource";
import { ChangeEventCustomAttributesImpactedResourcesItems } from "./ChangeEventCustomAttributesImpactedResourcesItems";

/**
 * Object representing custom change event attributes.
 */
export class ChangeEventCustomAttributes {
  /**
   * Object representing the entity which made the change. Optional field but if provided should include `type` and `name`.
   */
  "author"?: ChangeEventCustomAttributesAuthor;
  /**
   * Free form object with information related to the `change` event. Can be arbitrarily nested and contain any valid JSON.
   */
  "changeMetadata"?: any;
  /**
   * Object representing a uniquely identified resource.
   */
  "changedResource": ChangeEventCustomAttributesChangedResource;
  /**
   * A list of resources impacted by this change. It is recommended to provide an impacted resource to display
   * the change event at the right location. Only resources of type `service` are supported.
   */
  "impactedResources"?: Array<ChangeEventCustomAttributesImpactedResourcesItems>;
  /**
   * Free form object to track new value of the changed resource.
   */
  "newValue"?: any;
  /**
   * Free form object to track previous value of the changed resource.
   */
  "prevValue"?: any;
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
    changeMetadata: {
      baseName: "change_metadata",
      type: "any",
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
      type: "any",
    },
    prevValue: {
      baseName: "prev_value",
      type: "any",
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
